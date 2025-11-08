'use server'
import { getComponentProps } from '~/app/docs/actions'
import type { Framework } from './frameworks'
import { getComponentExampleSourceCode } from './source-code'

interface Props {
  content: string
  component: string
  framework: Framework
}

export const replaceComponentExamples = async (props: Props) => {
  const { content, component, framework } = props
  const componentExampleRegex = /<ComponentExample name="([^"]+)"[^>]*\/>/g
  const matches = [...content.matchAll(componentExampleRegex)]

  const replacements = await Promise.all(
    matches.map(async (match) => ({
      tag: match[0],
      code: await getComponentExampleSourceCode({
        component,
        example: match[1],
        framework,
      }),
    })),
  )

  return replacements
    .filter(({ code }) => code)
    .reduce((acc, { tag, code }) => acc.replace(tag, `\`\`\`tsx\n${code}\n\`\`\``), content)
}

export const replacePropsTables = async (props: Props) => {
  const { content, component, framework } = props
  const propsTableRegex = /<PropsTable(?:\s+part="([^"]+)")?[^>]*\/>/g
  const matches = [...content.matchAll(propsTableRegex)]

  const replacements = await Promise.all(
    matches.map(async (match) => {
      const part = match[1] || 'Root'
      const properties = await getComponentProps({ part, component, framework })

      if (!properties || properties.length === 0) {
        return null
      }

      const tableRows = properties
        .map(([name, property]) => {
          const required = property.isRequired ? '*' : ''
          const defaultValue = property.defaultValue
            ? stringify(property.defaultValue).replaceAll('"', '')
            : '-'
          const type = property.type.replaceAll('"', "'")
          const description = property.description ? `<br/>${property.description}` : ''

          return `| \`${name}\`${required} | ${defaultValue} | \`${type}\`${description} |`
        })
        .join('\n')

      const table = `| Prop | Default | Type |\n| --- | --- | --- |\n${tableRows}`

      return {
        tag: match[0],
        table,
      }
    }),
  )

  return replacements
    .filter((item): item is { tag: string; table: string } => item !== null)
    .reduce((acc, { tag, table }) => acc.replace(tag, table), content)
}

export const replaceInstallationGuide = async (props: Props) => {
  const { content, component } = props
  const installationGuideRegex = /<InstallationGuide[^>]*\/>/g

  const replacement = `Use the Park UI CLI to add the ${component.charAt(0).toUpperCase() + component.slice(1)} component to your project:

\`\`\`bash
npx @park-ui/cli add ${component}
\`\`\``

  return content.replace(installationGuideRegex, replacement)
}

const stringify = (value: unknown) => {
  if (value === 'true') return `true`
  if (value === 'false') return `false`
  return JSON.stringify(value)
}
