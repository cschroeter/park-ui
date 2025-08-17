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
import { PandaConfigInvalid, PandaConfigNotFound } from './error'

export const updatePandaConfig = (config: Record<string, unknown>) =>
  getConfigPath().pipe(
    Effect.flatMap((configPath) =>
      pipe(
        Effect.sync(() => new Project()),
        Effect.tap((project) => Effect.sync(() => project.addSourceFileAtPath(configPath))),
        Effect.flatMap((project) =>
          Effect.try({
            try: () => project.getSourceFileOrThrow(configPath),
            catch: () => PandaConfigNotFound,
          }),
        ),
        Effect.flatMap((sourceFile) =>
          pipe(
            Effect.sync(() =>
              sourceFile
                .getDescendantsOfKind(SyntaxKind.CallExpression)
                .find((call) => call.getExpression().getText() === 'defineConfig'),
            ),
            Effect.flatMap(Effect.fromNullable),
            Effect.catchTag('NoSuchElementException', () => Effect.fail(PandaConfigInvalid)),
            Effect.flatMap((callExpr) =>
              pipe(
                Effect.sync(() => callExpr.getArguments()[0]),
                Effect.flatMap(Effect.fromNullable),
                Effect.catchTag('NoSuchElementException', () => Effect.fail(PandaConfigInvalid)),
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
                catch: () => PandaConfigInvalid,
              }),
            ),
            Effect.tap((configObj) => Effect.sync(() => mergeObjectLiteral(configObj, config))),
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
  )

const getConfigPath = () =>
  pipe(
    Effect.promise(() => packageDirectory()),
    Effect.flatMap(Effect.fromNullable),
    Effect.catchTag('NoSuchElementException', () => Effect.succeed(process.cwd())),
    Effect.map((packageDir) => join(packageDir, 'panda.config.ts')),
    Effect.flatMap((configPath) =>
      pipe(
        Effect.tryPromise({
          try: () => access(configPath),
          catch: () => PandaConfigNotFound,
        }),
        Effect.map(() => configPath),
      ),
    ),
  )

const mergeObjectLiteral = (
  objLiteral: ObjectLiteralExpression,
  update: Record<string, unknown>,
) => {
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
      mergeObjectLiteral(nested, value as Record<string, unknown>)
    } else {
      if (prop) {
        prop.setInitializer(JSON.stringify(value))
      } else {
        objLiteral.addPropertyAssignment({
          name: key,
          initializer: JSON.stringify(value),
        })
      }
    }
  }
}
