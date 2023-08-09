import { camelCase, chain } from 'voca'

const filterStartsWithUpperCase = (s: string) => {
  return !/^[a-z]/.test(s)
}

const pascalCase = (s: string) => chain(s).camelCase().capitalize().value()

const getComponents = async (moduleName: string) => {
  const Ark = await import(`@ark-ui/react/${moduleName}`)
  const result = Object.keys(Ark).filter(String).filter(filterStartsWithUpperCase)

  return result
}

const getParts = async (moduleName: string) => {
  const anatomyName = `${camelCase(moduleName)}Anatomy`
  const anatomy = await import(`@ark-ui/react/${moduleName}`).then((m) => m[anatomyName])
  return (anatomy.keys() as string[]).sort((a, b) => b.length - a.length)
}

export const generateComponent = async (moduleName: string) => {
  const components = await getComponents(moduleName)
  const baseName = camelCase(moduleName)
  const parts = await getParts(moduleName)

  return {
    [moduleName]: {
      components: components.map((componentName) => {
        const partName = parts.find((partName) =>
          componentName.replace(baseName, 'Root').toLowerCase().endsWith(partName.toLowerCase()),
        )
        return {
          name: componentName,
          partName,
        }
      }),
      isArkComponent: true,
      rootComponent: pascalCase(moduleName),
    },
  }
}
