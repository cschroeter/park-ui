import path from 'node:path'
import { Node, Project, SyntaxKind, VariableDeclarationKind } from 'ts-morph'

type Recipe = {
  name: string
  hasSlots: boolean
}

interface Args {
  recipe: Recipe
  dest: string
}

export const updateRecipeIndex = async (args: Args) => {
  const { recipe, dest } = args
  const project = new Project()
  const indexPath = path.resolve(path.join(dest, 'index.ts'))

  const source =
    project.addSourceFileAtPathIfExists(indexPath) ??
    project.createSourceFile(indexPath, '', { overwrite: true })

  const groupName = recipe.hasSlots ? 'slotRecipes' : 'recipes'

  const importExists = source
    .getImportDeclarations()
    .some(
      (imp) =>
        imp.getModuleSpecifierValue() === `./${recipe.name}` &&
        imp.getNamedImports().some((ni) => ni.getName() === recipe.name),
    )

  if (!importExists) {
    source.addImportDeclaration({
      namedImports: [recipe.name],
      moduleSpecifier: `./${recipe.name}`,
    })
  }

  const varDecl = source.getVariableDeclaration(groupName)

  if (!varDecl) {
    source.addVariableStatement({
      declarationKind: VariableDeclarationKind.Const,
      declarations: [
        {
          name: groupName,
          initializer: `{ ${recipe.name} }`,
        },
      ],
      isExported: true,
    })
  } else {
    const objLit = varDecl.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression)
    const hasProp = objLit.getProperties().some((prop) => {
      if (Node.isPropertyAssignment(prop) || Node.isShorthandPropertyAssignment(prop)) {
        return prop.getName() === recipe.name
      }
      return false
    })
    if (!hasProp) {
      objLit.addShorthandPropertyAssignment({
        name: recipe.name,
      })
    }
  }

  source.organizeImports()
  source.saveSync()
}
