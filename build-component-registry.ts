import path, { parse } from 'node:path'
import { Project } from 'ts-morph'

type ExportEntry =
  | {
      type: 'named'
      specifier: string
      symbols: {
        name: string
        isType?: boolean | undefined
      }[]
    }
  | {
      type: 'namespace'
      specifier: string
      name: string
    }

const project = new Project()
const indexPath = path.resolve('./components/react/src/components/ui/index.ts')
const source = project.addSourceFileAtPath(indexPath)

const index: { id: string }[] = []

for (const exp of source.getExportDeclarations()) {
  const exports: ExportEntry[] = []

  const moduleSpecifier = exp.getModuleSpecifierValue()
  if (!moduleSpecifier) continue

  if (exp.getNamespaceExport()) {
    exports.push({
      type: 'namespace',
      specifier: moduleSpecifier,
      name: exp.getNamespaceExportOrThrow().getName(),
    })
  }

  const namedExports = exp.getNamedExports().map((ne) => {
    const name = ne.getName()
    const isType = ne.isTypeOnly()
    return { name, isType }
  })

  if (namedExports.length > 0) {
    exports.push({
      type: 'named',
      specifier: moduleSpecifier,
      symbols: namedExports,
    })
  }

  const moduleSourceFile = exp.getModuleSpecifierSourceFile()
  if (moduleSourceFile) {
    const sourceFile = moduleSourceFile.getFilePath()

    const file = Bun.file(sourceFile)
    if (!file.name) continue

    const id = parse(file.name).name
    const filename = parse(file.name).base

    index.push({
      id,
    })

    Bun.write(
      `./website/public/registry/latest/react/components/${id}.json`,
      JSON.stringify(
        {
          $schema: 'https://next.park-ui.com/schema/registry-item.json',
          id,
          type: 'component',
          files: [
            {
              type: 'component',
              content: await file.text(),
              path: filename,
              exports,
            },
          ],
        },
        null,
        2,
      ),
    )
  }
}

Bun.write(
  `./website/public/registry/latest/react/components/index.json`,
  JSON.stringify(index, null, 2),
)
