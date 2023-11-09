import * as Ark from '@ark-ui/react/color-picker'
import { createStyleContext } from '~/lib/create-style-context'
import { colorPickerStyles } from './recipe'

const { withProvider, withContext } = createStyleContext(colorPickerStyles)

export * from '@ark-ui/react/color-picker'

const ColorPickerRoot = withProvider(Ark.ColorPicker.Root, 'root')
export const ColorPickerArea = withContext(Ark.ColorPicker.Area, 'area')
export const ColorPickerAreaBackground = withContext(
  Ark.ColorPicker.AreaBackground,
  'areaBackground',
)
export const ColorPickerAreaThumb = withContext(Ark.ColorPicker.AreaThumb, 'areaThumb')
export const ColorPickerChannelInput = withContext(Ark.ColorPicker.ChannelInput, 'channelInput')
export const ColorPickerChannelSlider = withContext(Ark.ColorPicker.ChannelSlider, 'channelSlider')
export const ColorPickerChannelSliderThumb = withContext(
  Ark.ColorPicker.ChannelSliderThumb,
  'channelSliderThumb',
)
export const ColorPickerChannelSliderTrack = withContext(
  Ark.ColorPicker.ChannelSliderTrack,
  'channelSliderTrack',
)
export const ColorPickerContent = withContext(Ark.ColorPicker.Content, 'content')
export const ColorPickerControl = withContext(Ark.ColorPicker.Control, 'control')
export const ColorPickerEyeDropperTrigger = withContext(
  Ark.ColorPicker.EyeDropperTrigger,
  'eyeDropperTrigger',
)
export const ColorPickerLabel = withContext(Ark.ColorPicker.Label, 'label')
export const ColorPickerPositioner = withContext(Ark.ColorPicker.Positioner, 'positioner')
export const ColorPickerSwatch = withContext(Ark.ColorPicker.Swatch, 'swatch')
export const ColorPickerSwatchGroup = withContext(Ark.ColorPicker.SwatchGroup, 'swatchGroup')
export const ColorPickerSwatchTrigger = withContext(Ark.ColorPicker.SwatchTrigger, 'swatchTrigger')
export const ColorPickerTransparencyGrid = withContext(
  Ark.ColorPicker.TransparencyGrid,
  'transparencyGrid',
)
export const ColorPickerTrigger = withContext(Ark.ColorPicker.Trigger, 'trigger')

export const ColorPicker = Object.assign(ColorPickerRoot, {
  Root: ColorPickerRoot,
  Area: ColorPickerArea,
  AreaBackground: ColorPickerAreaBackground,
  AreaThumb: ColorPickerAreaThumb,
  ChannelInput: ColorPickerChannelInput,
  ChannelSlider: ColorPickerChannelSlider,
  ChannelSliderThumb: ColorPickerChannelSliderThumb,
  ChannelSliderTrack: ColorPickerChannelSliderTrack,
  Content: ColorPickerContent,
  Control: ColorPickerControl,
  EyeDropperTrigger: ColorPickerEyeDropperTrigger,
  Label: ColorPickerLabel,
  Positioner: ColorPickerPositioner,
  Swatch: ColorPickerSwatch,
  SwatchGroup: ColorPickerSwatchGroup,
  SwatchTrigger: ColorPickerSwatchTrigger,
  TransparencyGrid: ColorPickerTransparencyGrid,
  Trigger: ColorPickerTrigger,
})
