'use server'
import type { Doc } from '.velite'
import { getComponentProps } from '~/app/docs/actions'
import type { Framework } from './frameworks'
import { getComponentExampleSourceCode } from './source-code'

export const transformMdxContent = async (doc: Doc, framework: Framework) => {
  const context = { content: doc.content, component: doc.id, framework }

  const content = await pipe(
    context,
    replaceComponentExamples,
    replacePropsTables,
    replaceInstallationGuide,
  )

  return `# ${doc.title}\n\n${doc.description}\n\n${content}`
}

interface TransformContext {
  content: string
  component: string
  framework: Framework
}

// Utility function for async piping
const pipe = async <T extends { content: string }>(
  value: T,
  ...fns: Array<(v: T) => Promise<string>>
): Promise<string> => {
  let result = value.content
  for (const fn of fns) {
    result = await fn({ ...value, content: result } as T)
  }
  return result
}

const replaceMatches = async (
  content: string,
  regex: RegExp,
  transform: (match: RegExpMatchArray) => Promise<{ tag: string; replacement: string } | null>,
): Promise<string> => {
  const matches = [...content.matchAll(regex)]
  const replacements = (await Promise.all(matches.map(transform))).filter(Boolean)

  return replacements.reduce(
    (acc, item) => (item ? acc.replace(item.tag, item.replacement) : acc),
    content,
  )
}

const replaceComponentExamples = async (ctx: TransformContext): Promise<string> => {
  return replaceMatches(
    ctx.content,
    /<ComponentExample name="([^"]+)"[^>]*\/>/g,
    async ([tag, example]) => {
      const code = await getComponentExampleSourceCode({
        component: ctx.component,
        example,
        framework: ctx.framework,
      })
      return code ? { tag, replacement: `\`\`\`tsx\n${code}\n\`\`\`` } : null
    },
  )
}

const replacePropsTables = async (ctx: TransformContext): Promise<string> => {
  return replaceMatches(
    ctx.content,
    /<PropsTable(?:\s+part="([^"]+)")?[^>]*\/>/g,
    async ([tag, part]) => {
      const properties = await getComponentProps({
        part: part || 'Root',
        component: ctx.component,
        framework: ctx.framework,
      })

      if (!properties?.length) return null

      const table = createPropsTable(properties)
      return { tag, replacement: table }
    },
  )
}

const createPropsTable = (properties: Array<[string, any]>): string => {
  const tableRows = properties
    .map(([name, prop]) => {
      const required = prop.isRequired ? '*' : ''
      const defaultValue = prop.defaultValue
        ? stringify(prop.defaultValue).replaceAll('"', '')
        : '-'
      const type = prop.type.replaceAll('"', "'")
      const description = prop.description ? `<br/>${prop.description}` : ''
      return `| \`${name}\`${required} | ${defaultValue} | \`${type}\`${description} |`
    })
    .join('\n')

  return `| Prop | Default | Type |\n| --- | --- | --- |\n${tableRows}`
}

const replaceInstallationGuide = async (ctx: TransformContext): Promise<string> => {
  const capitalizedComponent = ctx.component.charAt(0).toUpperCase() + ctx.component.slice(1)
  const replacement = `Use the Park UI CLI to add the ${capitalizedComponent} component to your project:

\`\`\`bash
npx @park-ui/cli add ${ctx.component}
\`\`\``

  return ctx.content.replace(/<InstallationGuide[^>]*\/>/g, replacement)
}

const stringify = (value: unknown): string =>
  value === 'true' || value === 'false' ? value : JSON.stringify(value)
