'use client'
import { Portal } from '@ark-ui/react/portal'
import { Undo2Icon, Wand2Icon } from 'lucide-react'
import { Button, CloseButton, Drawer, IconButton } from '@/components/ui'
import { useTheme } from '~/lib/use-theme'
import { FrameworkSelect } from '../framework-select'
import { AccentColorPicker } from './accent-color-picker'
import { BorderRadiusSlider } from './border-radius-slider'
import { FontFamilySelect } from './font-familiy-select'
import { GrayColorPicker } from './gray-color-picker'

interface Props {
  hero?: boolean
}

export const ThemeDrawer = ({ hero }: Props) => {
  const {
    accentColor,
    font,
    framework,
    grayColor,
    radius,
    reset,
    setAccentColor,
    setFont,
    setFramework,
    setGrayColor,
    setRadius,
  } = useTheme()

  return (
    <Drawer.Root placement={hero ? 'start' : 'end'} preventScroll={false}>
      <Drawer.Trigger asChild>
        {hero ? (
          <Button variant="surface" colorPalette="gray" size={{ base: 'xl', md: '2xl' }}>
            <Wand2Icon />
            Make it yours
          </Button>
        ) : (
          <IconButton variant="plain" colorPalette="gray" h="14" minW="14" borderRadius="0">
            <Wand2Icon />
          </IconButton>
        )}
      </Drawer.Trigger>
      <Portal>
        <Drawer.Positioner>
          <Drawer.Content divideY="1px">
            <Drawer.Header>
              <Drawer.Title>Make it yours</Drawer.Title>
              <Drawer.Description>Change the theme to match your style.</Drawer.Description>
              <Drawer.CloseTrigger asChild>
                <CloseButton />
              </Drawer.CloseTrigger>
            </Drawer.Header>
            <Drawer.Body gap="4">
              <FrameworkSelect framework={framework} onValueChange={setFramework} />
              <FontFamilySelect font={font} onValueChange={setFont} />
              <GrayColorPicker grayColor={grayColor} onValueChange={setGrayColor} />
              <AccentColorPicker accentColor={accentColor} onValueChange={setAccentColor} />
              <BorderRadiusSlider radius={radius} onValueChange={setRadius} />
            </Drawer.Body>
            <Drawer.Footer>
              <Button variant="subtle" onClick={reset} colorPalette="gray">
                <Undo2Icon />
                Reset
              </Button>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
