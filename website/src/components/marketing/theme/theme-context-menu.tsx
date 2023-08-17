import { Portal } from '@ark-ui/react'
import { FiCopy, FiMoreVertical, FiRotateCcw } from 'react-icons/fi'
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
        <IconButton aria-label="Open Menu" variant="tertiary" size="sm">
          <FiMoreVertical />
        </IconButton>
      </MenuTrigger>
      <Portal>
        <MenuPositioner zIndex="toast">
          <MenuContent minW="48">
            <MenuItem id="copy" onClick={() => onCopy()}>
              <HStack gap="2">
                <FiCopy />
                Copy Config
              </HStack>
            </MenuItem>
            <MenuItem id="reset" onClick={() => onReset()}>
              <HStack gap="2">
                <FiRotateCcw />
                Restore Defaults
              </HStack>
            </MenuItem>
          </MenuContent>
        </MenuPositioner>
      </Portal>
    </Menu>
  )
}
