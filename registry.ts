import { join, parse, resolve } from 'node:path'
import { Glob } from 'bun'
import { type ExportDeclaration, Project } from 'ts-morph'

type ModuleDeclaration =
  | {
      type: 'named'
      moduleSpecifier: string
      symbols: { name: string; isType?: boolean }[]
    }
  | {
      type: 'namespace'
      namespace: string
      moduleSpecifier: string
    }
  | {
      type: 'object-literal'
      variableName: string
      properties: {
        key: string
        value?: string
      }[]
    }

const getExportEntries = (exp: ExportDeclaration) => {
  const exports: ModuleDeclaration[] = []

  if (exp.getNamespaceExport()) {
    exports.push({
      type: 'namespace',
      namespace: exp.getNamespaceExportOrThrow().getName(),
      moduleSpecifier: exp.getModuleSpecifierValue() || '',
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
      moduleSpecifier: exp.getModuleSpecifierValue() || '',
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
    type: 'recipe',
    fileName,
    content,
    indexFile: {
      imports: [{ type: 'named', moduleSpecifier: `./${name}`, symbols: [{ name }] }],
      exports: [
        {
          type: 'object-literal',
          variableName: content.includes('defineSlotRecipe') ? 'slotRecipes' : 'recipes',
          properties: [{ name }],
        },
      ],
    },
  }
}

const generateColors = async () => {
  const glob = new Glob('./packages/preset/src/theme/colors/*.ts')

  const grayColors = ['neutral', 'mauve', 'olive', 'sage', 'sand', 'slate']

  const grayIndex: { id: string }[] = []
  const accentIndex: { id: string }[] = []

  for await (const path of glob.scan('.')) {
    const file = Bun.file(path)
    if (!file.name) continue

    const id = parse(file.name).name
    const fileName = `./colors/${parse(file.name).base}`
    const content = await file.text()

    const type = grayColors.includes(id) ? 'gray' : 'accent'

    const files = [
      {
        type: 'theme',
        fileName,
        content,
      },
    ]

    if (type === 'gray') {
      grayIndex.push({
        id,
      })
    } else {
      accentIndex.push({
        id,
      })
    }

    Bun.write(
      `./website/public/registry/theme/colors/${type}/${id}.json`,
      JSON.stringify(
        {
          $schema: 'https://next.park-ui.com/schema/registry-item.json',
          id,
          type: 'theme',
          files,
          pandaConfig: {
            imports: [
              {
                type: 'named',
                moduleSpecifier: `./colors/${id}`,
                symbols: [{ name: id, isType: false }],
              },
            ],
            extension: {
              theme: {
                extend: {
                  semanticTokens: {
                    colors: {
                      [id]: id,
                    },
                  },
                },
              },
            },
          },
        },
        null,
        2,
      ),
    )
  }

  Bun.write(
    `./website/public/registry/theme/colors/gray/index.json`,
    JSON.stringify(
      grayIndex.sort((a, b) => a.id.localeCompare(b.id)),
      null,
      2,
    ),
  )

  Bun.write(
    `./website/public/registry/theme/colors/accent/index.json`,
    JSON.stringify(
      accentIndex.sort((a, b) => a.id.localeCompare(b.id)),
      null,
      2,
    ),
  )
}

const main = async () => {
  await generateColors()
  const project = new Project()
  const source = project.addSourceFileAtPath(
    resolve('./components/react/src/components/ui/index.ts'),
  )

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
      const fileName = parse(file.name).base

      index.push({
        id,
      })

      const recipe = await resolveRecipe(fileName)
      const content = await file.text()

      const files = [
        {
          type: 'component',
          fileName,
          content,
          indexFile: {
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
}

await main()
