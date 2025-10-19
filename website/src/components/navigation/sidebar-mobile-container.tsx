import { Portal } from '@ark-ui/react/portal'
import { MenuIcon } from 'lucide-react'
import { HStack } from 'styled-system/jsx'
import { CloseButton, Drawer, IconButton } from '@/components/ui'
import { Sidebar } from './sidebar'

export const SidebarMobileContainer = () => {
  return (
    <HStack
      px={{ base: '4', sm: '6', md: '8' }}
      borderBottomWidth="1px"
      height="14"
      position="fixed"
      insetX="0"
      top="14"
      hideFrom="lg"
      bg="gray.surface.bg"
      zIndex="docked"
    >
      <Drawer.Root placement="start" size={{ smDown: 'full', md: 'sm' }}>
        <Drawer.Trigger asChild>
          <IconButton size="sm" variant="plain" colorPalette="gray">
            <MenuIcon />
          </IconButton>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Positioner pt="14">
            <Drawer.Content>
              <Sidebar maxH="100dvh" maxW="full" />
              <Drawer.CloseTrigger asChild>
                <CloseButton />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </HStack>
  )
}
