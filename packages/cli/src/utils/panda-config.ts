import { join } from 'node:path'
import * as p from '@clack/prompts'
import { cosmiconfig } from 'cosmiconfig'
import { Context, Effect, Layer, pipe, Schema } from 'effect'
import {
  type ObjectLiteralExpression,
  Project,
  type PropertyAssignment,
  SyntaxKind,
} from 'ts-morph'
import type { JsonValue } from '~/schema'
import { Config } from './config'
import { PandaConfigInvalid, PandaConfigNotFound } from './errors'

const ConfigSchema = Schema.Struct({
  path: Schema.String,
})

type ConfigSchema = Schema.Schema.Type<typeof ConfigSchema>

const explorer = cosmiconfig('panda', {
  searchPlaces: ['panda.config.ts'],
})

const getConfigPath = () =>
  pipe(
    Effect.promise(() => explorer.search(process.cwd())),
    Effect.flatMap(Effect.fromNullable),
    Effect.map((result) => ({ path: result.filepath })),
    Effect.mapError(() => PandaConfigNotFound(process.cwd())),
  )

export const PandaConfig = Context.GenericTag<ConfigSchema>('PandaConfig')
const ConfigLayer = Layer.effect(PandaConfig, getConfigPath())

export const withPandaConfig = <A, R>(effect: Effect.Effect<A, never, R>) =>
  effect.pipe(
    Effect.provide(ConfigLayer),
    Effect.catchTag('PandaConfigNotFound', ({ message }) =>
      Effect.sync(() => {
        p.log.error(message)
        p.outro(`Visit https://panda-css.com/docs/overview/getting-started to get started.`)
      }),
    ),
  )

export const updatePandaConfig = ({ imports = [], extension = {} }: any) => {
  return pipe(
    Effect.all([PandaConfig, Config]),
    Effect.flatMap(([{ path }, config]) =>
      pipe(
        Effect.sync(() => new Project()),
        Effect.tap((project) => Effect.sync(() => project.addSourceFileAtPath(path))),
        Effect.flatMap((project) =>
          Effect.try({
            try: () => project.getSourceFileOrThrow(path),
            catch: () => PandaConfigNotFound(path),
          }),
        ),
        Effect.flatMap((sourceFile) =>
          pipe(
            Effect.sync(() => {
              for (const importConfig of imports) {
                if (importConfig.type === 'named') {
                  const { symbols, moduleSpecifier } = importConfig

                  sourceFile.addImportDeclaration({
                    namedImports: symbols.map((s: any) => ({
                      name: s.name,
                      isTypeOnly: Boolean(s.isType),
                    })),
                    moduleSpecifier: join(config.paths.theme, moduleSpecifier),
                  })
                }

                if (importConfig.type === 'namespace') {
                  const { namespace, moduleSpecifier } = importConfig
                  sourceFile.addImportDeclaration({
                    namespaceImport: namespace,
                    moduleSpecifier,
                  })
                }
              }
            }),
            Effect.flatMap(() =>
              pipe(
                Effect.sync(() =>
                  sourceFile
                    .getDescendantsOfKind(SyntaxKind.CallExpression)
                    .find((call) => call.getExpression().getText() === 'defineConfig'),
                ),
                Effect.flatMap(Effect.fromNullable),
                Effect.catchTag('NoSuchElementException', () =>
                  Effect.fail(PandaConfigInvalid(path)),
                ),
                Effect.flatMap((callExpr) =>
                  pipe(
                    Effect.sync(() => callExpr.getArguments()[0]),
                    Effect.flatMap(Effect.fromNullable),
                    Effect.catchTag('NoSuchElementException', () =>
                      Effect.fail(PandaConfigInvalid(path)),
                    ),
                  ),
                ),
                Effect.flatMap((arg) =>
                  Effect.try({
                    try: () => {
                      if (!arg.asKind(SyntaxKind.ObjectLiteralExpression)) {
                        throw new Error('defineConfig arg is not an object')
                      }
                      return arg.asKindOrThrow(SyntaxKind.ObjectLiteralExpression)
                    },
                    catch: () => PandaConfigInvalid(path),
                  }),
                ),
                Effect.tap((objLiteral) =>
                  Effect.sync(() => mergeObjectLiteral(objLiteral, extension)),
                ),
                Effect.tap(() => sourceFile.organizeImports()),
                Effect.flatMap(() =>
                  Effect.tryPromise({
                    try: () => sourceFile.save(),
                    catch: (error) => new Error(`Failed to save file: ${error}`),
                  }),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  )
}

const mergeObjectLiteral = (objLiteral: ObjectLiteralExpression, update: JsonValue) => {
  if (typeof update !== 'object' || update === null || Array.isArray(update)) {
    throw new Error('update must be an object')
  }
  for (const [key, value] of Object.entries(update)) {
    let prop = objLiteral.getProperty(key) as PropertyAssignment | undefined

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      if (!prop) {
        prop = objLiteral.addPropertyAssignment({
          name: key,
          initializer: '{}',
        })
      }
      const nested = (prop.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression) ??
        prop
          .setInitializer('{}')
          .getInitializerIfKind(SyntaxKind.ObjectLiteralExpression)) as ObjectLiteralExpression
      mergeObjectLiteral(nested, value)
    } else {
      if (prop) {
        const existingObj = prop.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression)
        if (
          existingObj &&
          existingObj.getProperties().length > 0 &&
          typeof value === 'string' &&
          shouldTreatAsIdentifier(key, value)
        ) {
          const existingText = existingObj.getText()
          const spreadText = existingText.slice(1, -1).trim().replace(/,\s*$/, '')
          const identifier = getIdentifierFromValue(value)
          prop.setInitializer(`{ ${spreadText}, ...${identifier} }`)
        } else {
          prop.remove()
          if (typeof value === 'string' && shouldTreatAsIdentifier(key, value)) {
            const identifier = getIdentifierFromValue(value)
            if (key === identifier) {
              // Use shorthand property assignment when key matches identifier
              objLiteral.addShorthandPropertyAssignment({
                name: key,
              })
            } else {
              // Use regular property assignment when key doesn't match identifier
              objLiteral.addPropertyAssignment({
                name: key,
                initializer: identifier,
              })
            }
          } else {
            objLiteral.addPropertyAssignment({
              name: key,
              initializer: JSON.stringify(value),
            })
          }
        }
      } else {
        if (typeof value === 'string' && shouldTreatAsIdentifier(key, value)) {
          const identifier = getIdentifierFromValue(value)
          if (key === identifier) {
            objLiteral.addShorthandPropertyAssignment({
              name: key,
            })
          } else {
            objLiteral.addPropertyAssignment({
              name: key,
              initializer: identifier,
            })
          }
        } else {
          objLiteral.addPropertyAssignment({
            name: key,
            initializer: JSON.stringify(value),
          })
        }
      }
    }
  }
}

const shouldTreatAsIdentifier = (key: string, value: string): boolean => {
  // Handle bracket notation like "{mauve}" -> mauve
  if (value.startsWith('{') && value.endsWith('}')) {
    const identifier = value.slice(1, -1)
    return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(identifier)
  }
  return key === value && /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(value)
}

const getIdentifierFromValue = (value: string): string => {
  if (value.startsWith('{') && value.endsWith('}')) {
    return value.slice(1, -1)
  }
  return value
}
