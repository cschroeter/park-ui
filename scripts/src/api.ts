import v from 'voca'

const pascalCase = (s: string) => v.chain(s).camelCase().capitalize().value()
const camelCase = (s: string) => v.chain(s).camelCase().value()

const main = async () => {
  const component = process.argv.slice(2)[0]

  const data = await fetch(`https://ark-ui.com/api/types/react/${component}`).then((res) =>
    res.json(),
  )

  Object.entries(data)
    .sort(([key]) => (key === 'Root' ? -1 : 1))
    .map(([name, value]) => {
      if (name === 'Root') {
        console.log(
          `export interface ${name}Props extends Assign<JsxStyleProps, ${pascalCase(
            component,
          )}.${name}Props>, ${pascalCase(component)}VariantProps {}`,
        )
        console.log(
          `export const ${name} = withProvider<RootProps>(${pascalCase(
            component,
          )}.${name}, '${camelCase(name)}')\n`,
        )
      } else {
        console.log(
          `export const ${name} = withContext<Assign<JsxStyleProps, ${pascalCase(
            component,
          )}.${name}Props>>(${pascalCase(component)}.${name}, '${camelCase(name)}')\n`,
        )
      }
    })
  console.log(
    `export { ${pascalCase(component)}Context as Context, type ${pascalCase(
      component,
    )}ContextProps as ContextProps, } from '@ark-ui/solid'\n`,
  )
}

main()
