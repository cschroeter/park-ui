type ComponentParts = Record<string, string | undefined>

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

const listUnmappedParts = (componentParts: ComponentParts, parts: string[]) => {
  const componentKeys = Object.values(componentParts)
  return parts.filter((part) => !componentKeys.includes(part))
}

const getComponents = async (moduleName: string) => {
  const Ark = await import(`@ark-ui/react/${moduleName}`).then((m) => Object.keys(m))
  return Ark.filter(filterStartsWithUpperCase)
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

  const map = components.reduce<ComponentParts>((acc, componentName: string) => {
    const partName = parts.find((partName) =>
      componentName.replace(baseName, 'Root').toLowerCase().endsWith(partName.toLowerCase()),
    )

    return { ...acc, [componentName]: partName ?? '' }
  }, {})

  const unmappedParts = listUnmappedParts(map, parts)

  return {
    [moduleName]: {
      components: map,
      // parts,
      ...(unmappedParts.length > 0 && { unmappedParts }),
    },
  }
}
