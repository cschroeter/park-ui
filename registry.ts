import { join, parse, resolve } from 'node:path'
import { Project } from 'ts-morph'

const findRecipe = async (path: string) => {
  const recipe = Bun.file(join('./packages/preset/src/theme/recipes/', path))
  const content = await recipe.text().catch(() => null)

  if (!content) {
    return null
  }

  return {
    type: content.includes('defineSlotRecipe') ? 'slotRecipe' : 'recipe',
    content,
    path,
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
const indexPath = resolve('./components/react/src/components/ui/index.ts')
const source = project.addSourceFileAtPath(indexPath)

const index: { id: string }[] = []

for (const exp of source.getExportDeclarations()) {
  const exports: ExportEntry[] = []

  const moduleSpecifier = exp.getModuleSpecifierValue()
  if (!moduleSpecifier) continue

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

  const moduleSourceFile = exp.getModuleSpecifierSourceFile()
  if (moduleSourceFile) {
    const sourceFile = moduleSourceFile.getFilePath()

    const file = Bun.file(sourceFile)
    if (!file.name) continue

    const id = parse(file.name).name
    const path = `./${parse(file.name).base}`

    index.push({
      id,
    })

    const recipe = await findRecipe(path)
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
      `./website/public/registry/latest/react/components/${id}.json`,
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

Bun.write(
  `./website/public/registry/latest/react/components/index.json`,
  JSON.stringify(index, null, 2),
)
