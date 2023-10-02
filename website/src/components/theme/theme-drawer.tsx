import { Portal } from '@ark-ui/react'
import { Settings2Icon, Undo2Icon, XIcon } from 'lucide-react'
import { HStack, Stack } from 'styled-system/jsx'
import { useThemeGenerator } from '~/lib/use-theme-generator'
import { Button } from '../ui/button'
import {
  Drawer,
  DrawerBackdrop,
  DrawerCloseTrigger,
  DrawerContainer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer'
import { IconButton } from '../ui/icon-button'
import { BorderRadiusSlider } from './border-radius-slider'
import { ColorPalettePicker } from './color-palette-picker'
import { FontFamilySelect } from './font-family-select'
import { GrayPalettePicker } from './gray-palette-picker'

interface Props {
  isHero?: boolean
  placement?: 'left' | 'right'
}

export const ThemeDrawer = (props: Props) => {
  const { placement = 'left', isHero } = props
  const { reset } = useThemeGenerator()
  return (
    <Drawer placement={placement}>
      <DrawerTrigger asChild>
        <Button variant="outline" size={isHero ? { base: 'xl', md: '2xl' } : 'md'}>
          <Settings2Icon />
          Make it yours
        </Button>
      </DrawerTrigger>
      <Portal>
        <DrawerBackdrop />
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
              <FontFamilySelect />
              <GrayPalettePicker />
              <ColorPalettePicker />
              <BorderRadiusSlider />
            </Stack>

            <HStack gap="3" justifyContent="end">
              <Button variant="outline" onClick={reset}>
                <Undo2Icon />
                Restore Defaults
              </Button>
            </HStack>
          </DrawerContent>
        </DrawerContainer>
      </Portal>
    </Drawer>
  )
}
