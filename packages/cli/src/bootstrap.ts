import { outputFile, readFileSync } from 'fs-extra'
import Handlebars from 'handlebars'
import { titleCase } from 'voca'
import data from '../components.json'

const main = async () => {
  Handlebars.registerHelper('eq', (a, b) => a === b)
  Handlebars.registerHelper('titleCase', titleCase)

  const template = Handlebars.compile(readFileSync('./src/react.hbs', 'utf-8'))

  await Promise.all(
    Object.entries(data).map(([key, value]) => {
      const view = {
        key,
        ...value,
      }
      const output = template(view)
      outputFile(`./dist/${key}.tsx`, output, 'utf-8')
      // outputFile(`../../website/src/components/ui/${key}.tsx`, output, 'utf-8')
    }),
  )
}

main()
