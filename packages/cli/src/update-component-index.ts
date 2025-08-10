import path from 'node:path'
import { Project } from 'ts-morph'
import type { ExportsConfig } from './client'

interface Args {
  exportsConfig: ExportsConfig
  dest: string
}

export const updateComponentIndex = async (args: Args) => {
  const { exportsConfig, dest } = args
  const indexPath = path.resolve(path.join(dest, 'index.ts'))
  const project = new Project()

  const source =
    project.addSourceFileAtPathIfExists(indexPath) ??
    project.createSourceFile(indexPath, '', { overwrite: true })

  if (exportsConfig.type === 'named') {
    const alreadyExists = source.getExportDeclarations().some((exp) => {
      return (
        exp.getModuleSpecifierValue() === exportsConfig.specifier &&
        exportsConfig.symbols.every((sym) =>
          exp
            .getNamedExports()
            .some((ne) => ne.getName() === sym.name && ne.isTypeOnly() === Boolean(sym.isType)),
        )
      )
    })

    if (!alreadyExists) {
      source.addExportDeclaration({
        namedExports: exportsConfig.symbols.map((s) => ({
          name: s.name,
          isTypeOnly: Boolean(s.isType),
        })),
        moduleSpecifier: exportsConfig.specifier,
      })
    }
  }

  if (exportsConfig.type === 'namespace') {
    const alreadyExists = source
      .getExportDeclarations()
      .some(
        (exp) =>
          exp.getNamespaceExport()?.getName() === exportsConfig.name &&
          exp.getModuleSpecifierValue() === exportsConfig.specifier,
      )

    if (!alreadyExists) {
      source.addExportDeclaration({
        namespaceExport: exportsConfig.name,
        moduleSpecifier: exportsConfig.specifier,
      })
    }
  }
  source.organizeImports()
  source.saveSync()
}
