import type { AnatomyInstance } from '@ark-ui/anatomy'
import * as components from '@ark-ui/anatomy'
import fs from 'fs-extra'
import { match } from 'ts-pattern'
import v from 'voca'

const pascalCase = (s: string) => v.chain(s).camelCase().capitalize().value()
const camelCase = (s: string) => v.chain(s).camelCase().value()

const main = async () => {
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
                  // biome-ignore lint/performance/noAccumulatingSpread: only used internally
                  ...acc,
                  [pascalCase(part)]: {
                    name: pascalCase(component).concat(pascalCase(part)),
                    slot: part,
                    component: pascalCase(component)
                      .concat('.')
                      .concat(part === 'root' ? 'Root' : pascalCase(part)),
                  },
                }
              },
              {
                Root: {
                  name: pascalCase(component).concat('Root'),
                  component: pascalCase(component).concat('.Root'),
                },
              },
            ),
          name: pascalCase(component),
          imports: {
            react: [`import { ${pascalCase(component)} } from '@ark-ui/react/${component}'`],
            solid: [`import { ${pascalCase(component)} } from '@ark-ui/solid'`],
            vue: [`import { ${pascalCase(component)} } from '@ark-ui/vue/${component}'`],
          },

          className: match(component)
            .with('switch', () => 'switchRecipe') // switch is a resvered keyword
            .otherwise(() => camelCase(component)),
        },
      }
    })

  // biome-ignore lint/performance/noAccumulatingSpread: only used internally
  const content = JSON.stringify(result.reduce((acc, item) => ({ ...acc, ...item })))

  fs.outputFileSync('./components.json', content)
}

main()
