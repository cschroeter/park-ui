import { Tabs } from '@ark-ui/react/tabs'
import { Code2Icon } from 'lucide-react'
import { useState, type PropsWithChildren } from 'react'
import { HStack } from 'styled-system/jsx'
import { CodePreview } from './code-preview'
import { CopyToClipboardButton } from './copy-to-clipboard-button'
import { Button, IconButton } from './ui'
import { Tooltip } from './ui/tooltip'

interface Props {
  code?: string
  tabs: Record<
    string,
    { label: string; disabled?: boolean; code: string; children?: React.ReactElement }
  >
  expandable?: boolean
}

export const CodePreviewTabs = (props: PropsWithChildren<Props>) => {
  const { expandable } = props
  const [collapsed, setCollapsed] = useState(expandable)
  const tabs = Object.entries(props.tabs)
  const [value, setValue] = useState(tabs[0][0])

  return (
    <Tabs.Root value={value} onValueChange={(e) => setValue(e.value)}>
      <HStack justifyContent="space-between" p="1">
        <Tabs.List>
          {Object.entries(props.tabs).map(([key, value]) => (
            <Tabs.Trigger key={key} value={key} disabled={value.disabled} asChild>
              <Button
                variant="ghost"
                size="sm"
                color="fg.muted"
                me="1"
                px="3"
                _selected={{ color: 'fg.default', background: 'gray.a3' }}
                _disabled={{ color: 'fg.disabled' }}
                display={collapsed ? 'none' : 'inline-flex'}
              >
                {value.label}
              </Button>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <HStack gap="1">
          {expandable && (
            <Tooltip.Root openDelay={0} closeDelay={0} positioning={{ placement: 'top' }}>
              <Tooltip.Trigger asChild>
                <IconButton
                  size="sm"
                  variant="ghost"
                  onClick={() => setCollapsed(!collapsed)}
                  aria-label={collapsed ? 'Show Code' : 'Hide Code'}
                  {...(!collapsed ? { 'data-selected': 'true' } : {})}
                >
                  <Code2Icon />
                </IconButton>
              </Tooltip.Trigger>
              <Tooltip.Positioner>
                <Tooltip.Content>{collapsed ? 'Show Code' : 'Hide Code'}</Tooltip.Content>
              </Tooltip.Positioner>
            </Tooltip.Root>
          )}
          <CopyToClipboardButton content={props.tabs[value].code} />
        </HStack>
      </HStack>
      {Object.entries(props.tabs).map(([key, value]) => (
        <Tabs.Content key={key} value={key} asChild>
          <CodePreview
            code={value.code}
            borderTopWidth="1px"
            data-state={collapsed ? 'collapsed' : 'expanded'}
            _collapsed={{ display: 'none' }}
          >
            {/* @ts-expect-error */}
            {props[key] ?? value.children}
          </CodePreview>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
