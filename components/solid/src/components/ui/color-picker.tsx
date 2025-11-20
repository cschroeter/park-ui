import { ColorPicker } from '@ark-ui/solid/color-picker'
import type { ComponentProps } from 'solid-js'
import { createStyleContext } from 'styled-system/jsx'
import { colorPicker } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(colorPicker)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(ColorPicker.Root, 'root')
export const RootProvider = withProvider(ColorPicker.RootProvider, 'root')
export const Area = withContext(ColorPicker.Area, 'area')
export const AreaBackground = withContext(ColorPicker.AreaBackground, 'areaBackground')
export const AreaThumb = withContext(ColorPicker.AreaThumb, 'areaThumb')
export const ChannelInput = withContext(ColorPicker.ChannelInput, 'channelInput')
export const ChannelSlider = withContext(ColorPicker.ChannelSlider, 'channelSlider')
export const ChannelSliderLabel = withContext(ColorPicker.ChannelSliderLabel, 'channelSliderLabel')
export const ChannelSliderThumb = withContext(ColorPicker.ChannelSliderThumb, 'channelSliderThumb')
export const ChannelSliderTrack = withContext(ColorPicker.ChannelSliderTrack, 'channelSliderTrack')
export const ChannelSliderValueText = withContext(
  ColorPicker.ChannelSliderValueText,
  'channelSliderValueText',
)
export const Content = withContext(ColorPicker.Content, 'content')
export const Control = withContext(ColorPicker.Control, 'control')
export const EyeDropperTrigger = withContext(ColorPicker.EyeDropperTrigger, 'eyeDropperTrigger')
export const FormatSelect = withContext(ColorPicker.FormatSelect, 'formatSelect')
export const FormatTrigger = withContext(ColorPicker.FormatTrigger, 'formatTrigger')
export const HiddenInput = ColorPicker.HiddenInput
export const Label = withContext(ColorPicker.Label, 'label')
export const Positioner = withContext(ColorPicker.Positioner, 'positioner')
export const Swatch = withContext(ColorPicker.Swatch, 'swatch')
export const SwatchGroup = withContext(ColorPicker.SwatchGroup, 'swatchGroup')
export const SwatchIndicator = withContext(ColorPicker.SwatchIndicator, 'swatchIndicator')
export const SwatchTrigger = withContext(ColorPicker.SwatchTrigger, 'swatchTrigger')
export const TransparencyGrid = withContext(ColorPicker.TransparencyGrid, 'transparencyGrid')
export const Trigger = withContext(ColorPicker.Trigger, 'trigger')
export const ValueSwatch = ColorPicker.ValueSwatch
export const ValueText = withContext(ColorPicker.ValueText, 'valueText')
export const View = withContext(ColorPicker.View, 'view')

export { ColorPickerContext as Context } from '@ark-ui/solid/color-picker'
