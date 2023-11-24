import { Command } from 'commander'
import { findUpSync } from 'find-up'
import fs from 'fs-extra'
import Handlebars from 'handlebars'
import path from 'node:path'
import prettier from 'prettier'
import v from 'voca'
import data from '../../components.json'

const prettierConfig = await prettier.resolveConfig('.')
const rootDir = path.dirname(findUpSync('pnpm-lock.yaml')!)

// const jsFrameworks = ['react']
// const cssFrameworks = ['panda']

const reactTemplate = Handlebars.compile(fs.readFileSync('./src/templates/react.hbs', 'utf-8'))

const generateIndex = async () => {
  const content = await prettier.format(
    JSON.stringify({
      components: Object.entries(data).map(([key, value]) => ({
        name: key,
        href: `https://park-ui.com/registry/panda/react/components/${key}.json`,
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
      'panda',
      'react',
      'components',
      'index.json',
    ),
    content,
  )
}

const generateRegistry = async () => {
  Handlebars.registerHelper('eq', (a, b) => a === b)
  Handlebars.registerHelper('titleCase', v.titleCase)
  await Promise.all(
    Object.entries(data).map(async ([key, value]) => {
      const view = {
        key,
        ...value,
      }
      const templateString = reactTemplate(view)
      const code = await prettier.format(templateString, {
        ...prettierConfig,
        plugins: ['prettier-plugin-organize-imports'],
        parser: 'typescript',
      })

      const content = await prettier.format(
        JSON.stringify({
          files: [
            {
              filename: `${key}.tsx`,
              content: code,
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
          'panda',
          'react',
          'components',
          key + '.json',
        ),
        content,
      )
    }),
  )
  await generateIndex()
}

export const registryCmd = new Command()
  .name('registry')
  .description('Generates the components.json')
  .action(generateRegistry)
