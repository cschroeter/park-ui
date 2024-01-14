import { Command } from 'commander'
import { findUpSync } from 'find-up'
import fs from 'fs-extra'
import { globby } from 'globby'
import Handlebars from 'handlebars'
import path from 'node:path'
import prettier from 'prettier'
import v from 'voca'

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

  const components = await globby([
    path.join(rootDir, 'components', cssFramwork, jsFramework, 'src', 'components', 'ui'),
  ])

  const content = await prettier.format(
    JSON.stringify({
      components: components
        // // if the css framework is chakra, we only want to show components that are not using the parts api
        // .filter(([_, value]) => {
        //   if (cssFramwork === 'chakra') {
        //     return value.hasOwnProperty('parts')
        //   }
        //   return true
        // })
        .map((component) => ({
          name: pascalCase(path.parse(component).name),
          href: `https://park-ui.com/registry/${cssFramwork}/${jsFramework}/components/${
            path.parse(component).name
          }.json`,
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
  const rootDir = path.dirname(findUpSync('pnpm-lock.yaml')!)

  const components = await globby([
    path.join(rootDir, 'components', cssFramwork, jsFramework, 'src', 'components', 'ui'),
  ])

  await Promise.all(
    components.map(async (component) => {
      const componentName = path.parse(component).name
      const content = fs.readFileSync(component, 'utf-8')
      const registry = await prettier.format(
        JSON.stringify({
          files: [
            {
              filename: `${componentName}.tsx`,
              content,
              hasMultipleParts: content.includes('createStyleContext'),
            },
          ],
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
          componentName + '.json',
        ),
        registry,
      )
    }),
  )
}

const action = async () => {
  const jsFrameworks = ['react', 'solid'] as const
  const cssFramworks = ['panda', 'tailwind'] as const

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
