import { Flex } from 'styled-system/jsx'
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
    <Tabs.Root variant="enclosed" borderRadius="l3" borderWidth="1px" {...rootProps}>
      <Tabs.List
        background="gray.1"
        boxShadow="none"
        borderWidth="0"
        justifyContent="space-between"
        alignItems="center"
        px="4"
        height="12"
      >
        <Hide when={collapsable}>
          <Flex>
            {sources
              // .filter((source) => source.sourceCode)
              .map(({ framework, sourceCode }) => (
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
          </Flex>
          <Tabs.Indicator
            background={{ _light: 'white', _dark: 'gray.2' }}
            height="8"
            boxShadow="xs"
          />
        </Hide>
        {collapsable && <CodePreviewToggle />}
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
