import { Portal } from '@ark-ui/react'
import { CopyIcon, PaintbrushIcon, Undo2Icon, XIcon } from 'lucide-react'
import { HStack, Stack } from 'styled-system/jsx'
import { BorderRadiusSlider } from '../marketing/theme/border-radius-slider'
import { ColorPalettePicker } from '../marketing/theme/color-palette-picker'
import { FontFamilySelect } from '../marketing/theme/font-family-select'
import { GrayPalettePicker } from '../marketing/theme/gray-palette-picker'
import { Button } from '../ui/button'
import {
  Drawer,
  DrawerCloseTrigger,
  DrawerContainer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer'
import { IconButton } from '../ui/icon-button'
import { ColorModeButtonGroup } from './color-mode-toggle-group'
import { CSSFrameworkSelect } from './css-framework-select'
import { FrameworkSelect } from './framework-select'

export const ThemeDrawer = () => {
  return (
    <Drawer placement="right" preventScroll={false}>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <PaintbrushIcon />
          Customize
        </Button>
      </DrawerTrigger>
      <Portal>
        <DrawerContainer>
          <DrawerContent gap="6">
            <Stack gap="1">
              <DrawerTitle>Make it yours</DrawerTitle>
              <DrawerDescription>
                Customize your theme and copy the config to use in your project.
              </DrawerDescription>
              <DrawerCloseTrigger position="absolute" top="3" right="4" asChild>
                <IconButton aria-label="Close Sidebar" variant="ghost">
                  <XIcon />
                </IconButton>
              </DrawerCloseTrigger>
            </Stack>
            <Stack flex="1" gap="5">
              <ColorModeButtonGroup />
              <FrameworkSelect />
              <CSSFrameworkSelect />
              <FontFamilySelect />
              <GrayPalettePicker />
              <ColorPalettePicker />
              <BorderRadiusSlider />
            </Stack>

            <HStack gap="3" justifyContent="end">
              <Button variant="outline">
                <Undo2Icon />
                Reset
              </Button>
              <Button>
                <CopyIcon />
                Copy Config
              </Button>
            </HStack>
          </DrawerContent>
        </DrawerContainer>
      </Portal>
    </Drawer>
  )
}
