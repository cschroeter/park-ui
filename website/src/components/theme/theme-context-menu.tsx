import { CopyIcon, MoreVerticalIcon, RotateCcwIcon } from 'lucide-react'
import { HStack } from 'styled-system/jsx'
import { IconButton, Menu } from '~/components/ui'

type Props = {
  onReset: () => void
  onCopy: () => void
}

export const ThemeContextMenu = (props: Props) => {
  const { onReset, onCopy } = props
  return (
    <Menu.Root size="xs" positioning={{ placement: 'bottom-end' }}>
      <Menu.Trigger asChild>
        <IconButton aria-label="Open Menu" variant="ghost" size="sm">
          <MoreVerticalIcon />
        </IconButton>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content minW="48">
          <Menu.Item value="copy" onClick={() => onCopy()}>
            <HStack gap="2">
              <CopyIcon />
              Copy Config
            </HStack>
          </Menu.Item>
          <Menu.Item value="reset" onClick={() => onReset()}>
            <HStack gap="2">
              <RotateCcwIcon />
              Restore Defaults
            </HStack>
          </Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}
