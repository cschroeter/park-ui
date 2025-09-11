import { mkdirSync, readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { Project } from 'ts-morph'

interface PropertyInfo {
  type: string
  defaultValue: string | undefined
  isRequired: boolean
}

const project = new Project()
const recipesDir = './components/react/styled-system/recipes'
const outputDir = './website/public/types/react'

const main = async () => {
  // Ensure output directory exists
  mkdirSync(outputDir, { recursive: true })

  // Get all .d.ts files in the recipes directory
  const dtsFiles = readdirSync(recipesDir).filter((file) => file.endsWith('.d.ts'))

  // Process files in parallel
  await Promise.all(
    dtsFiles.map(async (fileName) => {
      const filePath = join(recipesDir, fileName)
      try {
        const sourceFile = project.addSourceFileAtPath(filePath)

        // Get only interfaces that end with "Variant"
        const interfaces = sourceFile
          .getInterfaces()
          .filter((iface) => iface.getName().endsWith('Variant'))

        for (const iface of interfaces) {
          const recipeProps: Record<string, PropertyInfo> = {}

          for (const prop of iface.getProperties()) {
            const name = prop.getName()
            const type = prop.getType().getText().replace(/"/g, "'")
            const jsDocs = prop.getJsDocs()
            const defaultValue = jsDocs
              .map((d) =>
                d
                  .getTags()
                  .find((t) => t.getTagName() === 'default')
                  ?.getComment(),
              )
              .find(Boolean)

            recipeProps[name] = {
              type,
              defaultValue:
                typeof defaultValue === 'string' ? defaultValue.replace(/"/g, "'") : undefined,
              isRequired: false,
            }
          }

          // Extract recipe name from filename (e.g., avatar.d.ts -> avatar)
          const recipeName = fileName.replace('.d.ts', '')
          const outputFilePath = join(outputDir, `${recipeName}.json`)

          const result = {
            Root: {
              props: { ...recipeProps },
            },
          }

          // Save individual JSON file
          writeFileSync(outputFilePath, JSON.stringify(result, null, 2))
        }
      } catch (error) {
        console.error(
          `Error processing ${fileName}:`,
          error instanceof Error ? error.message : String(error),
        )
      }
    }),
  )
}

main().catch((error) => {
  console.error('Unexpected error:', error instanceof Error ? error.message : String(error))
  process.exit(1)
})
