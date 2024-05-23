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
        // export interface RootProps extends Accordion.RootProps, VariantProps<typeof accordion> {}
        console.log(
          `export interface ${name}Props extends ${pascalCase(
            component,
          )}.${name}Props, VariantProps<typeof ${component}> {}`,
        )
        console.log(
          //@ts-expect-error
          `export const ${name} = withProvider<${value.element},RootProps>(${pascalCase(
            component,
          )}.${name}, '${camelCase(name)}')\n`,
        )
      } else {
        console.log(
          // @ts-expect-error
          `export const ${name} = withContext<${value.element}, ${pascalCase(
            component,
          )}.${name}Props>(${pascalCase(component)}.${name}, '${camelCase(name)}')\n`,
        )
      }
    })
  console.log(
    `export { ${pascalCase(component)}Context as Context, type ${pascalCase(
      component,
    )}ContextProps as ContextProps, } from '@ark-ui/react'\n`,
  )
}

main()
