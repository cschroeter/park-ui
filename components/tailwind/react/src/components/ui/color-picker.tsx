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

const Root = withProvider(ArkColorPicker.Root, 'root')
const Area = withContext(ArkColorPicker.Area, 'area')
const AreaBackground = withContext(ArkColorPicker.AreaBackground, 'areaBackground')
const AreaThumb = withContext(ArkColorPicker.AreaThumb, 'areaThumb')
const ChannelInput = withContext(ArkColorPicker.ChannelInput, 'channelInput')
const ChannelSlider = withContext(ArkColorPicker.ChannelSlider, 'channelSlider')
const ChannelSliderThumb = withContext(ArkColorPicker.ChannelSliderThumb, 'channelSliderThumb')
const ChannelSliderTrack = withContext(ArkColorPicker.ChannelSliderTrack, 'channelSliderTrack')
const Content = withContext(ArkColorPicker.Content, 'content')
const Control = withContext(ArkColorPicker.Control, 'control')
const EyeDropperTrigger = withContext(ArkColorPicker.EyeDropperTrigger, 'eyeDropperTrigger')
const FormatSelect = withContext(ArkColorPicker.FormatSelect, 'formatSelect')
const FormatTrigger = withContext(ArkColorPicker.FormatTrigger, 'formatTrigger')
const Label = withContext(ArkColorPicker.Label, 'label')
const Positioner = withContext(ArkColorPicker.Positioner, 'positioner')
const Swatch = withContext(ArkColorPicker.Swatch, 'swatch')
const SwatchGroup = withContext(ArkColorPicker.SwatchGroup, 'swatchGroup')
const SwatchIndicator = withContext(ArkColorPicker.SwatchIndicator, 'swatchIndicator')
const SwatchTrigger = withContext(ArkColorPicker.SwatchTrigger, 'swatchTrigger')
const TransparencyGrid = withContext(ArkColorPicker.TransparencyGrid, 'transparencyGrid')
const Trigger = withContext(ArkColorPicker.Trigger, 'trigger')
const ValueText = withContext(ArkColorPicker.ValueText, 'valueText')
const View = withContext(ArkColorPicker.View, 'view')

export {
  Area,
  AreaBackground,
  AreaThumb,
  ChannelInput,
  ChannelSlider,
  ChannelSliderThumb,
  ChannelSliderTrack,
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
