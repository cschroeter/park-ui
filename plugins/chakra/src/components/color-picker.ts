import { ColorPicker as ArkColorPicker } from '@ark-ui/react/color-picker'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from './create-style-context'

const { withProvider, withContext } = createStyleContext('ColorPicker')

const ColorPicker = withProvider(chakra(ArkColorPicker.Root), 'root')
const ColorPickerArea = withContext(chakra(ArkColorPicker.Area), 'area')
const ColorPickerAreaBackground = withContext(
  chakra(ArkColorPicker.AreaBackground),
  'areaBackground',
)
const ColorPickerAreaThumb = withContext(chakra(ArkColorPicker.AreaThumb), 'areaThumb')
const ColorPickerChannelInput = withContext(chakra(ArkColorPicker.ChannelInput), 'channelInput')
const ColorPickerChannelSlider = withContext(chakra(ArkColorPicker.ChannelSlider), 'channelSlider')
const ColorPickerChannelSliderThumb = withContext(
  chakra(ArkColorPicker.ChannelSliderThumb),
  'channelSliderThumb',
)
const ColorPickerChannelSliderTrack = withContext(
  chakra(ArkColorPicker.ChannelSliderTrack),
  'channelSliderTrack',
)
const ColorPickerContent = withContext(chakra(ArkColorPicker.Content), 'content')
const ColorPickerControl = withContext(chakra(ArkColorPicker.Control), 'control')
const ColorPickerEyeDropperTrigger = withContext(
  chakra(ArkColorPicker.EyeDropperTrigger),
  'eyeDropperTrigger',
)
const ColorPickerFormatSelect = withContext(chakra(ArkColorPicker.FormatSelect), 'formatSelect')
const ColorPickerFormatTrigger = withContext(chakra(ArkColorPicker.FormatTrigger), 'formatTrigger')
const ColorPickerLabel = withContext(chakra(ArkColorPicker.Label), 'label')
const ColorPickerPositioner = withContext(chakra(ArkColorPicker.Positioner), 'positioner')
const ColorPickerSwatch = withContext(chakra(ArkColorPicker.Swatch), 'swatch')
const ColorPickerSwatchGroup = withContext(chakra(ArkColorPicker.SwatchGroup), 'swatchGroup')
const ColorPickerSwatchIndicator = withContext(
  chakra(ArkColorPicker.SwatchIndicator),
  'swatchIndicator',
)
const ColorPickerSwatchTrigger = withContext(chakra(ArkColorPicker.SwatchTrigger), 'swatchTrigger')
const ColorPickerTransparencyGrid = withContext(
  chakra(ArkColorPicker.TransparencyGrid),
  'transparencyGrid',
)
const ColorPickerTrigger = withContext(chakra(ArkColorPicker.Trigger), 'trigger')
const ColorPickerValueText = withContext(chakra(ArkColorPicker.ValueText), 'valueText')
const ColorPickerView = withContext(chakra(ArkColorPicker.View), 'view')

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

export interface ColorPickerProps extends HTMLChakraProps<typeof ColorPicker> {}
export interface ColorPickerAreaProps extends HTMLChakraProps<typeof ColorPickerArea> {}
export interface ColorPickerAreaBackgroundProps
  extends HTMLChakraProps<typeof ColorPickerAreaBackground> {}
export interface ColorPickerAreaThumbProps extends HTMLChakraProps<typeof ColorPickerAreaThumb> {}
export interface ColorPickerChannelInputProps
  extends HTMLChakraProps<typeof ColorPickerChannelInput> {}
export interface ColorPickerChannelSliderProps
  extends HTMLChakraProps<typeof ColorPickerChannelSlider> {}
export interface ColorPickerChannelSliderThumbProps
  extends HTMLChakraProps<typeof ColorPickerChannelSliderThumb> {}
export interface ColorPickerChannelSliderTrackProps
  extends HTMLChakraProps<typeof ColorPickerChannelSliderTrack> {}
export interface ColorPickerContentProps extends HTMLChakraProps<typeof ColorPickerContent> {}
export interface ColorPickerControlProps extends HTMLChakraProps<typeof ColorPickerControl> {}
export interface ColorPickerEyeDropperTriggerProps
  extends HTMLChakraProps<typeof ColorPickerEyeDropperTrigger> {}
export interface ColorPickerFormatSelectProps
  extends HTMLChakraProps<typeof ColorPickerFormatSelect> {}
export interface ColorPickerFormatTriggerProps
  extends HTMLChakraProps<typeof ColorPickerFormatTrigger> {}
export interface ColorPickerLabelProps extends HTMLChakraProps<typeof ColorPickerLabel> {}
export interface ColorPickerPositionerProps extends HTMLChakraProps<typeof ColorPickerPositioner> {}
export interface ColorPickerSwatchProps extends HTMLChakraProps<typeof ColorPickerSwatch> {}
export interface ColorPickerSwatchGroupProps
  extends HTMLChakraProps<typeof ColorPickerSwatchGroup> {}
export interface ColorPickerSwatchIndicatorProps
  extends HTMLChakraProps<typeof ColorPickerSwatchIndicator> {}
export interface ColorPickerSwatchTriggerProps
  extends HTMLChakraProps<typeof ColorPickerSwatchTrigger> {}
export interface ColorPickerTransparencyGridProps
  extends HTMLChakraProps<typeof ColorPickerTransparencyGrid> {}
export interface ColorPickerTriggerProps extends HTMLChakraProps<typeof ColorPickerTrigger> {}
export interface ColorPickerValueTextProps extends HTMLChakraProps<typeof ColorPickerValueText> {}
export interface ColorPickerViewProps extends HTMLChakraProps<typeof ColorPickerView> {}
