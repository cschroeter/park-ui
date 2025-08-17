import { access } from 'node:fs/promises'
import { join } from 'node:path'
import { Effect, pipe } from 'effect'
import { packageDirectory } from 'pkg-dir'
import { type ObjectLiteralExpression, Project, SyntaxKind } from 'ts-morph'
import { PandaConfigNotFound } from './error'

interface Args {
  config: Record<string, unknown>
  configPath: string
}

export const updatePandaConfig = async ({ config, configPath }: Args) => {
  const project = new Project()
  project.addSourceFileAtPath(configPath)

  const sourceFile = project.getSourceFileOrThrow(configPath)

  const callExpr = sourceFile
    .getDescendantsOfKind(SyntaxKind.CallExpression)
    .find((call) => call.getExpression().getText() === 'defineConfig')

  if (!callExpr) throw new Error('defineConfig(...) not found')

  const arg = callExpr.getArguments()[0]
  if (!arg || !arg.asKind(SyntaxKind.ObjectLiteralExpression)) {
    throw new Error('defineConfig arg is not an object')
  }

  const configObj = arg.asKindOrThrow(SyntaxKind.ObjectLiteralExpression)

  mergeObjectLiteral(configObj, config)

  await sourceFile.save()
}

export const getPandaConfigPath = () =>
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

const mergeObjectLiteral = (objLiteral: ObjectLiteralExpression, update: Record<string, any>) => {
  for (const [key, value] of Object.entries(update)) {
    let prop = objLiteral.getProperty(key) as any

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
