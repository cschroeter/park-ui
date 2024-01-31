import { ColorPicker as ArkColorPicker } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { colorPicker } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(colorPicker)

const Root = withProvider(styled(ArkColorPicker.Root), 'root')
const Area = withContext(styled(ArkColorPicker.Area), 'area')
const AreaBackground = withContext(styled(ArkColorPicker.AreaBackground), 'areaBackground')
const AreaThumb = withContext(styled(ArkColorPicker.AreaThumb), 'areaThumb')
const ChannelInput = withContext(styled(ArkColorPicker.ChannelInput), 'channelInput')
const ChannelSlider = withContext(styled(ArkColorPicker.ChannelSlider), 'channelSlider')
const ChannelSliderThumb = withContext(
  styled(ArkColorPicker.ChannelSliderThumb),
  'channelSliderThumb',
)
const ChannelSliderTrack = withContext(
  styled(ArkColorPicker.ChannelSliderTrack),
  'channelSliderTrack',
)
const Content = withContext(styled(ArkColorPicker.Content), 'content')
const Control = withContext(styled(ArkColorPicker.Control), 'control')
const EyeDropperTrigger = withContext(styled(ArkColorPicker.EyeDropperTrigger), 'eyeDropperTrigger')
const FormatSelect = withContext(styled(ArkColorPicker.FormatSelect), 'formatSelect')
const FormatTrigger = withContext(styled(ArkColorPicker.FormatTrigger), 'formatTrigger')
const Label = withContext(styled(ArkColorPicker.Label), 'label')
const Positioner = withContext(styled(ArkColorPicker.Positioner), 'positioner')
const Swatch = withContext(styled(ArkColorPicker.Swatch), 'swatch')
const SwatchGroup = withContext(styled(ArkColorPicker.SwatchGroup), 'swatchGroup')
const SwatchIndicator = withContext(styled(ArkColorPicker.SwatchIndicator), 'swatchIndicator')
const SwatchTrigger = withContext(styled(ArkColorPicker.SwatchTrigger), 'swatchTrigger')
const TransparencyGrid = withContext(styled(ArkColorPicker.TransparencyGrid), 'transparencyGrid')
const Trigger = withContext(styled(ArkColorPicker.Trigger), 'trigger')
const ValueText = withContext(styled(ArkColorPicker.ValueText), 'valueText')
const View = withContext(styled(ArkColorPicker.View), 'view')

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
