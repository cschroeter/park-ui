import { ColorPicker } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { colorPicker } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(colorPicker)

const Root = withProvider(styled(ColorPicker.Root), 'root')
const Area = withContext(styled(ColorPicker.Area), 'area')
const AreaBackground = withContext(styled(ColorPicker.AreaBackground), 'areaBackground')
const AreaThumb = withContext(styled(ColorPicker.AreaThumb), 'areaThumb')
const ChannelInput = withContext(styled(ColorPicker.ChannelInput), 'channelInput')
const ChannelSlider = withContext(styled(ColorPicker.ChannelSlider), 'channelSlider')
const ChannelSliderThumb = withContext(styled(ColorPicker.ChannelSliderThumb), 'channelSliderThumb')
const ChannelSliderTrack = withContext(styled(ColorPicker.ChannelSliderTrack), 'channelSliderTrack')
const Content = withContext(styled(ColorPicker.Content), 'content')
const Control = withContext(styled(ColorPicker.Control), 'control')
const EyeDropperTrigger = withContext(styled(ColorPicker.EyeDropperTrigger), 'eyeDropperTrigger')
const FormatSelect = withContext(styled(ColorPicker.FormatSelect), 'formatSelect')
const FormatTrigger = withContext(styled(ColorPicker.FormatTrigger), 'formatTrigger')
const Label = withContext(styled(ColorPicker.Label), 'label')
const Positioner = withContext(styled(ColorPicker.Positioner), 'positioner')
const Swatch = withContext(styled(ColorPicker.Swatch), 'swatch')
const SwatchGroup = withContext(styled(ColorPicker.SwatchGroup), 'swatchGroup')
const SwatchIndicator = withContext(styled(ColorPicker.SwatchIndicator), 'swatchIndicator')
const SwatchTrigger = withContext(styled(ColorPicker.SwatchTrigger), 'swatchTrigger')
const TransparencyGrid = withContext(styled(ColorPicker.TransparencyGrid), 'transparencyGrid')
const Trigger = withContext(styled(ColorPicker.Trigger), 'trigger')
const ValueText = withContext(styled(ColorPicker.ValueText), 'valueText')
const View = withContext(styled(ColorPicker.View), 'view')

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
