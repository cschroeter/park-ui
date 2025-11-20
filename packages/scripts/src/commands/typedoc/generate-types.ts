import { join, parse } from 'node:path'
import { Glob } from 'bun'
import { Project } from 'ts-morph'

interface PropertyInfo {
  type: string
  defaultValue: string | undefined
  isRequired: boolean
}

const fetchArkComponentProps = async <T>(component: string): Promise<T> => {
  const componentApiMap = (name: string): string => {
    switch (name) {
      case 'drawer':
        return 'dialog'
      // Add other mappings as needed
      default:
        return name
    }
  }

  const apiComponent = componentApiMap(component)
  const prom = await fetch(`http://ark-ui.com/api/types/react/${apiComponent}`)
  return prom.json() as Promise<T>
}

const getRecipeProps = async (component: string): Promise<Record<string, PropertyInfo> | null> => {
  const project = new Project()
  const recipesDir = './styled-system/recipes'

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

    const interfaces = sourceFile
      .getInterfaces()
      .filter((iface) => iface.getName().endsWith('Variant'))

    if (interfaces.length === 0) {
      return null
    }

    const iface = interfaces[0]
    if (!iface) {
      return null
    }
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

interface ArkComponentProps {
  error?: string
  Root?: {
    props: Record<string, PropertyInfo>
  }
  [key: string]: unknown
}

const convertRecipePropsToPropertyInfo = (
  recipeProps: Record<string, PropertyInfo>,
): Record<string, PropertyInfo> => {
  return Object.entries(recipeProps).reduce(
    (acc, [key, value]) => {
      acc[key] = {
        type: value.type,
        defaultValue: value.defaultValue,
        isRequired: value.isRequired,
      }
      return acc
    },
    {} as Record<string, PropertyInfo>,
  )
}

const mergeProps = (
  arkProps: ArkComponentProps,
  recipeProps: Record<string, PropertyInfo> | null,
): ArkComponentProps | null => {
  if (arkProps.error === 'Not found') {
    return recipeProps ? { Root: { props: convertRecipePropsToPropertyInfo(recipeProps) } } : null
  }

  if (recipeProps && arkProps.Root) {
    return {
      ...arkProps,
      Root: {
        ...arkProps.Root,
        props: {
          ...convertRecipePropsToPropertyInfo(recipeProps),
          ...arkProps.Root.props,
        },
      },
    }
  }

  return arkProps
}

interface GenerateTypesOptions {
  glob: string
  dist: string
}

export const generateTypes = async (options: GenerateTypesOptions) => {
  const glob = new Glob(options.glob)

  for await (const path of glob.scan('.')) {
    const file = Bun.file(path)
    if (!file.name || file.name.endsWith('index.ts')) continue

    const component = parse(file.name).name
    const [arkProps, recipeProps] = await Promise.all([
      fetchArkComponentProps<ArkComponentProps>(component),
      getRecipeProps(component),
    ])

    const finalProps = mergeProps(arkProps, recipeProps)
    if (!finalProps) continue

    const destination = `${options.dist}/${component}.json`
    await Bun.write(destination, JSON.stringify(finalProps, null, 2))
  }
}
