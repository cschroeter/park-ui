import type { PropsWithChildren, ReactElement } from 'react'
import { frameworks, type SourceCode } from '~/lib/frameworks'
import { CodePreviewTabs } from '../docs/code-preview-tabs'
import { CodeSnippet } from '../docs/code-snippet'

interface CodeProps {
  className?: string
  children: string
  'data-multi'?: boolean
}

interface PreProps extends PropsWithChildren {
  children?: ReactElement<CodeProps>
}

const LUCIDE_PACKAGES: Record<string, string> = {
  solid: 'lucide-solid',
  vue: 'lucide-vue-next',
  svelte: '@lucide/svelte',
  react: 'lucide-react',
}

const transformCodeForFramework = (code: string, framework: string) =>
  code
    .replaceAll('lucide-react', LUCIDE_PACKAGES[framework] ?? LUCIDE_PACKAGES.react)
    .replaceAll('react', framework)

export const Pre = async ({ children }: PreProps) => {
  if (!children?.props) return null

  const { className, children: code, 'data-multi': isMulti } = children.props
  const lang = (className?.replace('language-', '') ?? 'tsx') as SourceCode['lang']
  const codeString = code?.toString() ?? ''

  const sourceCode: SourceCode = { code: codeString, lang }

  if (isMulti) {
    const sources = frameworks.map((framework) => ({
      framework,
      sourceCode: { code: transformCodeForFramework(codeString, framework), lang },
    }))
    return <CodePreviewTabs defaultValue="react" borderRadius="l3" sources={sources} />
  }

  return <CodeSnippet sourceCode={sourceCode} />
}
