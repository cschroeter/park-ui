import { PipetteIcon } from 'lucide-solid'
import { For } from 'solid-js'
import { HStack, Stack } from 'styled-system/jsx'
import { ColorPicker } from '~/components/ui/color-picker'
import { IconButton } from '~/components/ui/icon-button'
import { Input } from '~/components/ui/input'
import { Text } from '~/components/ui/text'

export const Demo = (props: ColorPicker.RootProps) => {
  return (
    <ColorPicker.Root {...props}>
      <ColorPicker.Context>
        {(api) => (
          <>
            <ColorPicker.Label>Color Picker</ColorPicker.Label>
            <ColorPicker.Control>
              <ColorPicker.ChannelInput
                channel="hex"
                asChild={(inputProps) => <Input {...inputProps()} />}
              />
              <ColorPicker.Trigger
                asChild={(triggerProps) => (
                  <IconButton variant="outline" {...triggerProps()}>
                    <ColorPicker.Swatch value={api().value} />
                  </IconButton>
                )}
              />
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
                      asChild={(triggerProps) => (
                        <IconButton
                          size="xs"
                          variant="outline"
                          aria-label="Pick a color"
                          {...triggerProps()}
                        >
                          <PipetteIcon />
                        </IconButton>
                      )}
                    />
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
                      asChild={(inputProps) => <Input size="2xs" {...inputProps()} />}
                    />
                    <ColorPicker.ChannelInput
                      channel="alpha"
                      asChild={(inputProps) => <Input size="2xs" {...inputProps()} />}
                    />
                  </HStack>
                  <Stack gap="1.5">
                    <Text size="xs" fontWeight="medium" color="fg.default">
                      Saved Colors
                    </Text>
                    <ColorPicker.SwatchGroup>
                      <For each={presets}>
                        {(color) => (
                          <ColorPicker.SwatchTrigger value={color}>
                            <ColorPicker.Swatch value={color} />
                          </ColorPicker.SwatchTrigger>
                        )}
                      </For>
                    </ColorPicker.SwatchGroup>
                  </Stack>
                </Stack>
              </ColorPicker.Content>
            </ColorPicker.Positioner>
          </>
        )}
      </ColorPicker.Context>
      <ColorPicker.HiddenInput />
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
