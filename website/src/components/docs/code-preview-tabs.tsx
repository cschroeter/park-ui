import { Tabs } from '@/components/ui'
import type { FrameworkSourceCode } from '~/types'
import { CodeSnippet } from './code-snippet'

interface Props extends Tabs.RootProps {
  sources: FrameworkSourceCode[]
}

export const CodePreviewTabs = (props: Props) => {
  const { sources, ...rootProps } = props

  return (
    <Tabs.Root
      defaultValue="react"
      className="dark"
      variant="line"
      size="sm"
      bg="gray.2"
      borderRadius="l3"
      borderWidth="1px"
      {...rootProps}
    >
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
        <Tabs.Content key={framework} value={framework} pt="0" pb="0">
          {sourceCode && (
            <CodeSnippet sourceCode={sourceCode} borderWidth="0" borderRadius="0" my="0" />
          )}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
