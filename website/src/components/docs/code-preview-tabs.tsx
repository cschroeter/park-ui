import { Tabs } from '@/components/ui'
import type { FrameworkSourceCode } from '~/types'
import { CodeSnippet } from './code-snippet'

interface Props {
  sources: FrameworkSourceCode[]
}

export const CodePreviewTabs = (props: Props) => {
  const { sources } = props

  return (
    <Tabs.Root defaultValue="react" className="dark" variant="line" size="sm" bg="gray.2">
      <Tabs.List
        bg="gray.a2"
        borderBottomWidth="1px"
        boxShadow="none"
        h="10"
        px="4"
        borderColor="gray.a4"
      >
        {sources.map(({ framework, sourceCode }) => (
          <Tabs.Trigger
            key={framework}
            value={framework}
            textTransform="capitalize"
            transform="translateY(6px)"
            disabled={!sourceCode}
          >
            {framework}
          </Tabs.Trigger>
        ))}
        <Tabs.Indicator bg="gray.12" />
      </Tabs.List>
      {sources.map(({ sourceCode, framework }) => (
        <Tabs.Content key={framework} value={framework} pt="0">
          {sourceCode && <CodeSnippet sourceCode={sourceCode} />}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
