import { join, parse, resolve } from 'node:path'
import { type ExportDeclaration, Project } from 'ts-morph'

const getExportEntries = (exp: ExportDeclaration) => {
  const exports: ModuleDeclaration[] = []

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

  const type = content.includes('defineSlotRecipe') ? 'slotRecipe' : 'recipe'

  return {
    type,
    content,
    path: `./recipes/${parse(file.name).base}`,
    indexFile: {
      path: './recipes/index.ts',
      imports: [{ type: 'named', symbols: [{ name }] }],
      exports: [{ type: 'object-literal', variableName: type, properties: [{ name }] }],
    },
  }
}

type ModuleDeclaration =
  | {
      type: 'named'
      symbols: { name: string; isType?: boolean }[]
    }
  | {
      type: 'namespace'
      as: string
    }
  | {
      type: 'object-literal'
      variableName: string
      properties: {
        key: string
        value?: string
      }[]
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
        indexFile: {
          path: './index.ts',
          exports,
        },
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
