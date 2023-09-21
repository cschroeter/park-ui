import { Portal } from '@ark-ui/react'
import { CopyIcon, MoreVerticalIcon, RotateCcwIcon } from 'lucide-react'
import { HStack } from 'styled-system/jsx'
import { IconButton } from '~/components/ui/icon-button'
import { Menu, MenuContent, MenuItem, MenuPositioner, MenuTrigger } from '~/components/ui/menu'

type Props = {
  onReset: () => void
  onCopy: () => void
}

export const ThemeContextMenu = (props: Props) => {
  const { onReset, onCopy } = props
  return (
    <Menu size="xs" positioning={{ placement: 'bottom-end' }}>
      <MenuTrigger asChild>
        <IconButton aria-label="Open Menu" variant="ghost" size="sm">
          <MoreVerticalIcon />
        </IconButton>
      </MenuTrigger>
      <Portal>
        <MenuPositioner zIndex="toast">
          <MenuContent minW="48">
            <MenuItem id="copy" onClick={() => onCopy()}>
              <HStack gap="2">
                <CopyIcon />
                Copy Config
              </HStack>
            </MenuItem>
            <MenuItem id="reset" onClick={() => onReset()}>
              <HStack gap="2">
                <RotateCcwIcon />
                Restore Defaults
              </HStack>
            </MenuItem>
          </MenuContent>
        </MenuPositioner>
      </Portal>
    </Menu>
  )
}
