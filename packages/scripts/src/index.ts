import fs from 'fs-extra'
import { generateComponent } from './generate-component'
import { supportedComponents } from './supported-components'

const main = async () => {
  const x = await Promise.all(supportedComponents.map((component) => generateComponent(component)))
  const y = x.reduce((acc, curr) => {
    return { ...acc, ...curr }
  }, {})

  const file = './components.json'
  fs.outputJsonSync(file, y)
}
main()
