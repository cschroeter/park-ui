import { ColorPicker } from '@ark-ui/react/color-picker'
import { colorPicker } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(colorPicker)

export const Root = withProvider(ColorPicker.Root, 'root')
export const Area = withContext(ColorPicker.Area, 'area')
export const AreaBackground = withContext(ColorPicker.AreaBackground, 'areaBackground')
export const AreaThumb = withContext(ColorPicker.AreaThumb, 'areaThumb')
export const ChannelInput = withContext(ColorPicker.ChannelInput, 'channelInput')
export const ChannelSlider = withContext(ColorPicker.ChannelSlider, 'channelSlider')
export const ChannelSliderThumb = withContext(ColorPicker.ChannelSliderThumb, 'channelSliderThumb')
export const ChannelSliderTrack = withContext(ColorPicker.ChannelSliderTrack, 'channelSliderTrack')
export const Content = withContext(ColorPicker.Content, 'content')
export const Control = withContext(ColorPicker.Control, 'control')
export const EyeDropperTrigger = withContext(ColorPicker.EyeDropperTrigger, 'eyeDropperTrigger')
export const FormatSelect = withContext(ColorPicker.FormatSelect, 'formatSelect')
export const FormatTrigger = withContext(ColorPicker.FormatTrigger, 'formatTrigger')
export const Label = withContext(ColorPicker.Label, 'label')
export const Positioner = withContext(ColorPicker.Positioner, 'positioner')
export const Swatch = withContext(ColorPicker.Swatch, 'swatch')
export const SwatchGroup = withContext(ColorPicker.SwatchGroup, 'swatchGroup')
export const SwatchIndicator = withContext(ColorPicker.SwatchIndicator, 'swatchIndicator')
export const SwatchTrigger = withContext(ColorPicker.SwatchTrigger, 'swatchTrigger')
export const TransparencyGrid = withContext(ColorPicker.TransparencyGrid, 'transparencyGrid')
export const Trigger = withContext(ColorPicker.Trigger, 'trigger')
export const ValueText = withContext(ColorPicker.ValueText, 'valueText')
export const View = withContext(ColorPicker.View, 'view')
