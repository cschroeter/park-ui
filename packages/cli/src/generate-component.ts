import { camelCase, chain, lowerCase } from 'voca'

const startsWithUpperCase = (str: string) => chain(str).first().isUpperCase().value()
const pascalCase = (s: string) => chain(s).camelCase().capitalize().value()

const getComponents = async (moduleName: string) => {
  const ArkComponent = await import(`@ark-ui/react/${moduleName}`).then(
    (m) => m[pascalCase(moduleName)],
  )
  return Object.keys(ArkComponent).filter(startsWithUpperCase)
}

const getParts = async (moduleName: string) => {
  const anatomyName = `${camelCase(moduleName)}Anatomy`
  const anatomy = await import(`@ark-ui/react/${moduleName}`).then((m) => m[anatomyName])
  return anatomy.keys() as string[]
}

export const generateComponent = async (moduleName: string) => {
  const components = await getComponents(moduleName)
  const parts = await getParts(moduleName)

  return {
    [moduleName]: {
      components: components.reduce(
        (acc, componentName) => {
          const partName = parts.find((partName) => lowerCase(componentName).endsWith(partName))
          return {
            ...acc,
            [componentName]: {
              name: pascalCase(moduleName).concat(componentName),
              partName,
            },
          }
        },
        {} as Record<string, { name: string; partName?: string }>,
      ),
      isArkComponent: true,
      rootComponent: pascalCase(moduleName),
    },
  }
}
