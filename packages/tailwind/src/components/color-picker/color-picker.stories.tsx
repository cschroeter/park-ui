import { PipetteIcon } from 'lucide-react'
import { IconButton } from '../icon-button/snippet'
import { Input } from '../input/snippet'
import { ColorPicker } from './snippet'

export const Demo = () => {
  return (
    <ColorPicker.Root>
      {(api) => (
        <>
          <ColorPicker.Label>Color Picker</ColorPicker.Label>
          <ColorPicker.Control>
            <ColorPicker.ChannelInput channel="hex" asChild>
              <Input />
            </ColorPicker.ChannelInput>
            <ColorPicker.Trigger asChild>
              <IconButton variant="outline" aria-label="select swatch">
                <ColorPicker.Swatch value={api.value} />
              </IconButton>
            </ColorPicker.Trigger>
          </ColorPicker.Control>
          <ColorPicker.Positioner>
            <ColorPicker.Content>
              <div className="flex flex-col gap-3">
                <ColorPicker.Area>
                  <ColorPicker.AreaBackground />
                  <ColorPicker.AreaThumb />
                </ColorPicker.Area>
                <div className="flex flex-row gap-3">
                  <ColorPicker.EyeDropperTrigger asChild>
                    <IconButton size="xs" variant="outline" aria-label="Pick a color">
                      <PipetteIcon />
                    </IconButton>
                  </ColorPicker.EyeDropperTrigger>
                  <div className="flex flex-col gap-2 flex-1">
                    <ColorPicker.ChannelSlider channel="hue">
                      <ColorPicker.ChannelSliderTrack />
                      <ColorPicker.ChannelSliderThumb />
                    </ColorPicker.ChannelSlider>
                    <ColorPicker.ChannelSlider channel="alpha">
                      <ColorPicker.TransparencyGrid size="8px" />
                      <ColorPicker.ChannelSliderTrack />
                      <ColorPicker.ChannelSliderThumb />
                    </ColorPicker.ChannelSlider>
                  </div>
                </div>
                <div className="flex flex-row">
                  <ColorPicker.ChannelInput channel="hex" asChild>
                    <Input size="2xs" />
                  </ColorPicker.ChannelInput>
                  <ColorPicker.ChannelInput channel="alpha" asChild>
                    <Input size="2xs" />
                  </ColorPicker.ChannelInput>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="textStyle_sm text-xs font-medium text-fg-default">
                    Saved Colors
                  </span>
                  <ColorPicker.SwatchGroup>
                    {presets.map((color, id) => (
                      <ColorPicker.SwatchTrigger key={id} value={color}>
                        <ColorPicker.Swatch value={color} />
                      </ColorPicker.SwatchTrigger>
                    ))}
                  </ColorPicker.SwatchGroup>
                </div>
              </div>
            </ColorPicker.Content>
          </ColorPicker.Positioner>
        </>
      )}
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
