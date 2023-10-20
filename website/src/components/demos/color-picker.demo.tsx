import { PipetteIcon } from 'lucide-react'
import { HStack, Stack } from 'styled-system/jsx'
import { ColorPicker } from '~/components/ui/color-picker'
import { IconButton } from '~/components/ui/icon-button'
import { Input } from '~/components/ui/input'
import { Text } from '~/components/ui/text'

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

export const Demo = () => {
  return (
    <ColorPicker.Root defaultValue="hsl(10, 81%, 59%)">
      <ColorPicker.Content>
        <Stack gap="4">
          <ColorPicker.Area>
            <ColorPicker.AreaBackground />
            <ColorPicker.AreaThumb />
          </ColorPicker.Area>
          <HStack gap="3">
            <ColorPicker.EyeDropperTrigger asChild>
              <IconButton size="xs" variant="outline" aria-label="Pick color">
                <PipetteIcon />
              </IconButton>
            </ColorPicker.EyeDropperTrigger>
            <Stack gap="3" width="full">
              <ColorPicker.ChannelSlider channel="hue">
                <ColorPicker.ChannelSliderTrack />
                <ColorPicker.ChannelSliderThumb />
              </ColorPicker.ChannelSlider>
              <ColorPicker.ChannelSlider channel="alpha">
                <ColorPicker.ChannelSliderTrack />
                <ColorPicker.ChannelSliderThumb />
              </ColorPicker.ChannelSlider>
            </Stack>
          </HStack>
          <HStack gap="2">
            <ColorPicker.ChannelInput channel="hex" asChild>
              <Input size="2xs" />
            </ColorPicker.ChannelInput>
            <ColorPicker.ChannelInput channel="alpha" asChild>
              <Input size="2xs" />
            </ColorPicker.ChannelInput>
          </HStack>
          <Text textStyle="xs" fontWeight="medium">
            Saved Colors
          </Text>
          <ColorPicker.SwatchGroup>
            {presets.map((color) => (
              <ColorPicker.Swatch key={color} value={color} aria-label={`Pick color ${color}`}>
                <ColorPicker.TransparencyGrid size="12px" />
              </ColorPicker.Swatch>
            ))}
          </ColorPicker.SwatchGroup>
        </Stack>
      </ColorPicker.Content>
    </ColorPicker.Root>
  )
}
