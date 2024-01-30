import { ColorPicker as ArkColorPicker } from '@ark-ui/react/color-picker'
import type { ComponentProps } from 'react'
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

export const ColorPicker = {
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
}

export interface ColorPickerRootProps extends ComponentProps<typeof ColorPickerRoot> {}
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
