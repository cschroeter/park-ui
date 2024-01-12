import { Command } from 'commander'
import { findUpSync } from 'find-up'
import fs from 'fs-extra'
import { globby } from 'globby'
import Handlebars from 'handlebars'
import path from 'node:path'
import prettier from 'prettier'
import v from 'voca'
import arkComponents from '../../components.json'
import parkComponents from '../../park-components.json'

const data = {
  ...arkComponents,
  ...parkComponents,
}

type Options = {
  cssFramwork: 'panda' | 'tailwind' | 'chakra'
  jsFramework: 'react' | 'solid'
}

Handlebars.registerHelper('eq', (a, b) => a === b)
Handlebars.registerHelper('titleCase', v.titleCase)

const rootDir = path.dirname(findUpSync('pnpm-lock.yaml')!)
const pascalCase = (s: string) =>
  v
    .chain(s)
    .camelCase()
    .capitalize()
    .value()
    .replace(/([A-Z])/g, ' $1')
    .trim()

const generateIndex = async (options: Options) => {
  const prettierConfig = await prettier.resolveConfig('.')

  const { cssFramwork, jsFramework } = options
  const content = await prettier.format(
    JSON.stringify({
      components: Object.entries(data)
        .sort(([a], [b]) => a.localeCompare(b))
        // if the css framework is chakra, we only want to show components that are not using the parts api
        .filter(([_, value]) => {
          if (cssFramwork === 'chakra') {
            return value.hasOwnProperty('parts')
          }
          return true
        })
        .map(([componentName, value]) => ({
          name: pascalCase(value.name),
          href: `https://park-ui.com/registry/${cssFramwork}/${jsFramework}/components/${componentName}.json`,
        })),
    }),
    {
      ...prettierConfig,
      parser: 'json',
    },
  )

  await fs.outputFile(
    path.join(
      rootDir,
      'website',
      'public',
      'registry',
      cssFramwork,
      jsFramework,
      'components',
      'index.json',
    ),
    content,
  )
}

const resolveComponents = async (options: Options) => {
  const prettierConfig = await prettier.resolveConfig('.')
  const { cssFramwork, jsFramework } = options
  const components = await globby([
    `../${jsFramework}/src/**/*.tsx`,
    `!../${jsFramework}/src/components/ui/**/*`,
    `!../${jsFramework}/src/**/*stories.tsx`,
  ])

  components.map((x) => console.log(x))
}

//   await Promise.all(
//     components.map(async (component) => {
//       const key = path.basename(path.dirname(component))
//       const content = fs.readFileSync(component, 'utf-8')
//       const registry = await prettier.format(
//         JSON.stringify({
//           files: [
//             {
//               filename: `${key}.tsx`,
//               content,
//               hasMultipleParts: false,
//             },
//           ],
//         }),
//         {
//           ...prettierConfig,
//           parser: 'json',
//         },
//       )

//       await fs.outputFile(
//         path.join(
//           rootDir,
//           'website',
//           'public',
//           'registry',
//           cssFramwork,
//           jsFramework,
//           'components',
//           key + '.json',
//         ),
//         registry,
//       )
//     }),
//   )
// }

const action = async () => {
  const jsFrameworks = ['react', 'solid'] as const
  const cssFramworks = ['panda'] as const

  jsFrameworks.forEach((jsFramework) => {
    cssFramworks.forEach(async (cssFramwork) => {
      await generateIndex({ cssFramwork, jsFramework })
      await resolveComponents({ cssFramwork, jsFramework })
    })
  })

  // generateComponents({ cssFramwork: 'chakra', jsFramework: 'react' })
  // generateIndex({ cssFramwork: 'chakra', jsFramework: 'react' })
}

export const registryCmd = new Command()
  .name('registry')
  .description('Updates the registry using the components.json file')
  .action(action)
