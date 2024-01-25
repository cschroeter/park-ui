import { ColorPicker as ArkColorPicker } from '@ark-ui/react/color-picker'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'colorPicker',
  slots: {
    root: 'colorPicker__root',
    label: 'colorPicker__label',
    control: 'colorPicker__control',
    trigger: 'colorPicker__trigger',
    positioner: 'colorPicker__positioner',
    content: 'colorPicker__content',
    area: 'colorPicker__area',
    areaThumb: 'colorPicker__areaThumb',
    areaBackground: 'colorPicker__areaBackground',
    channelSlider: 'colorPicker__channelSlider',
    channelSliderTrack: 'colorPicker__channelSliderTrack',
    channelSliderThumb: 'colorPicker__channelSliderThumb',
    channelInput: 'colorPicker__channelInput',
    transparencyGrid: 'colorPicker__transparencyGrid',
    swatchGroup: 'colorPicker__swatchGroup',
    swatchTrigger: 'colorPicker__swatchTrigger',
    swatchIndicator: 'colorPicker__swatchIndicator',
    swatch: 'colorPicker__swatch',
    eyeDropperTrigger: 'colorPicker__eyeDropperTrigger',
    formatTrigger: 'colorPicker__formatTrigger',
    formatSelect: 'colorPicker__formatSelect',
    valueText: 'colorPicker__valueText',
    view: 'colorPicker__view',
  },
  variants: {},
})
const { withProvider, withContext } = createStyleContext(styles)

const ColorPicker = withProvider(ArkColorPicker.Root, 'root')
const ColorPickerArea = withContext(ArkColorPicker.Area, 'area')
const ColorPickerAreaBackground = withContext(ArkColorPicker.AreaBackground, 'areaBackground')
const ColorPickerAreaThumb = withContext(ArkColorPicker.AreaThumb, 'areaThumb')
const ColorPickerChannelInput = withContext(ArkColorPicker.ChannelInput, 'channelInput')
const ColorPickerChannelSlider = withContext(ArkColorPicker.ChannelSlider, 'channelSlider')
const ColorPickerChannelSliderThumb = withContext(
  ArkColorPicker.ChannelSliderThumb,
  'channelSliderThumb',
)
const ColorPickerChannelSliderTrack = withContext(
  ArkColorPicker.ChannelSliderTrack,
  'channelSliderTrack',
)
const ColorPickerContent = withContext(ArkColorPicker.Content, 'content')
const ColorPickerControl = withContext(ArkColorPicker.Control, 'control')
const ColorPickerEyeDropperTrigger = withContext(
  ArkColorPicker.EyeDropperTrigger,
  'eyeDropperTrigger',
)
const ColorPickerFormatSelect = withContext(ArkColorPicker.FormatSelect, 'formatSelect')
const ColorPickerFormatTrigger = withContext(ArkColorPicker.FormatTrigger, 'formatTrigger')
const ColorPickerLabel = withContext(ArkColorPicker.Label, 'label')
const ColorPickerPositioner = withContext(ArkColorPicker.Positioner, 'positioner')
const ColorPickerSwatch = withContext(ArkColorPicker.Swatch, 'swatch')
const ColorPickerSwatchGroup = withContext(ArkColorPicker.SwatchGroup, 'swatchGroup')
const ColorPickerSwatchIndicator = withContext(ArkColorPicker.SwatchIndicator, 'swatchIndicator')
const ColorPickerSwatchTrigger = withContext(ArkColorPicker.SwatchTrigger, 'swatchTrigger')
const ColorPickerTransparencyGrid = withContext(ArkColorPicker.TransparencyGrid, 'transparencyGrid')
const ColorPickerTrigger = withContext(ArkColorPicker.Trigger, 'trigger')
const ColorPickerValueText = withContext(ArkColorPicker.ValueText, 'valueText')
const ColorPickerView = withContext(ArkColorPicker.View, 'view')

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
