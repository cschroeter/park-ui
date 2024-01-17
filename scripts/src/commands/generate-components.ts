import { Command } from 'commander'
import { findUpSync } from 'find-up'
import fs from 'fs-extra'
import Handlebars from 'handlebars'
import path from 'node:path'
import prettier from 'prettier'
import arkComponents from '../../components.json'
import parkComponents from '../../park-components.json'
import { transformComponentToTvConfig } from './helpers/recipe-to-tv'

const data = {
  ...arkComponents,
  ...parkComponents,
}

const rootDir = path.dirname(findUpSync('pnpm-lock.yaml')!)

type Options = {
  cssFramwork: 'panda' | 'tailwind' | 'chakra'
  jsFramework: 'react' | 'solid'
}

const generateComponents = async (options: Options) => {
  const prettierConfig = await prettier.resolveConfig('.')
  const { cssFramwork, jsFramework } = options
  await Promise.all(
    Object.entries(data)
      .filter(
        ([key]) =>
          ![
            'avatar',
            'checkbox',
            'number-input',
            'pagination',
            'pin-input',
            'rating-group',
            'slider',
            'switch',
          ].includes(key),
      )
      .map(async ([key, value]) => {
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

        return await fs.writeFile(
          path.join(
            rootDir,
            'components',
            cssFramwork,
            jsFramework,
            'src',
            'components',
            'ui',
            `${key}.tsx`,
          ),
          code,
        )
      }),
  )
}

const action = async () => {
  const jsFrameworks = ['react'] as const
  const cssFramworks = ['tailwind'] as const

  jsFrameworks.forEach((jsFramework) => {
    cssFramworks.forEach(async (cssFramwork) => {
      await generateComponents({ cssFramwork, jsFramework })
    })
  })
}

export const command = new Command()
  .name('generate')
  .description('Generate components')
  .action(action)
