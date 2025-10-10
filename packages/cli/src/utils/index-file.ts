import { Project } from 'ts-morph'

interface Args {
  path: string
  exportStatement?: string
}

export const updateIndexFile = (args: Args) => {
  const { path, exportStatement } = args
  if (!exportStatement) return

  const project = new Project()

  const source =
    project.addSourceFileAtPathIfExists(path) ??
    project.createSourceFile(path, '', { overwrite: true })

  // Normalize the export statement by removing newlines and extra whitespace
  const normalizedStatement = exportStatement.replace(/\s+/g, ' ').trim()

  // Match namespace export: export * as Name from 'module'
  const namespaceMatch = normalizedStatement.match(/export \* as (\w+) from ['"]([^'"]+)['"]/)
  if (namespaceMatch) {
    const namespace = namespaceMatch[1]
    const moduleSpecifier = namespaceMatch[2]

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

  // Match named export: export { Name1, type Name2, ... } from 'module'
  const namedMatch = normalizedStatement.match(/export \{ ([^}]+) \} from ['"]([^'"]+)['"]/)
  if (namedMatch) {
    const exportsStr = namedMatch[1]
    const moduleSpecifier = namedMatch[2]

    // Parse named exports
    const symbols = exportsStr.split(',').map((exp) => {
      const trimmed = exp.trim()
      const isType = trimmed.startsWith('type ')
      const name = isType ? trimmed.slice(5).trim() : trimmed
      return { name, isType }
    })

    const alreadyExists = source.getExportDeclarations().some((exp) => {
      return (
        exp.getModuleSpecifierValue() === moduleSpecifier &&
        symbols.every((sym) =>
          exp
            .getNamedExports()
            .some((ne) => ne.getName() === sym.name && ne.isTypeOnly() === sym.isType),
        )
      )
    })

    if (!alreadyExists) {
      source.addExportDeclaration({
        namedExports: symbols.map((s) => ({
          name: s.name,
          isTypeOnly: s.isType,
        })),
        moduleSpecifier,
      })
    }
  }

  source.organizeImports()
  source.saveSync()
}
