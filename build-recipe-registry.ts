import path, { parse } from 'node:path'
import { Project, SyntaxKind } from 'ts-morph'

const project = new Project()
const indexPath = path.resolve('./packages/preset/src/theme/recipes/index.ts')
const source = project.addSourceFileAtPath(indexPath)

const getKeys = async (varName: string) => {
  const decl = source.getVariableDeclaration(varName)
  if (!decl) return []
  const init = decl.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression)
  if (!init) return []
  return init
    .getProperties()
    .filter((p) => p.isKind(SyntaxKind.ShorthandPropertyAssignment))
    .map(async (p) => {
      const name = p.getName()

      const identifiers = source
        .getDescendantsOfKind(SyntaxKind.Identifier)
        .filter((id) => id.getText() === name)

      for (const identifier of identifiers) {
        const importDecl = identifier.getFirstAncestorByKind(SyntaxKind.ImportDeclaration)
        if (importDecl) {
          const moduleSourceFile = importDecl.getModuleSpecifierSourceFile()
          if (!moduleSourceFile) continue

          const sourceFile = moduleSourceFile.getFilePath()
          const file = Bun.file(sourceFile)
          if (!file.name) continue

          const id = parse(file.name).name
          const filename = parse(file.name).base
          const hasSlots = varName === 'slotRecipes'
          const recipe = await file.text()

          Bun.write(
            `./website/public/registry/latest/recipes/${id}.json`,
            JSON.stringify({ id, filename, hasSlots, recipe }, null, 2),
          )

          return
        }
      }
    })
}

getKeys('slotRecipes')
getKeys('recipes')
