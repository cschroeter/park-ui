import { Node, Project, type SourceFile, SyntaxKind, VariableDeclarationKind } from 'ts-morph'
import type { ModuleDeclaration } from './schema'

interface Args {
  imports?: ModuleDeclaration[]
  exports?: ModuleDeclaration[]
  path: string
}

export const updateIndexFile = (args: Args) => {
  const { imports, exports, path } = args
  const project = new Project()

  const source =
    project.addSourceFileAtPathIfExists(path) ??
    project.createSourceFile(path, '', { overwrite: true })

  updateImports({ source, imports })
  updateExports({ source, exports })

  source.organizeImports()
  source.saveSync()
}

interface UpdateImportsArgs {
  source: SourceFile
  imports?: ModuleDeclaration[]
}

const updateImports = (args: UpdateImportsArgs) => {
  const { source, imports = [] } = args

  for (const importConfig of imports) {
    if (importConfig.type === 'named') {
      const { symbols, moduleSpecifier } = importConfig

      source.addImportDeclaration({
        namedImports: symbols.map((s) => ({
          name: s.name,
          isTypeOnly: Boolean(s.isType),
        })),
        moduleSpecifier,
      })
    }

    if (importConfig.type === 'namespace') {
      const { namespace, moduleSpecifier } = importConfig
      source.addImportDeclaration({
        namespaceImport: namespace,
        moduleSpecifier,
      })
    }
  }
}

interface UpdateExportsArgs {
  source: SourceFile
  exports?: ModuleDeclaration[]
}

const updateExports = (args: UpdateExportsArgs) => {
  const { source, exports = [] } = args
  for (const exportConfig of exports ?? []) {
    if (exportConfig.type === 'named') {
      const { symbols, moduleSpecifier } = exportConfig
      const alreadyExists = source.getExportDeclarations().some((exp) => {
        return (
          exp.getModuleSpecifierValue() === moduleSpecifier &&
          symbols.every((sym) =>
            exp
              .getNamedExports()
              .some((ne) => ne.getName() === sym.name && ne.isTypeOnly() === Boolean(sym.isType)),
          )
        )
      })

      if (!alreadyExists) {
        source.addExportDeclaration({
          namedExports: symbols.map((s) => ({
            name: s.name,
            isTypeOnly: Boolean(s.isType),
          })),
          moduleSpecifier,
        })
      }
    }

    if (exportConfig.type === 'namespace') {
      const { namespace, moduleSpecifier } = exportConfig
      const alreadyExists = source
        .getExportDeclarations()
        .some(
          (exp) =>
            exp.getNamespaceExport()?.getName() === namespace &&
            exp.getModuleSpecifierValue() === moduleSpecifier,
        )

      if (!alreadyExists) {
        source.addExportDeclaration({
          namespaceExport: namespace,
          moduleSpecifier,
        })
      }
    }

    if (exportConfig.type === 'object-literal') {
      const { variableName, properties } = exportConfig
      const varDecl = source.getVariableDeclaration(variableName)
      if (!varDecl) {
        source.addVariableStatement({
          declarationKind: VariableDeclarationKind.Const,
          declarations: [
            {
              name: variableName,
              initializer: `{ ${properties[0].name} }`,
            },
          ],
          isExported: true,
        })
      } else {
        const objLit = varDecl.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression)
        const hasProp = objLit.getProperties().some((prop) => {
          if (Node.isPropertyAssignment(prop) || Node.isShorthandPropertyAssignment(prop)) {
            return prop.getName() === properties[0].name
          }
          return false
        })
        if (!hasProp) {
          objLit.addShorthandPropertyAssignment({
            name: properties[0].name,
          })
        }
      }
    }
  }
}
