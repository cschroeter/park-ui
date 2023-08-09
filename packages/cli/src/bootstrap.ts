import { readFileSync } from 'fs-extra'
import Handlebars from 'handlebars'

import data from '../components.json'

const main = async () => {
  const template = Handlebars.compile(readFileSync('./src/react.hbs', 'utf-8'))

  await Promise.all(
    Object.entries(data)
      .slice(0, 1)
      .map(([key, value]) => {
        const view = {
          key,
          ...value,
        }
        const output = template(view)

        console.log(output)

        // fs.outputFile(`./dist/${key}.tsx`, output, 'utf-8')
      }),
  )
}

main()
