import { Tabs } from '@/components/ui'
import type { FrameworkSourceCode } from '~/lib/frameworks'
import { CodeSnippet } from './code-snippet'

interface Props extends Tabs.RootProps {
  sources: FrameworkSourceCode[]
}

export const CodePreviewTabs = (props: Props) => {
  const { sources, ...rootProps } = props

  return (
    <Tabs.Root
      colorPalette="gray"
      bg={{ _light: 'gray.2', _dark: 'gray.1' }}
      size="xs"
      variant="enclosed"
      borderWidth="1px"
      lazyMount
      gap="0"
      overflow="hidden"
      {...rootProps}
    >
      <Tabs.List borderRadius="0" boxShadow="none" bg="inherit">
        {sources.map(({ framework, sourceCode }) => (
          <Tabs.Trigger
            key={framework}
            value={framework}
            textTransform="capitalize"
            disabled={!sourceCode}
          >
            {framework}
          </Tabs.Trigger>
        ))}
        <Tabs.Indicator />
      </Tabs.List>

      {sources.map(({ sourceCode, framework }) => (
        <Tabs.Content key={framework} value={framework} className="dark">
          {sourceCode && (
            <CodeSnippet
              sourceCode={sourceCode}
              borderWidth="0"
              borderTopWidth="1px"
              borderRadius="0"
              my="0"
            />
          )}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
