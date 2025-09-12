import { HStack } from 'styled-system/jsx'
import { Tabs } from '@/components/ui'
import type { FrameworkSourceCode } from '~/types'
import { CodePreviewToggle } from './code-preview-toggle'
import { CodeSnippet } from './code-snippet'
import { Hide } from './hide'

interface Props extends Tabs.RootProps {
  sources: FrameworkSourceCode[]
  collapsable?: boolean
}

export const CodePreviewTabs = (props: Props) => {
  const { sources, collapsable, ...rootProps } = props

  return (
    <Tabs.Root
      size="xs"
      variant="surface"
      colorPalette="gray"
      borderWidth="1px"
      lazyMount
      {...rootProps}
    >
      <Tabs.List
        borderRadius="0"
        boxShadow="none"
        justifyContent="space-between"
        _dark={{ bg: 'bg.canvas' }}
      >
        <HStack gap="1">
          <Hide when={collapsable}>
            {sources.map(({ framework, sourceCode }) => (
              <Tabs.Trigger
                key={framework}
                value={framework}
                textTransform="capitalize"
                disabled={!sourceCode}
                fontSize="13px"
              >
                {framework}
              </Tabs.Trigger>
            ))}
            <Tabs.Indicator />
          </Hide>
        </HStack>
        {collapsable && <CodePreviewToggle alignSelf="flex-end" />}
      </Tabs.List>

      {sources.map(({ sourceCode, framework }) => (
        <Tabs.Content key={framework} value={framework} p="0" className="dark">
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
