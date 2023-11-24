import { outputFile, readFileSync } from 'fs-extra'
import Handlebars from 'handlebars'
import prettier from 'prettier'
import { titleCase } from 'voca'
import data from '../../components.json'

const targets = [
  '../../website/src/components/ui/',
  '../../examples/react/astro/src/components/ui/',
  '../../examples/react/gatsby/src/components/ui/',
  '../../examples/react/next-js/src/components/ui/',
]

const main = async () => {
  Handlebars.registerHelper('eq', (a, b) => a === b)
  Handlebars.registerHelper('titleCase', titleCase)

  const template = Handlebars.compile(readFileSync('./src/react.hbs', 'utf-8'))

  await Promise.all(
    Object.entries(data).map(async ([key, value]) => {
      const view = {
        key,
        ...value,
      }
      const templateString = template(view)
      const output = await prettier.format(templateString, {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: false,
        plugins: ['prettier-plugin-organize-imports'],
        parser: 'typescript',
      })
      targets.forEach((target) => {
        outputFile(`${target}${key}.tsx`, output)
      })
    }),
  )
}

main()
