import { join, parse } from 'node:path'
import { Glob } from 'bun'
import { Project } from 'ts-morph'

interface PropertyInfo {
  type: string
  defaultValue: string | undefined
  isRequired: boolean
}

const fetchArkComponentProps = async <T>(component: string): Promise<T> => {
  const prom = await fetch(`http://ark-ui.com/api/types/react/${component}`)
  return prom.json()
}

const getRecipeProps = async (component: string): Promise<Record<string, PropertyInfo> | null> => {
  const project = new Project()
  const recipesDir = './components/react/styled-system/recipes'

  // Map component names to recipe names
  const componentToRecipe = (name: string): string => {
    switch (name) {
      case 'icon-button':
      case 'close-button':
        return 'button'
      case 'switch':
        return 'switch-recipe'
      default:
        return name
    }
  }

  const recipeName = componentToRecipe(component)
  const expectedFileName = `${recipeName}.d.ts`
  const filePath = join(recipesDir, expectedFileName)

  try {
    const sourceFile = project.addSourceFileAtPath(filePath)

    // Get only interfaces that end with "Variant"
    const interfaces = sourceFile
      .getInterfaces()
      .filter((iface) => iface.getName().endsWith('Variant'))

    if (interfaces.length === 0) {
      return null
    }

    // Use the first variant interface found
    const iface = interfaces[0]
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

    return recipeProps
  } catch (error) {
    console.error(
      `Error processing recipe for ${component}:`,
      error instanceof Error ? error.message : String(error),
    )
    return null
  }
}

const main = async () => {
  const frameworks = ['react']

  frameworks.forEach(async (framework) => {
    // Get all component files
    const glob = new Glob(`components/${framework}/src/components/ui/**/*.{ts,tsx}`)

    for await (const path of glob.scan('.')) {
      const file = Bun.file(path)
      if (!file.name || file.name.endsWith('index.ts')) continue

      const component = parse(file.name).name
      const arkProps = await fetchArkComponentProps<Record<string, any>>(component)
      const recipeProps = await getRecipeProps(component)

      let finalProps = arkProps

      // If arkProps returns an error, use only recipe props
      if (arkProps.error === 'Not found') {
        if (recipeProps) {
          finalProps = {
            Root: {
              props: Object.entries(recipeProps).reduce(
                (acc, [key, value]) => {
                  acc[key] = {
                    type: value.type,
                    defaultValue: value.defaultValue,
                    isRequired: value.isRequired,
                  }
                  return acc
                },
                {} as Record<string, any>,
              ),
            },
          }
        } else {
          // If neither arkProps nor recipeProps are available, skip this component
          continue
        }
      } else if (recipeProps && arkProps.Root) {
        // Original logic: merge recipe props with ark props
        finalProps.Root.props = {
          ...arkProps.Root.props,
          ...Object.entries(recipeProps).reduce(
            (acc, [key, value]) => {
              acc[key] = {
                type: value.type,
                defaultValue: value.defaultValue,
                isRequired: value.isRequired,
              }
              return acc
            },
            {} as Record<string, any>,
          ),
        }
      }

      const destination = `./website/public/types/${framework}/${component}.json`
      Bun.write(destination, JSON.stringify(finalProps, null, 2))
    }
  })
}

main().catch((error) => {
  console.error('Unexpected error:', error instanceof Error ? error.message : String(error))
  process.exit(1)
})
