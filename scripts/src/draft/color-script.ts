import colors from '@radix-ui/colors'
import { outputFileSync } from 'fs-extra/esm'

// Object.entries(colors)
//   .filter(([name]) => !/[A-Z]/.test(name))
//   .map(([name, colorObj]) => {
//     console.log(name)
//     const baseColors = Object.entries(colorObj).reduce((acc, [key, value]) => {
//       const scale = key.replace(/\D+/g, '')
//       return {
//         ...acc,
//         [scale]: {
//           default: `${name}.light.${scale}`,
//           _dark: `${name}.dark.${scale}`,
//         },
//       }
//     }, {})
//     const alphaColors = Object.entries(colorObj).reduce((acc, [key, value]) => {
//       const scale = 'a' + key.replace(/\D+/g, '')
//       return {
//         ...acc,
//         [scale]: {
//           default: `${name}.light.${scale}`,
//           _dark: `${name}.dark.${scale}`,
//         },
//       }
//     }, {})
//     const result = {
//       [name]: { ...baseColors, ...alphaColors },
//     }
//     return result
//   })
//   .map((x) => {
//     const [name, value] = Object.entries(x)[0]
//     outputFileSync(
//       'dist/colors/' + name + '.ts',
//       'export const ' + name + ' = ' + JSON.stringify(value) + ';',
//     )
// const file = Bun.file(`src/theme/semantic-tokens/colors/${name}.ts`)
// const writer = file.writer()
// // export const yellow = {
// //   1: { value: { base: '{colors.yellow.light.1}', _dark: '{colors.yellow.dark.1}' } },
// // }
// writer.write('export const ' + name + ' = {')
// Object.entries(value).forEach(([key, value]) => {
//   writer.write(`  ${key}: ${JSON.stringify(value)},\n`)
// })
// writer.write('}')
// writer.flush()
// })

Object.entries(colors)
  .filter(([name]) => !/[A-Z]/.test(name))
  .map(([name, colorObj]) => {
    const light = Object.entries(colorObj).reduce((acc, [key, value]) => {
      const scale = key.replace(/\D+/g, '')
      return {
        ...acc,
        [scale]: value,
      }
    }, {})

    const lightAlpha = Object.entries(colors[name + 'A']).reduce((acc, [key, value]) => {
      const scale = key.replace(/\D+/g, '')
      return {
        ...acc,
        ['a' + scale]: value,
      }
    }, {})

    const dark = Object.entries(colors[name + 'Dark']).reduce((acc, [key, value]) => {
      const scale = key.replace(/\D+/g, '')
      return {
        ...acc,
        [scale]: value,
      }
    }, {})

    const darkAlpha = Object.entries(colors[name + 'DarkA']).reduce((acc, [key, value]) => {
      const scale = key.replace(/\D+/g, '')
      return {
        ...acc,
        ['a' + scale]: value,
      }
    }, {})

    const result = {
      [name]: {
        light: {
          ...light,
          ...lightAlpha,
        },
        dark: {
          ...dark,
          ...darkAlpha,
        },
      },
    }

    return result
  })
  .map((x) => {
    const [name, value] = Object.entries(x)[0]
    console.log(name, value)

    outputFileSync(
      'dist/colors/' + name + '.ts',
      'export const ' + name + ' = ' + JSON.stringify(value) + ';',
    )
  })
