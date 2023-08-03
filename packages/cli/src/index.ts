import fs from 'fs-extra'
import { generateComponent } from './generate-component'
import { supportedComponents } from './supported-components'

const main = async () => {
  const x = await Promise.all(supportedComponents.map((component) => generateComponent(component)))

  const file = './components.json'
  fs.outputJsonSync(file, x)

  // intro(`Park UI`)
  // await select({
  //   message: 'Which component would you like to generate?',
  //   options: [
  //     { value: 'accordion', label: 'Accordion' },
  //     { value: 'badge', label: 'Badge' },
  //     { value: 'carousel', label: 'Carousel' },
  //   ],
  // })
  // await confirm({
  //   message: 'Ready to install components and dependencies?',
  // })
  // // Do stuff
  // outro(`You're all set!`)
}

main()
