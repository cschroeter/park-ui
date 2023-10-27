import { Tabs } from '@ark-ui/react/tabs'
import { Code2Icon } from 'lucide-react'
import { useState, type PropsWithChildren } from 'react'
import { Box, HStack } from 'styled-system/jsx'
import { CopyToClipboardButton } from '../copy-to-clipboard-button'
import { Button, IconButton, Tooltip } from '../ui'

interface Props {
  tabs?: string[]
  expanable?: boolean
}

export const CodePreview = (props: PropsWithChildren<Props>) => {
  const { tabs = [], expanable, children } = props
  const [collapsed, setCollapsed] = useState(expanable)

  if (children) {
    return (
      <Box p="4" bg="gray.dark.2" borderRadius="l3">
        {children}
      </Box>
    )
  }
  return (
    <Tabs.Root defaultValue={tabs[0]}>
      <HStack justifyContent="space-between" minH="11" ps="1" pe="2">
        <Tabs.List>
          {tabs.map((option) => (
            <Tabs.Trigger key={option} value={option} asChild>
              <Button
                variant="ghost"
                size="sm"
                textTransform="capitalize"
                color="fg.muted"
                me="1"
                px="3"
                _selected={{ color: 'fg.default', background: 'gray.a3' }}
                display={collapsed ? 'none' : 'inline-flex'}
              >
                {option}
              </Button>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <HStack gap="1">
          {expanable && (
            <Tooltip.Root openDelay={0} closeDelay={0} positioning={{ placement: 'top' }}>
              <Tooltip.Trigger asChild>
                <IconButton
                  size="xs"
                  variant="ghost"
                  onClick={() => setCollapsed(!collapsed)}
                  aria-label={collapsed ? 'Show Code' : 'Collpse Code'}
                  _selected={{ bg: 'gray.a3' }}
                  {...(!collapsed ? { 'data-selected': 'true' } : {})}
                >
                  <Code2Icon />
                </IconButton>
              </Tooltip.Trigger>
              <Tooltip.Positioner>
                <Tooltip.Content>{collapsed ? 'Show Code' : 'Collpse Code'}</Tooltip.Content>
              </Tooltip.Positioner>
            </Tooltip.Root>
          )}
          <CopyToClipboardButton content="123" />
        </HStack>
      </HStack>
      {tabs.map((option) => (
        <Tabs.Content key={option} value={option} asChild>
          <Box
            p="4"
            bg="gray.dark.2"
            maxH="xl"
            overflow="auto"
            data-state={collapsed ? 'collapsed' : 'expanded'}
            _collapsed={{ display: 'none' }}
            borderTopWidth="1px"
          >
            {/* @ts-expect-error */}
            {props[option]}
          </Box>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
