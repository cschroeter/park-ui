import { type Assign, ColorPicker } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type ColorPickerVariantProps, colorPicker } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(colorPicker)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, ColorPicker.RootProviderBaseProps>, ColorPickerVariantProps>
>(ColorPicker.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, ColorPicker.RootBaseProps>, ColorPickerVariantProps>
>(ColorPicker.Root, 'root')

export const AreaBackground = withContext<
  Assign<HTMLStyledProps<'div'>, ColorPicker.AreaBackgroundBaseProps>
>(ColorPicker.AreaBackground, 'areaBackground')

export const Area = withContext<Assign<HTMLStyledProps<'div'>, ColorPicker.AreaBaseProps>>(
  ColorPicker.Area,
  'area',
)

export const AreaThumb = withContext<
  Assign<HTMLStyledProps<'div'>, ColorPicker.AreaThumbBaseProps>
>(ColorPicker.AreaThumb, 'areaThumb')

export const ChannelInput = withContext<
  Assign<HTMLStyledProps<'input'>, ColorPicker.ChannelInputBaseProps>
>(ColorPicker.ChannelInput, 'channelInput')

export const ChannelSliderLabel = withContext<
  Assign<HTMLStyledProps<'label'>, ColorPicker.ChannelSliderLabelBaseProps>
>(ColorPicker.ChannelSliderLabel, 'channelSliderLabel')

export const ChannelSlider = withContext<
  Assign<HTMLStyledProps<'div'>, ColorPicker.ChannelSliderBaseProps>
>(ColorPicker.ChannelSlider, 'channelSlider')

export const ChannelSliderThumb = withContext<
  Assign<HTMLStyledProps<'div'>, ColorPicker.ChannelSliderThumbBaseProps>
>(ColorPicker.ChannelSliderThumb, 'channelSliderThumb')

export const ChannelSliderTrack = withContext<
  Assign<HTMLStyledProps<'div'>, ColorPicker.ChannelSliderTrackBaseProps>
>(ColorPicker.ChannelSliderTrack, 'channelSliderTrack')

export const ChannelSliderValueText = withContext<
  Assign<HTMLStyledProps<'span'>, ColorPicker.ChannelSliderValueTextBaseProps>
>(ColorPicker.ChannelSliderValueText, 'channelSliderValueText')

export const Content = withContext<Assign<HTMLStyledProps<'div'>, ColorPicker.ContentBaseProps>>(
  ColorPicker.Content,
  'content',
)

export const Control = withContext<Assign<HTMLStyledProps<'div'>, ColorPicker.ControlBaseProps>>(
  ColorPicker.Control,
  'control',
)

export const EyeDropperTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, ColorPicker.EyeDropperTriggerBaseProps>
>(ColorPicker.EyeDropperTrigger, 'eyeDropperTrigger')

export const FormatSelect = withContext<
  Assign<HTMLStyledProps<'select'>, ColorPicker.FormatSelectBaseProps>
>(ColorPicker.FormatSelect, 'formatSelect')

export const FormatTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, ColorPicker.FormatTriggerBaseProps>
>(ColorPicker.FormatTrigger, 'formatTrigger')

export const Label = withContext<Assign<HTMLStyledProps<'label'>, ColorPicker.LabelBaseProps>>(
  ColorPicker.Label,
  'label',
)

export const Positioner = withContext<
  Assign<HTMLStyledProps<'div'>, ColorPicker.PositionerBaseProps>
>(ColorPicker.Positioner, 'positioner')

export const SwatchGroup = withContext<
  Assign<HTMLStyledProps<'div'>, ColorPicker.SwatchGroupBaseProps>
>(ColorPicker.SwatchGroup, 'swatchGroup')

export const SwatchIndicator = withContext<
  Assign<HTMLStyledProps<'div'>, ColorPicker.SwatchIndicatorBaseProps>
>(ColorPicker.SwatchIndicator, 'swatchIndicator')

export const Swatch = withContext<Assign<HTMLStyledProps<'div'>, ColorPicker.SwatchBaseProps>>(
  ColorPicker.Swatch,
  'swatch',
)

export const SwatchTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, ColorPicker.SwatchTriggerBaseProps>
>(ColorPicker.SwatchTrigger, 'swatchTrigger')

export const TransparencyGrid = withContext<
  Assign<HTMLStyledProps<'div'>, ColorPicker.TransparencyGridBaseProps>
>(ColorPicker.TransparencyGrid, 'transparencyGrid')

export const Trigger = withContext<Assign<HTMLStyledProps<'button'>, ColorPicker.TriggerBaseProps>>(
  ColorPicker.Trigger,
  'trigger',
)

export const ValueSwatch = withContext<
  Assign<HTMLStyledProps<'div'>, ColorPicker.ValueSwatchBaseProps>
>(ColorPicker.ValueSwatch, 'swatch')

export const ValueText = withContext<
  Assign<HTMLStyledProps<'span'>, ColorPicker.ValueTextBaseProps>
>(ColorPicker.ValueText, 'valueText')

export const View = withContext<Assign<HTMLStyledProps<'div'>, ColorPicker.ViewBaseProps>>(
  ColorPicker.View,
  'view',
)

export {
  ColorPickerContext as Context,
  ColorPickerHiddenInput as HiddenInput,
} from '@ark-ui/solid'
