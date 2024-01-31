import { ColorPicker } from '@ark-ui/react/color-picker'
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

const Root = withProvider(ColorPicker.Root, 'root')
const Area = withContext(ColorPicker.Area, 'area')
const AreaBackground = withContext(ColorPicker.AreaBackground, 'areaBackground')
const AreaThumb = withContext(ColorPicker.AreaThumb, 'areaThumb')
const ChannelInput = withContext(ColorPicker.ChannelInput, 'channelInput')
const ChannelSlider = withContext(ColorPicker.ChannelSlider, 'channelSlider')
const ChannelSliderThumb = withContext(ColorPicker.ChannelSliderThumb, 'channelSliderThumb')
const ChannelSliderTrack = withContext(ColorPicker.ChannelSliderTrack, 'channelSliderTrack')
const Content = withContext(ColorPicker.Content, 'content')
const Control = withContext(ColorPicker.Control, 'control')
const EyeDropperTrigger = withContext(ColorPicker.EyeDropperTrigger, 'eyeDropperTrigger')
const FormatSelect = withContext(ColorPicker.FormatSelect, 'formatSelect')
const FormatTrigger = withContext(ColorPicker.FormatTrigger, 'formatTrigger')
const Label = withContext(ColorPicker.Label, 'label')
const Positioner = withContext(ColorPicker.Positioner, 'positioner')
const Swatch = withContext(ColorPicker.Swatch, 'swatch')
const SwatchGroup = withContext(ColorPicker.SwatchGroup, 'swatchGroup')
const SwatchIndicator = withContext(ColorPicker.SwatchIndicator, 'swatchIndicator')
const SwatchTrigger = withContext(ColorPicker.SwatchTrigger, 'swatchTrigger')
const TransparencyGrid = withContext(ColorPicker.TransparencyGrid, 'transparencyGrid')
const Trigger = withContext(ColorPicker.Trigger, 'trigger')
const ValueText = withContext(ColorPicker.ValueText, 'valueText')
const View = withContext(ColorPicker.View, 'view')

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
