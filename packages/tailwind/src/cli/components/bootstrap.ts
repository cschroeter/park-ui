import { mkdirSync } from 'fs'
import { outputFile, readFileSync } from 'fs-extra'
import Handlebars from 'handlebars'
import { titleCase } from 'voca'
import { supportedClassNames, supportedPrimitiveComponents } from '../supported-components'

const fetchComponentsJson = async () => {
  const componentsUrl =
    'https://raw.githubusercontent.com/cschroeter/park-ui/main/packages/cli/components.json'
  return fetch(componentsUrl).then((res) => res.json())
}

const main = async () => {
  Handlebars.registerHelper('eq', (a, b) => a === b)
  Handlebars.registerHelper('titleCase', titleCase)

  const multiTemplate = Handlebars.compile(
    readFileSync('./src/cli/components/templates/react-multi.hbs', 'utf-8'),
  )
  const multiComponents = await fetchComponentsJson()

  const ignoredMultiComponents = [
    'card',
    'combobox', // json not up2date
    'text',
  ]

  Object.keys(multiComponents).forEach((key) => {
    if (!supportedClassNames.includes(key) || ignoredMultiComponents.includes(key)) {
      delete multiComponents[key]
    }
  })

  await Promise.all(
    Object.entries(multiComponents).map(([key, value]) => {
      const view = {
        key,
        // @ts-ignore
        ...value,
      }
      const output = multiTemplate(view)
      // outputFile(`./dist/${key}.tsx`, output, 'utf-8')
      mkdirSync(`./src/components/${key}`, { recursive: true })
      return outputFile(`./src/components/${key}/snippet.ts`, output, 'utf-8')
    }),
  )

  const ignoredComponents = ['icon']
  const primitiveComponents = supportedPrimitiveComponents.filter(
    ({ className }) => !ignoredComponents.includes(className),
  )

  const primitiveTemplate = Handlebars.compile(
    readFileSync('./src/cli/components/templates/react-primitive.hbs', 'utf-8'),
  )

  await Promise.all(
    primitiveComponents.map((primitive) => {
      const output = primitiveTemplate(primitive)
      mkdirSync(`./src/components/${primitive.className}`, { recursive: true })
      return outputFile(`./src/components/${primitive.className}/snippet.ts`, output, 'utf-8')
    }),
  )
}

main()
