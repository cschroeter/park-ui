import path from 'node:path'
import { findUpSync } from 'find-up'
import fs from 'fs-extra'
import Handlebars from 'handlebars'
import arkComponents from '../components.json'
import parkComponents from '../park-components.json'
import { transformComponentToTvConfig } from './helpers/recipe-to-tv'

const data = {
  ...arkComponents,
  ...parkComponents,
}

const rootDir = path.dirname(findUpSync('bun.lockb') ?? '')

type Options = {
  cssFramwork: 'panda' | 'tailwind'
  jsFramework: 'react' | 'solid'
}

const generateComponents = async (options: Options) => {
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
            'progress',
            'rating-group',
            'slider',
            'switch',
            'tree-view', // TODO impl recipe
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

        const code = template(view)
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

const main = async () => {
  const jsFrameworks = ['solid'] as const
  const cssFramworks = ['tailwind'] as const

  jsFrameworks.forEach((jsFramework) => {
    cssFramworks.forEach(async (cssFramwork) => {
      await generateComponents({ cssFramwork, jsFramework })
    })
  })
}

main()
