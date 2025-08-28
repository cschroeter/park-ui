'use client'
import { Portal } from '@ark-ui/react/portal'
import { Wand2Icon, XIcon } from 'lucide-react'
import { HStack, Stack } from 'styled-system/jsx'
import { Drawer, IconButton } from '@/components/ui'
import { useTheme } from '~/lib/use-theme'
import { ColorModeButton } from '../color-mode-button'
import { AccentColorPicker } from './accent-color-picker'
import { GrayColorPicker } from './gray-color-picker'

export const ThemeDrawer = () => {
  const { setAccentColor, grayColor, setGrayColor, accentColor } = useTheme()

  return (
    <Drawer.Root variant="right">
      <Drawer.Trigger asChild>
        <IconButton variant="ghost" h="14" minW="14" borderRadius="0">
          <Wand2Icon />
        </IconButton>
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
                <IconButton variant="ghost" position="absolute" top="3" right="4">
                  <XIcon />
                </IconButton>
              </Drawer.CloseTrigger>
            </Drawer.Header>
            <Drawer.Body>
              <Stack flex="1" gap="4">
                {/* <FontFamilySelect font={font} onValueChange={setFont} />*/}
                <GrayColorPicker grayColor={grayColor} onValueChange={setGrayColor} />
                <AccentColorPicker accentColor={accentColor} onValueChange={setAccentColor} />
                <ColorModeButton />
                {/* <BorderRadiusSlider radius={radius} onValueChange={setRadius} /> */}
              </Stack>
            </Drawer.Body>
            <Drawer.Footer>
              <HStack gap="3">
                {/* <Button variant="outline" colorPalette="gray" onClick={reset}>
                  <Undo2Icon />
                  Reset
                </Button> */}
                {/* <ThemeConfigDialog /> */}
              </HStack>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
