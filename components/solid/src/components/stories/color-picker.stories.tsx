import { PipetteIcon } from 'lucide-solid'
import { Index } from 'solid-js'
import type { Meta } from 'storybook-solidjs'
import { HStack, Stack } from 'styled-system/jsx'
import { ColorPicker } from '~/components/ui/color-picker'
import { IconButton } from '~/components/ui/icon-button'
import { Input } from '~/components/ui/input'
import { Text } from '~/components/ui/text'

const meta: Meta = {
  title: 'Components/Color Picker',
}

export default meta

export const Base = () => {
  return (
    <ColorPicker.Root>
      <ColorPicker.Label>Color Picker</ColorPicker.Label>
      <ColorPicker.Control>
        <ColorPicker.ChannelInput channel="hex" asChild={(props) => <Input {...props()} />} />
        <ColorPicker.Trigger>
          <IconButton variant="outline">
            <ColorPicker.Context>
              {(api) => <ColorPicker.Swatch value={api().value} />}
            </ColorPicker.Context>
          </IconButton>
        </ColorPicker.Trigger>
      </ColorPicker.Control>
      <ColorPicker.Positioner>
        <ColorPicker.Content>
          <Stack gap="3">
            <ColorPicker.Area>
              <ColorPicker.AreaBackground />
              <ColorPicker.AreaThumb />
            </ColorPicker.Area>
            <HStack gap="3">
              <ColorPicker.EyeDropperTrigger
                asChild={(props) => <IconButton {...props()} size="xs" variant="outline" />}
              >
                <PipetteIcon />
              </ColorPicker.EyeDropperTrigger>
              <Stack gap="2" flex="1">
                <ColorPicker.ChannelSlider channel="hue">
                  <ColorPicker.ChannelSliderTrack />
                  <ColorPicker.ChannelSliderThumb />
                </ColorPicker.ChannelSlider>
                <ColorPicker.ChannelSlider channel="alpha">
                  <ColorPicker.TransparencyGrid size="8px" />
                  <ColorPicker.ChannelSliderTrack />
                  <ColorPicker.ChannelSliderThumb />
                </ColorPicker.ChannelSlider>
              </Stack>
            </HStack>
            <HStack>
              <ColorPicker.ChannelInput
                channel="hex"
                asChild={(props) => <Input {...props()} size="2xs" />}
              />
              <ColorPicker.ChannelInput
                channel="alpha"
                asChild={(props) => <Input {...props()} size="2xs" />}
              />
            </HStack>
            <Stack gap="1.5">
              <Text size="xs" fontWeight="medium" color="fg.default">
                Saved Colors
              </Text>
              <ColorPicker.SwatchGroup>
                <Index each={presets}>
                  {(color) => (
                    <ColorPicker.SwatchTrigger value={color()}>
                      <ColorPicker.Swatch value={color()} />
                    </ColorPicker.SwatchTrigger>
                  )}
                </Index>
              </ColorPicker.SwatchGroup>
            </Stack>
          </Stack>
        </ColorPicker.Content>
      </ColorPicker.Positioner>
    </ColorPicker.Root>
  )
}

const presets = [
  'hsl(10, 81%, 59%)',
  'hsl(60, 81%, 59%)',
  'hsl(100, 81%, 59%)',
  'hsl(175, 81%, 59%)',
  'hsl(190, 81%, 59%)',
  'hsl(205, 81%, 59%)',
  'hsl(220, 81%, 59%)',
  'hsl(250, 81%, 59%)',
  'hsl(280, 81%, 59%)',
  'hsl(350, 81%, 59%)',
]
