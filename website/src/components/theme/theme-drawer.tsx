import { Settings2Icon, Undo2Icon, XIcon } from 'lucide-react'
import type { PropsWithChildren } from 'react'
import { HStack, Stack } from 'styled-system/jsx'
import { Button, Drawer, IconButton } from '~/components/ui'
import { useThemeGenerator } from '~/lib/use-theme-generator'
import { AccentColorPicker } from './accent-color-picker'
import { BorderRadiusSlider } from './border-radius-slider'
import { CSSFrameworkTabs } from './css-framework-tabs'
import { FontFamilySelect } from './font-family-select'
import { GrayColorPicker } from './gray-color-picker'
import { JSFrameworkTabs } from './js-framework-tabs'
import { ThemeConfigDialog } from './theme-config-dialog'

interface Props {
  panda?: JSX.Element
  tailwind?: JSX.Element
}

export const ThemeDrawer = (props: PropsWithChildren<Props>) => {
  const { panda, tailwind } = props
  const { reset } = useThemeGenerator()
  return (
    <Drawer.Root variant="right" lazyMount>
      <Drawer.Trigger asChild>
        <Button variant="outline">
          <Settings2Icon />
          Make it yours
        </Button>
      </Drawer.Trigger>
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
              <JSFrameworkTabs />
              <CSSFrameworkTabs />
              <FontFamilySelect />
              <GrayColorPicker />
              <AccentColorPicker />
              <BorderRadiusSlider />
            </Stack>
          </Drawer.Body>
          <Drawer.Footer>
            <HStack gap="3">
              <Button variant="outline" onClick={reset}>
                <Undo2Icon />
                Reset
              </Button>
              <ThemeConfigDialog panda={panda} tailwind={tailwind} />
            </HStack>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  )
}
