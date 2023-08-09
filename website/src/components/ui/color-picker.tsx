import * as Ark from '@ark-ui/react/color-picker'
import { styled } from 'styled-system/jsx'
import { colorPicker, type ColorPickerVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

export * from '@ark-ui/react/color-picker'

const { withProvider, withContext } = createStyleContext(colorPicker)

export type ColorPickerProps = Ark.ColorPickerProps & ColorPickerVariantProps

const ColorPickerRoot = withProvider(styled(Ark.ColorPicker.Root), 'root')
const ColorPickerArea = withContext(styled(Ark.ColorPicker.Area), 'area')
const ColorPickerAreaGradient = withContext(styled(Ark.ColorPicker.AreaGradient), 'areaGradient')
const ColorPickerAreaThumb = withContext(styled(Ark.ColorPicker.AreaThumb), 'areaThumb')
const ColorPickerChannelInput = withContext(styled(Ark.ColorPicker.ChannelInput), 'channelInput')
const ColorPickerChannelSliderBackground = withContext(
  styled(Ark.ColorPicker.ChannelSliderBackground),
  'channelSliderBackground',
)
const ColorPickerChannelSliderThumb = withContext(
  styled(Ark.ColorPicker.ChannelSliderThumb),
  'channelSliderThumb',
)
const ColorPickerChannelSliderTrack = withContext(
  styled(Ark.ColorPicker.ChannelSliderTrack),
  'channelSliderTrack',
)
const ColorPickerContent = withContext(styled(Ark.ColorPicker.Content), 'content')
const ColorPickerEyeDropperTrigger = withContext(
  styled(Ark.ColorPicker.EyeDropperTrigger),
  'eyeDropperTrigger',
)
const ColorPickerSwatch = withContext(styled(Ark.ColorPicker.Swatch), 'swatch')
const ColorPickerSwatchBackground = withContext(
  styled(Ark.ColorPicker.SwatchBackground),
  'swatchBackground',
)
const ColorPickerSwatchGroup = withContext(styled(Ark.ColorPicker.SwatchGroup), 'swatchGroup')

const ColorPicker = Object.assign(ColorPickerRoot, {
  Root: ColorPickerRoot,
  Area: ColorPickerArea,
  AreaGradient: ColorPickerAreaGradient,
  AreaThumb: ColorPickerAreaThumb,
  ChannelInput: ColorPickerChannelInput,
  ChannelSliderBackground: ColorPickerChannelSliderBackground,
  ChannelSliderThumb: ColorPickerChannelSliderThumb,
  ChannelSliderTrack: ColorPickerChannelSliderTrack,
  Content: ColorPickerContent,
  EyeDropperTrigger: ColorPickerEyeDropperTrigger,
  Swatch: ColorPickerSwatch,
  SwatchBackground: ColorPickerSwatchBackground,
  SwatchGroup: ColorPickerSwatchGroup,
})

export {
  ColorPicker,
  ColorPickerArea,
  ColorPickerAreaGradient,
  ColorPickerAreaThumb,
  ColorPickerChannelInput,
  ColorPickerChannelSliderBackground,
  ColorPickerChannelSliderThumb,
  ColorPickerChannelSliderTrack,
  ColorPickerContent,
  ColorPickerEyeDropperTrigger,
  ColorPickerSwatch,
  ColorPickerSwatchBackground,
  ColorPickerSwatchGroup,
}
