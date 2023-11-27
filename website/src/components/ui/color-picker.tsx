import { ColorPicker as ArkColorPicker } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'
import { colorPicker } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(colorPicker)

export const ColorPickerRoot = withProvider(styled(ArkColorPicker.Root), 'root')
export const ColorPickerArea = withContext(styled(ArkColorPicker.Area), 'area')
export const ColorPickerAreaBackground = withContext(
  styled(ArkColorPicker.AreaBackground),
  'areaBackground',
)
export const ColorPickerAreaThumb = withContext(styled(ArkColorPicker.AreaThumb), 'areaThumb')
export const ColorPickerChannelInput = withContext(
  styled(ArkColorPicker.ChannelInput),
  'channelInput',
)
export const ColorPickerChannelSlider = withContext(
  styled(ArkColorPicker.ChannelSlider),
  'channelSlider',
)
export const ColorPickerChannelSliderThumb = withContext(
  styled(ArkColorPicker.ChannelSliderThumb),
  'channelSliderThumb',
)
export const ColorPickerChannelSliderTrack = withContext(
  styled(ArkColorPicker.ChannelSliderTrack),
  'channelSliderTrack',
)
export const ColorPickerContent = withContext(styled(ArkColorPicker.Content), 'content')
export const ColorPickerControl = withContext(styled(ArkColorPicker.Control), 'control')
export const ColorPickerEyeDropperTrigger = withContext(
  styled(ArkColorPicker.EyeDropperTrigger),
  'eyeDropperTrigger',
)
export const ColorPickerFormatSelect = withContext(
  styled(ArkColorPicker.FormatSelect),
  'formatSelect',
)
export const ColorPickerFormatTrigger = withContext(
  styled(ArkColorPicker.FormatTrigger),
  'formatTrigger',
)
export const ColorPickerLabel = withContext(styled(ArkColorPicker.Label), 'label')
export const ColorPickerPositioner = withContext(styled(ArkColorPicker.Positioner), 'positioner')
export const ColorPickerSwatch = withContext(styled(ArkColorPicker.Swatch), 'swatch')
export const ColorPickerSwatchGroup = withContext(styled(ArkColorPicker.SwatchGroup), 'swatchGroup')
export const ColorPickerSwatchIndicator = withContext(
  styled(ArkColorPicker.SwatchIndicator),
  'swatchIndicator',
)
export const ColorPickerSwatchTrigger = withContext(
  styled(ArkColorPicker.SwatchTrigger),
  'swatchTrigger',
)
export const ColorPickerTransparencyGrid = withContext(
  styled(ArkColorPicker.TransparencyGrid),
  'transparencyGrid',
)
export const ColorPickerTrigger = withContext(styled(ArkColorPicker.Trigger), 'trigger')
export const ColorPickerValueText = withContext(styled(ArkColorPicker.ValueText), 'valueText')
export const ColorPickerView = withContext(styled(ArkColorPicker.View), 'view')

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
  FormatSelect: ColorPickerFormatSelect,
  FormatTrigger: ColorPickerFormatTrigger,
  Label: ColorPickerLabel,
  Positioner: ColorPickerPositioner,
  Swatch: ColorPickerSwatch,
  SwatchGroup: ColorPickerSwatchGroup,
  SwatchIndicator: ColorPickerSwatchIndicator,
  SwatchTrigger: ColorPickerSwatchTrigger,
  TransparencyGrid: ColorPickerTransparencyGrid,
  Trigger: ColorPickerTrigger,
  ValueText: ColorPickerValueText,
  View: ColorPickerView,
})

export type ColorPickerProps = typeof ColorPickerRoot
export type ColorPickerAreaProps = typeof ColorPickerArea
export type ColorPickerAreaBackgroundProps = typeof ColorPickerAreaBackground
export type ColorPickerAreaThumbProps = typeof ColorPickerAreaThumb
export type ColorPickerChannelInputProps = typeof ColorPickerChannelInput
export type ColorPickerChannelSliderProps = typeof ColorPickerChannelSlider
export type ColorPickerChannelSliderThumbProps = typeof ColorPickerChannelSliderThumb
export type ColorPickerChannelSliderTrackProps = typeof ColorPickerChannelSliderTrack
export type ColorPickerContentProps = typeof ColorPickerContent
export type ColorPickerControlProps = typeof ColorPickerControl
export type ColorPickerEyeDropperTriggerProps = typeof ColorPickerEyeDropperTrigger
export type ColorPickerFormatSelectProps = typeof ColorPickerFormatSelect
export type ColorPickerFormatTriggerProps = typeof ColorPickerFormatTrigger
export type ColorPickerLabelProps = typeof ColorPickerLabel
export type ColorPickerPositionerProps = typeof ColorPickerPositioner
export type ColorPickerSwatchProps = typeof ColorPickerSwatch
export type ColorPickerSwatchGroupProps = typeof ColorPickerSwatchGroup
export type ColorPickerSwatchIndicatorProps = typeof ColorPickerSwatchIndicator
export type ColorPickerSwatchTriggerProps = typeof ColorPickerSwatchTrigger
export type ColorPickerTransparencyGridProps = typeof ColorPickerTransparencyGrid
export type ColorPickerTriggerProps = typeof ColorPickerTrigger
export type ColorPickerValueTextProps = typeof ColorPickerValueText
export type ColorPickerViewProps = typeof ColorPickerView
