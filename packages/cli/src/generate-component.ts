function convertToCamelCase(word: string) {
  return word.replace(/-([a-z])/g, function (_, letter) {
    return letter.toUpperCase()
  })
}
function convertToPascalCase(word: string) {
  const camelCase = convertToCamelCase(word)
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1)
}

const filterStartsWithUpperCase = (s: string) => {
  return !/^[a-z]/.test(s)
}

const getComponents = async (moduleName: string) => {
  const Ark = await import(`@ark-ui/react/${moduleName}`)
  const result = Object.keys(Ark).filter(String).filter(filterStartsWithUpperCase)

  return result
}

const getParts = async (moduleName: string) => {
  const anatomyName = `${convertToCamelCase(moduleName)}Anatomy`
  const anatomy = await import(`@ark-ui/react/${moduleName}`).then((m) => m[anatomyName])
  return (anatomy.keys() as string[]).sort((a, b) => b.length - a.length)
}

export const generateComponent = async (moduleName: string) => {
  const components = await getComponents(moduleName)
  const baseName = convertToPascalCase(moduleName)
  const parts = await getParts(moduleName)

  let root = components.sort((a, b) => a.length - b.length)[0]

  return {
    [moduleName]: {
      components: components.map((componentName) => {
        const partName = parts.find((partName) =>
          componentName.replace(baseName, 'Root').toLowerCase().endsWith(partName.toLowerCase()),
        )
        if (partName === 'root') {
          root = componentName
        }
        return {
          name: componentName,
          partName,
        }
      }),
      isArkComponent: true,
      root,
    },
  }
}
