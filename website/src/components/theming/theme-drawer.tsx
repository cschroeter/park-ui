import { Portal } from '@ark-ui/react/portal'
import { Settings2Icon, XIcon } from 'lucide-react'
import type { PropsWithChildren } from 'react'
import { HStack, Stack } from 'styled-system/jsx'
import { Button, Drawer, IconButton } from '~/components/ui'
import { AccentColorPicker } from './accent-color-picker'
import { BorderRadiusSlider } from './border-radius-slider'
import { FontFamilySelect } from './font-family-select'
import { GrayColorPicker } from './gray-color-picker'
import { ResetThemeButton } from './reset-theme-button'
import { ThemeConfigDialog } from './theme-config-dialog'

interface Props {
  isHero?: boolean
}

export const ThemeDrawer = (props: PropsWithChildren<Props>) => {
  const { isHero } = props
  return (
    <Drawer.Root variant={isHero ? 'left' : 'right'}>
      <Drawer.Trigger asChild>
        {isHero ? (
          <Button variant="outline" size={isHero ? { base: 'xl', md: '2xl' } : 'md'}>
            <Settings2Icon />
            Make it yours
          </Button>
        ) : (
          <IconButton
            aria-label="Open Theme Drawer"
            variant="ghost"
            size="sm"
            css={{
              color: 'fg.muted',
              _hover: { color: 'fg.default' },
              '& svg': {
                width: '5',
                height: '5',
              },
            }}
          >
            <Settings2Icon />
          </IconButton>
        )}
      </Drawer.Trigger>
      <Portal>
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Make it yours</Drawer.Title>
              <Drawer.Description>
                Pick the style you want and copy the configuration to your project.
              </Drawer.Description>
              <Drawer.CloseTrigger asChild>
                <IconButton
                  aria-label="Close Sidebar"
                  variant="ghost"
                  position="absolute"
                  top="3"
                  right="4"
                >
                  <XIcon />
                </IconButton>
              </Drawer.CloseTrigger>
            </Drawer.Header>
            <Drawer.Body>
              <Stack flex="1" gap="4">
                <FontFamilySelect />
                <GrayColorPicker />
                <AccentColorPicker />
                <BorderRadiusSlider />
              </Stack>
            </Drawer.Body>
            <Drawer.Footer>
              <HStack gap="3">
                <ResetThemeButton />
                <ThemeConfigDialog />
              </HStack>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
