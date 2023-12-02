import * as components from '@ark-ui/anatomy'
import { AnatomyInstance } from '@ark-ui/anatomy'
import { Command } from 'commander'
import fs from 'fs-extra'
import prettier from 'prettier'
import { match } from 'ts-pattern'
import v from 'voca'

const pascalCase = (s: string) => v.chain(s).camelCase().capitalize().value()
const camelCase = (s: string) => v.chain(s).camelCase().value()

const generateComponentsJson = async () => {
  const prettierConfig = await prettier.resolveConfig('.')

  const result = Object.entries(components)
    .filter(([key]) => !['createAnatomy'].includes(key))
    .filter(([key]) => key !== 'default')
    .map(([key, value]) => {
      const component = v.slugify(key.replace('Anatomy', ''))

      return {
        [component]: {
          parts: (value as AnatomyInstance<string>)
            .keys?.()
            .sort((a, b) => {
              if (a === 'root') return -1
              if (b === 'root') return 1
              return a.localeCompare(b)
            })
            .reduce(
              (acc, part) => {
                return {
                  ...acc,
                  [pascalCase(part)]: {
                    name: pascalCase(component).concat(part === 'root' ? '' : pascalCase(part)),
                    slot: part,
                    component: 'Ark'
                      .concat(pascalCase(component))
                      .concat('.')
                      .concat(part === 'root' ? 'Root' : pascalCase(part)),
                  },
                }
              },
              {
                Root: {
                  name: pascalCase(component),
                  component: 'Ark'.concat(pascalCase(component)).concat('.Root'),
                },
              },
            ),
          name: pascalCase(component),
          imports: `${pascalCase(component)} as Ark${pascalCase(component)}`,
          className: match(component)
            .with('switch', () => 'switchRecipe') // resvered word
            .otherwise(() => camelCase(component)),
        },
      }
    })

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
