import { match } from 'ts-pattern'
import { camelCase, chain } from 'voca'

export const startsWithUpperCase = (str: string) => chain(str).first().isUpperCase().value()
const pascalCase = (s: string) => chain(s).camelCase().capitalize().value()

const getComponent = async (moduleName: string) =>
  import(`@ark-ui/react/${moduleName}`).then((m) => m[pascalCase(moduleName)])

export const generateComponent = async (moduleName: string) => {
  const component = await getComponent(moduleName)

  return {
    [moduleName]: {
      components: Object.entries(component)
        .filter(([key]) => startsWithUpperCase(key))
        .reduce((acc, [key, value]) => {
          return {
            ...acc,
            [key]: {
              // @ts-expect-error
              name: value.displayName ?? pascalCase(moduleName).concat(key === 'Root' ? '' : key),
              // Segment is an alias for Radio
              partName: camelCase(key.replace('Segment', 'Radio')),
            },
          }
        }, {}),
      isArkComponent: true,
      rootComponent: pascalCase(moduleName),
      className: match(moduleName)
        .with('switch', () => 'switchRecipe') // resvered word
        .with('range-slider', () => 'slider') // same recipe
        .otherwise(() => camelCase(moduleName)),
    },
  }
}
