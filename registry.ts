import { join, parse, resolve } from 'node:path'
import { type ExportDeclaration, Project } from 'ts-morph'

const getExportEntries = (exp: ExportDeclaration) => {
  const exports: ExportEntry[] = []

  if (exp.getNamespaceExport()) {
    exports.push({
      type: 'namespace',
      as: exp.getNamespaceExportOrThrow().getName(),
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
      symbols: namedExports,
    })
  }

  return exports
}

const resolveRecipe = async (fileName: string) => {
  const file = Bun.file(join('./packages/preset/src/theme/recipes/', fileName))

  if (!file.name) return
  const name = parse(file.name).name

  const content = await file.text().catch(() => null)
  if (!content) return

  return {
    type: content.includes('defineSlotRecipe') ? 'slotRecipe' : 'recipe',
    content,
    path: `./recipes/${parse(file.name).base}`,
    exports: [{ type: 'named', symbols: [{ name }] }],
  }
}

type ExportEntry =
  | {
      type: 'named'
      symbols: { name: string; isType?: boolean }[]
    }
  | {
      type: 'namespace'
      as: string
    }

const project = new Project()
const source = project.addSourceFileAtPath(resolve('./components/react/src/components/ui/index.ts'))

const index: { id: string }[] = []

for (const exp of source.getExportDeclarations()) {
  const moduleSpecifier = exp.getModuleSpecifierValue()
  if (!moduleSpecifier) continue

  const exports = getExportEntries(exp)

  const moduleSourceFile = exp.getModuleSpecifierSourceFile()
  if (moduleSourceFile) {
    const file = Bun.file(moduleSourceFile.getFilePath())
    if (!file.name) continue

    const id = parse(file.name).name
    const path = `./${parse(file.name).base}`

    index.push({
      id,
    })

    const recipe = await resolveRecipe(path)
    const files = [
      {
        type: 'component',
        content: await file.text(),
        path,
        exports,
      },
      recipe,
    ].filter(Boolean)

    Bun.write(
      `./website/public/registry/components/react/${id}.json`,
      JSON.stringify(
        {
          $schema: 'https://next.park-ui.com/schema/registry-item.json',
          id,
          type: 'component',
          files,
        },
        null,
        2,
      ),
    )
  }
}

Bun.write(`./website/public/registry/components/react/index.json`, JSON.stringify(index, null, 2))
