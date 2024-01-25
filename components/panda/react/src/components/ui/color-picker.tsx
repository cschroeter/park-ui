import { ColorPicker as ArkColorPicker } from '@ark-ui/react/color-picker'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { colorPicker } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(colorPicker)

const ColorPicker = withProvider(styled(ArkColorPicker.Root), 'root')
const ColorPickerArea = withContext(styled(ArkColorPicker.Area), 'area')
const ColorPickerAreaBackground = withContext(
  styled(ArkColorPicker.AreaBackground),
  'areaBackground',
)
const ColorPickerAreaThumb = withContext(styled(ArkColorPicker.AreaThumb), 'areaThumb')
const ColorPickerChannelInput = withContext(styled(ArkColorPicker.ChannelInput), 'channelInput')
const ColorPickerChannelSlider = withContext(styled(ArkColorPicker.ChannelSlider), 'channelSlider')
const ColorPickerChannelSliderThumb = withContext(
  styled(ArkColorPicker.ChannelSliderThumb),
  'channelSliderThumb',
)
const ColorPickerChannelSliderTrack = withContext(
  styled(ArkColorPicker.ChannelSliderTrack),
  'channelSliderTrack',
)
const ColorPickerContent = withContext(styled(ArkColorPicker.Content), 'content')
const ColorPickerControl = withContext(styled(ArkColorPicker.Control), 'control')
const ColorPickerEyeDropperTrigger = withContext(
  styled(ArkColorPicker.EyeDropperTrigger),
  'eyeDropperTrigger',
)
const ColorPickerFormatSelect = withContext(styled(ArkColorPicker.FormatSelect), 'formatSelect')
const ColorPickerFormatTrigger = withContext(styled(ArkColorPicker.FormatTrigger), 'formatTrigger')
const ColorPickerLabel = withContext(styled(ArkColorPicker.Label), 'label')
const ColorPickerPositioner = withContext(styled(ArkColorPicker.Positioner), 'positioner')
const ColorPickerSwatch = withContext(styled(ArkColorPicker.Swatch), 'swatch')
const ColorPickerSwatchGroup = withContext(styled(ArkColorPicker.SwatchGroup), 'swatchGroup')
const ColorPickerSwatchIndicator = withContext(
  styled(ArkColorPicker.SwatchIndicator),
  'swatchIndicator',
)
const ColorPickerSwatchTrigger = withContext(styled(ArkColorPicker.SwatchTrigger), 'swatchTrigger')
const ColorPickerTransparencyGrid = withContext(
  styled(ArkColorPicker.TransparencyGrid),
  'transparencyGrid',
)
const ColorPickerTrigger = withContext(styled(ArkColorPicker.Trigger), 'trigger')
const ColorPickerValueText = withContext(styled(ArkColorPicker.ValueText), 'valueText')
const ColorPickerView = withContext(styled(ArkColorPicker.View), 'view')

const Root = ColorPicker
const Area = ColorPickerArea
const AreaBackground = ColorPickerAreaBackground
const AreaThumb = ColorPickerAreaThumb
const ChannelInput = ColorPickerChannelInput
const ChannelSlider = ColorPickerChannelSlider
const ChannelSliderThumb = ColorPickerChannelSliderThumb
const ChannelSliderTrack = ColorPickerChannelSliderTrack
const Content = ColorPickerContent
const Control = ColorPickerControl
const EyeDropperTrigger = ColorPickerEyeDropperTrigger
const FormatSelect = ColorPickerFormatSelect
const FormatTrigger = ColorPickerFormatTrigger
const Label = ColorPickerLabel
const Positioner = ColorPickerPositioner
const Swatch = ColorPickerSwatch
const SwatchGroup = ColorPickerSwatchGroup
const SwatchIndicator = ColorPickerSwatchIndicator
const SwatchTrigger = ColorPickerSwatchTrigger
const TransparencyGrid = ColorPickerTransparencyGrid
const Trigger = ColorPickerTrigger
const ValueText = ColorPickerValueText
const View = ColorPickerView

export {
  Area,
  AreaBackground,
  AreaThumb,
  ChannelInput,
  ChannelSlider,
  ChannelSliderThumb,
  ChannelSliderTrack,
  ColorPicker,
  ColorPickerArea,
  ColorPickerAreaBackground,
  ColorPickerAreaThumb,
  ColorPickerChannelInput,
  ColorPickerChannelSlider,
  ColorPickerChannelSliderThumb,
  ColorPickerChannelSliderTrack,
  ColorPickerContent,
  ColorPickerControl,
  ColorPickerEyeDropperTrigger,
  ColorPickerFormatSelect,
  ColorPickerFormatTrigger,
  ColorPickerLabel,
  ColorPickerPositioner,
  ColorPickerSwatch,
  ColorPickerSwatchGroup,
  ColorPickerSwatchIndicator,
  ColorPickerSwatchTrigger,
  ColorPickerTransparencyGrid,
  ColorPickerTrigger,
  ColorPickerValueText,
  ColorPickerView,
  Content,
  Control,
  EyeDropperTrigger,
  FormatSelect,
  FormatTrigger,
  Label,
  Positioner,
  Root,
  Swatch,
  SwatchGroup,
  SwatchIndicator,
  SwatchTrigger,
  TransparencyGrid,
  Trigger,
  ValueText,
  View,
}

export interface ColorPickerProps extends ComponentProps<typeof ColorPicker> {}
export interface ColorPickerAreaProps extends ComponentProps<typeof ColorPickerArea> {}
export interface ColorPickerAreaBackgroundProps
  extends ComponentProps<typeof ColorPickerAreaBackground> {}
export interface ColorPickerAreaThumbProps extends ComponentProps<typeof ColorPickerAreaThumb> {}
export interface ColorPickerChannelInputProps
  extends ComponentProps<typeof ColorPickerChannelInput> {}
export interface ColorPickerChannelSliderProps
  extends ComponentProps<typeof ColorPickerChannelSlider> {}
export interface ColorPickerChannelSliderThumbProps
  extends ComponentProps<typeof ColorPickerChannelSliderThumb> {}
export interface ColorPickerChannelSliderTrackProps
  extends ComponentProps<typeof ColorPickerChannelSliderTrack> {}
export interface ColorPickerContentProps extends ComponentProps<typeof ColorPickerContent> {}
export interface ColorPickerControlProps extends ComponentProps<typeof ColorPickerControl> {}
export interface ColorPickerEyeDropperTriggerProps
  extends ComponentProps<typeof ColorPickerEyeDropperTrigger> {}
export interface ColorPickerFormatSelectProps
  extends ComponentProps<typeof ColorPickerFormatSelect> {}
export interface ColorPickerFormatTriggerProps
  extends ComponentProps<typeof ColorPickerFormatTrigger> {}
export interface ColorPickerLabelProps extends ComponentProps<typeof ColorPickerLabel> {}
export interface ColorPickerPositionerProps extends ComponentProps<typeof ColorPickerPositioner> {}
export interface ColorPickerSwatchProps extends ComponentProps<typeof ColorPickerSwatch> {}
export interface ColorPickerSwatchGroupProps
  extends ComponentProps<typeof ColorPickerSwatchGroup> {}
export interface ColorPickerSwatchIndicatorProps
  extends ComponentProps<typeof ColorPickerSwatchIndicator> {}
export interface ColorPickerSwatchTriggerProps
  extends ComponentProps<typeof ColorPickerSwatchTrigger> {}
export interface ColorPickerTransparencyGridProps
  extends ComponentProps<typeof ColorPickerTransparencyGrid> {}
export interface ColorPickerTriggerProps extends ComponentProps<typeof ColorPickerTrigger> {}
export interface ColorPickerValueTextProps extends ComponentProps<typeof ColorPickerValueText> {}
export interface ColorPickerViewProps extends ComponentProps<typeof ColorPickerView> {}
