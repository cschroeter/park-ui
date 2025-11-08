'use server'
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
