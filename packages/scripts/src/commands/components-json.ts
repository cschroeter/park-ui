import * as components from '@ark-ui/anatomy'
import { Command } from 'commander'
import fs from 'fs-extra'
import prettier from 'prettier'
import { match } from 'ts-pattern'
import v from 'voca'

const prettierConfig = await prettier.resolveConfig('.')

const startsWithUpperCase = (str: string) => v.chain(str).first().isUpperCase().value()
const pascalCase = (s: string) => v.chain(s).camelCase().capitalize().value()
const camelCase = (s: string) => v.chain(s).camelCase().value()

const getComponent = async (moduleName: string) =>
  import(`@ark-ui/react/${moduleName}`).then((m) => m[pascalCase(moduleName)])

const getAvailaeComponents = () =>
  Object.keys(components)
    .filter((item) => !['createAnatomy'].includes(item))
    .map((key) => v.slugify(key.replace('Anatomy', '')))

const generateComponentsJson = async () => {
  const result = await Promise.all(
    getAvailaeComponents().map(async (moduleName) => {
      const component = await getComponent(moduleName)
      return {
        [moduleName]: {
          components: Object.entries(component)
            .filter(([key]) => startsWithUpperCase(key))
            .reduce((acc, [key, value]) => {
              return {
                ...acc,
                [key]: {
                  name:
                    // @ts-expect-error
                    value.displayName ?? pascalCase(moduleName).concat(key === 'Root' ? '' : key),
                  // Segment is an alias for Radio
                  partName: camelCase(key.replace('Segment', 'Radio')),
                },
              }
            }, {}),
          isArkComponent: true,
          rootComponent: pascalCase(moduleName),
          filename: `${moduleName}.ts`,
          className: match(moduleName)
            .with('switch', () => 'switchRecipe') // resvered word
            .otherwise(() => camelCase(moduleName)),
        },
      }
    }),
  )

  const content = await prettier.format(
    JSON.stringify(result.reduce((acc, item) => ({ ...acc, ...item }))),
    { ...prettierConfig, parser: 'json' },
  )

  fs.outputFileSync('./components.json', content)
}

export const componentsJsonCmd = new Command()
  .name('json')
  .description('Generates the components.json')
  .action(generateComponentsJson)
