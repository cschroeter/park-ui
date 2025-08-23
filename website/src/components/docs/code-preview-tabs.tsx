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
            disabled={!example.code}
          >
            {example.framework}
          </Tabs.Trigger>
        ))}
        <Tabs.Indicator bg="gray.12" />
      </Tabs.List>
      {examples.map((example) => (
        <Tabs.Content key={example.framework} value={example.framework} pt="0">
          <CodeSnippet code={example.code} lang={example.lang} />
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
