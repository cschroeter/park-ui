import path from 'node:path'
import { Project, SyntaxKind } from 'ts-morph'

interface Args {
  dest: string
}

export const updatePandaConfig = async (args: Args) => {
  const { dest } = args
  const project = new Project()
  const configPath = path.resolve('panda.config.ts')
  const source = project.addSourceFileAtPath(configPath)

  const existingImport = source
    .getImportDeclarations()
    .find((imp) => imp.getModuleSpecifierValue() === dest)

  if (!existingImport) {
    source.addImportDeclaration({
      namedImports: ['recipes', 'slotRecipes'],
      moduleSpecifier: dest,
    })
  } else {
    for (const name of ['recipes', 'slotRecipes']) {
      if (!existingImport.getNamedImports().some((ni) => ni.getName() === name)) {
        existingImport.addNamedImport(name)
      }
    }
  }

  const callExpr = source.getFirstDescendantByKindOrThrow(SyntaxKind.CallExpression)
  const objArg = callExpr.getArguments()[0]

  if (objArg && objArg.getKind() === SyntaxKind.ObjectLiteralExpression) {
    const configObj = objArg.asKindOrThrow(SyntaxKind.ObjectLiteralExpression)
    let themeProp = configObj.getProperty('theme')

    if (!themeProp) {
      themeProp = configObj.addPropertyAssignment({
        name: 'theme',
        initializer: '{ extend: { recipes, slotRecipes } }',
      })
    } else {
      const themeObj = themeProp.getFirstDescendantByKindOrThrow(SyntaxKind.ObjectLiteralExpression)
      let extendProp = themeObj.getProperty('extend')

      if (!extendProp) {
        extendProp = themeObj.addPropertyAssignment({
          name: 'extend',
          initializer: '{ recipes, slotRecipes }',
        })
      } else {
        const extendObj = extendProp.getFirstDescendantByKindOrThrow(
          SyntaxKind.ObjectLiteralExpression,
        )
        for (const name of ['recipes', 'slotRecipes']) {
          const hasProp = extendObj.getProperty(name)
          if (!hasProp) {
            extendObj.addShorthandPropertyAssignment({
              name,
            })
          }
        }
      }
    }
  }

  source.organizeImports()
  source.saveSync()
}
