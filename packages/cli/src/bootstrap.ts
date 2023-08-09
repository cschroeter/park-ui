import { outputFile, readFileSync } from 'fs-extra'
import Handlebars from 'handlebars'
import { camelCase } from 'voca'
import data from '../components.json'

const main = async () => {
  Handlebars.registerHelper('eq', (a, b) => a === b)
  Handlebars.registerHelper('camelCase', camelCase)
  const template = Handlebars.compile(readFileSync('./src/react.hbs', 'utf-8'))

  await Promise.all(
    Object.entries(data)
      // .slice(0, 1)
      .map(([key, value]) => {
        const view = {
          key,
          ...value,
        }
        const output = template(view)
        // console.log(output)
        outputFile(`./dist/${key}.tsx`, output, 'utf-8')
      }),
  )
}

main()
