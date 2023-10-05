import * as colors from '@radix-ui/colors'

type ColorObj = {
  [key: string]: string
}

type ColorList = [string, ColorObj][]

type ReducedColors = {
  [category: string]: {
    [index: number]: {
      value: {
        base: string
        _dark: string
      }
    }
  }
}

const reduceColors = (colorList: ColorList): ReducedColors => {
  const reducedColors: ReducedColors = {}

  colorList.forEach(([name, colorObj]) => {
    const isDark = name.endsWith('Dark')
    const cleanName = isDark ? name.slice(0, -4) : name

    if (!reducedColors[cleanName]) {
      reducedColors[cleanName] = {}
    }

    Object.entries(colorObj).forEach(([key, value]) => {
      const index = parseInt(key.replace(/[^\d]/g, ''), 10)

      if (!reducedColors[cleanName][index]) {
        // @ts-expect-error
        reducedColors[cleanName][index] = { value: {} }
      }

      isDark
        ? (reducedColors[cleanName][index].value._dark = value)
        : (reducedColors[cleanName][index].value.base = value)
    })
  })

  return reducedColors
}

const result = Object.entries(colors)
  .filter(([name]) => !name.endsWith('P3A'))
  .filter(([name]) => !name.endsWith('P3'))
  .filter(([name]) => !name.endsWith('A'))
  .filter(([name]) => !name.endsWith('default'))

const data = reduceColors(result)

// @ts-expect-error
await Bun.write('output.json', JSON.stringify(data, null, 2))
