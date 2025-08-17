import { type ObjectLiteralExpression, Project, SyntaxKind } from 'ts-morph'

/**
 * Updates the `theme` property inside panda.config.ts
 * @param configPath path to panda.config.ts
 * @param themeUpdate object to merge into theme
 */
export async function updatePandaTheme(
  themeUpdate: Record<string, unknown>,
  configPath = './panda.config.ts',
) {
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

  let themeProp = configObj.getProperty('theme') as any
  if (!themeProp) {
    themeProp = configObj.addPropertyAssignment({
      name: 'theme',
      initializer: '{}',
    })
  }

  const themeObj = (themeProp.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression) ??
    themeProp
      .setInitializer('{}')
      .getInitializerIfKind(SyntaxKind.ObjectLiteralExpression)) as ObjectLiteralExpression

  mergeObjectLiteral(themeObj, themeUpdate)

  await sourceFile.save()
}

/**
 * Recursively merges a plain object into an ObjectLiteralExpression
 */
function mergeObjectLiteral(objLiteral: ObjectLiteralExpression, update: Record<string, any>) {
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
