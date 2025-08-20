import { access } from 'node:fs/promises'
import { join } from 'node:path'
import { Effect, pipe } from 'effect'
import { packageDirectory } from 'pkg-dir'
import {
  type ObjectLiteralExpression,
  Project,
  type PropertyAssignment,
  SyntaxKind,
} from 'ts-morph'
import type { JsonValue, PandaConfig } from '../schema'
import { PandaConfigInvalid, PandaConfigNotFound } from './errors'

interface Args {
  config: PandaConfig
  themePath: string
}

export const updatePandaConfig = ({
  config: { imports = [], extension = {} },
  themePath,
}: Args) => {
  return getConfigPath().pipe(
    Effect.flatMap((configPath) =>
      pipe(
        Effect.sync(() => new Project()),
        Effect.tap((project) => Effect.sync(() => project.addSourceFileAtPath(configPath))),
        Effect.flatMap((project) =>
          Effect.try({
            try: () => project.getSourceFileOrThrow(configPath),
            catch: () => PandaConfigNotFound(configPath),
          }),
        ),
        Effect.flatMap((sourceFile) =>
          pipe(
            Effect.sync(() => {
              for (const importConfig of imports) {
                if (importConfig.type === 'named') {
                  const { symbols, moduleSpecifier } = importConfig

                  sourceFile.addImportDeclaration({
                    namedImports: symbols.map((s) => ({
                      name: s.name,
                      isTypeOnly: Boolean(s.isType),
                    })),
                    moduleSpecifier: join(themePath, moduleSpecifier),
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
                  Effect.fail(PandaConfigInvalid(configPath)),
                ),
                Effect.flatMap((callExpr) =>
                  pipe(
                    Effect.sync(() => callExpr.getArguments()[0]),
                    Effect.flatMap(Effect.fromNullable),
                    Effect.catchTag('NoSuchElementException', () =>
                      Effect.fail(PandaConfigInvalid(configPath)),
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
                    catch: () => PandaConfigInvalid(configPath),
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

export const verifyPandaConfig = () =>
  getConfigPath().pipe(
    Effect.flatMap((configPath) =>
      Effect.tryPromise({
        try: () => access(configPath),
        catch: () => PandaConfigNotFound(configPath),
      }),
    ),
  )

const getConfigPath = () =>
  pipe(
    Effect.promise(() => packageDirectory()),
    Effect.flatMap(Effect.fromNullable),
    Effect.catchTag('NoSuchElementException', () => Effect.succeed(process.cwd())),
    Effect.map((packageDir) => join(packageDir, 'panda.config.ts')),
  )

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
