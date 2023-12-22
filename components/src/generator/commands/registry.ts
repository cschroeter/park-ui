import { Command } from 'commander'
import { findUpSync } from 'find-up'
import fs from 'fs-extra'
import Handlebars from 'handlebars'
import path from 'node:path'
import prettier from 'prettier'
import v from 'voca'
import arkComponents from '../../components.json'
import parkComponents from '../../park-components.json'
import { transformComponentToTvConfig } from './helpers/recipe-to-tv'

const data = {
  ...arkComponents,
  ...parkComponents,
}

type Options = {
  cssFramwork: 'panda' | 'tailwind'
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

const generateComponents = async (options: Options) => {
  const prettierConfig = await prettier.resolveConfig('.')

  const { cssFramwork, jsFramework } = options
  await Promise.all(
    Object.entries(data).map(async ([key, value]) => {
      const view = {
        key,
        ...value,
        imports: value.imports[jsFramework],
        tvConfig: JSON.stringify(transformComponentToTvConfig(value.className)),
      }

      const variant = value.hasOwnProperty('parts') ? 'with-context' : 'without-context'

      const template = Handlebars.compile(
        fs.readFileSync(`./src/templates/${cssFramwork}/${jsFramework}/${variant}.hbs`, 'utf-8'),
      )

      const templateString = template(view)

      const code = await prettier.format(templateString, {
        ...prettierConfig,
        plugins: ['prettier-plugin-organize-imports'],
        parser: 'typescript',
      })

      const content = await prettier.format(
        JSON.stringify({
          files: [
            {
              filename: `${key}.ts`,
              content: code,
              hasMultipleParts: value.hasOwnProperty('parts'),
            },
          ],
        }),
        {
          ...prettierConfig,
          parser: 'json',
        },
      )

      // await fs.outputFile(path.join(`dist/${cssFramwork}/${jsFramework}/${key}.tsx`), code)
      // await fs.outputFile(
      //   path.join(rootDir, 'website', 'src', 'components', 'ui', `${key}.tsx`),
      //   code,
      // )

      await fs.outputFile(
        path.join(
          rootDir,
          'website',
          'public',
          'registry',
          cssFramwork,
          jsFramework,
          'components',
          key + '.json',
        ),
        content,
      )
    }),
  )

  // generate custom components from templates/react/components
  // replacers for tailwind react

  // adds second file to registry avatar.json (without use client because no context)
}

const generateRegistry = async () => {
  const jsFrameworks = ['react'] as const
  const cssFramworks = ['panda'] as const

  jsFrameworks.forEach((jsFramework) => {
    cssFramworks.forEach((cssFramwork) => {
      generateIndex({ cssFramwork, jsFramework })
      generateComponents({ cssFramwork, jsFramework })
    })
  })
}

export const registryCmd = new Command()
  .name('registry')
  .description('Updates the registry using the components.json file')
  .action(generateRegistry)
