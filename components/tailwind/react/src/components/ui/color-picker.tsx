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

export const ColorPickerRoot = withProvider(ArkColorPicker.Root, 'root')
export const ColorPickerArea = withContext(ArkColorPicker.Area, 'area')
export const ColorPickerAreaBackground = withContext(
  ArkColorPicker.AreaBackground,
  'areaBackground',
)
export const ColorPickerAreaThumb = withContext(ArkColorPicker.AreaThumb, 'areaThumb')
export const ColorPickerChannelInput = withContext(ArkColorPicker.ChannelInput, 'channelInput')
export const ColorPickerChannelSlider = withContext(ArkColorPicker.ChannelSlider, 'channelSlider')
export const ColorPickerChannelSliderThumb = withContext(
  ArkColorPicker.ChannelSliderThumb,
  'channelSliderThumb',
)
export const ColorPickerChannelSliderTrack = withContext(
  ArkColorPicker.ChannelSliderTrack,
  'channelSliderTrack',
)
export const ColorPickerContent = withContext(ArkColorPicker.Content, 'content')
export const ColorPickerControl = withContext(ArkColorPicker.Control, 'control')
export const ColorPickerEyeDropperTrigger = withContext(
  ArkColorPicker.EyeDropperTrigger,
  'eyeDropperTrigger',
)
export const ColorPickerFormatSelect = withContext(ArkColorPicker.FormatSelect, 'formatSelect')
export const ColorPickerFormatTrigger = withContext(ArkColorPicker.FormatTrigger, 'formatTrigger')
export const ColorPickerLabel = withContext(ArkColorPicker.Label, 'label')
export const ColorPickerPositioner = withContext(ArkColorPicker.Positioner, 'positioner')
export const ColorPickerSwatch = withContext(ArkColorPicker.Swatch, 'swatch')
export const ColorPickerSwatchGroup = withContext(ArkColorPicker.SwatchGroup, 'swatchGroup')
export const ColorPickerSwatchIndicator = withContext(
  ArkColorPicker.SwatchIndicator,
  'swatchIndicator',
)
export const ColorPickerSwatchTrigger = withContext(ArkColorPicker.SwatchTrigger, 'swatchTrigger')
export const ColorPickerTransparencyGrid = withContext(
  ArkColorPicker.TransparencyGrid,
  'transparencyGrid',
)
export const ColorPickerTrigger = withContext(ArkColorPicker.Trigger, 'trigger')
export const ColorPickerValueText = withContext(ArkColorPicker.ValueText, 'valueText')
export const ColorPickerView = withContext(ArkColorPicker.View, 'view')

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
