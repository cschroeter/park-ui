import * as Ark from '@ark-ui/solid/color-picker'
import { styled } from 'styled-system/jsx'
import { colorPicker, type ColorPickerVariantProps } from 'styled-system/recipes'

import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(colorPicker)

export * from '@ark-ui/solid/color-picker'
export type ColorPickerProps = Ark.ColorPickerProps & ColorPickerVariantProps

const ColorPickerRoot = withProvider(styled(Ark.ColorPicker), 'root')
export const ColorPickerArea = withContext(styled(Ark.ColorPickerArea), 'area')
export const ColorPickerAreaGradient = withContext(
  styled(Ark.ColorPickerAreaGradient),
  'areaGradient',
)
export const ColorPickerAreaThumb = withContext(styled(Ark.ColorPickerAreaThumb), 'areaThumb')
export const ColorPickerChannelInput = withContext(
  styled(Ark.ColorPickerChannelInput),
  'channelInput',
)
export const ColorPickerChannelSliderBackground = withContext(
  styled(Ark.ColorPickerChannelSliderBackground),
  'channelSliderBackground',
)
export const ColorPickerChannelSliderThumb = withContext(
  styled(Ark.ColorPickerChannelSliderThumb),
  'channelSliderThumb',
)
export const ColorPickerChannelSliderTrack = withContext(
  styled(Ark.ColorPickerChannelSliderTrack),
  'channelSliderTrack',
)
export const ColorPickerContent = withContext(styled(Ark.ColorPickerContent), 'content')
export const ColorPickerEyeDropperTrigger = withContext(
  styled(Ark.ColorPickerEyeDropperTrigger),
  'eyeDropperTrigger',
)
export const ColorPickerSwatch = withContext(styled(Ark.ColorPickerSwatch), 'swatch')
export const ColorPickerSwatchBackground = withContext(
  styled(Ark.ColorPickerSwatchBackground),
  'swatchBackground',
)
export const ColorPickerSwatchGroup = withContext(styled(Ark.ColorPickerSwatchGroup), 'swatchGroup')

export const ColorPicker = Object.assign(ColorPickerRoot, {
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
