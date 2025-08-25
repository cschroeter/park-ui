import { Tabs } from '@/components/ui'
import type { CodeExample } from '~/types'
import { CodeSnippet } from './code-snippet'

interface Props {
  examples: CodeExample[]
}

export const CodePreviewTabs = (props: Props) => {
  const { examples } = props

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
        {examples.map((example) => (
          <Tabs.Trigger
            key={example.framework}
            value={example.framework}
            textTransform="capitalize"
            transform="translateY(6px)"
            disabled={!example.sourceCode}
          >
            {example.framework}
          </Tabs.Trigger>
        ))}
        <Tabs.Indicator bg="gray.12" />
      </Tabs.List>
      {examples.map(({ sourceCode, framework }) => (
        <Tabs.Content key={framework} value={framework} pt="0">
          {sourceCode && <CodeSnippet sourceCode={sourceCode} />}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
