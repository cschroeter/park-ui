import { type Assign, ColorPicker } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type ColorPickerVariantProps, colorPicker } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(colorPicker)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, ColorPicker.RootProviderProps>, ColorPickerVariantProps>
>(ColorPicker.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, ColorPicker.RootProps>, ColorPickerVariantProps>
>(ColorPicker.Root, 'root')

export const AreaBackground = withContext<
  Assign<HTMLStyledProps<'div'>, ColorPicker.AreaBackgroundProps>
>(ColorPicker.AreaBackground, 'areaBackground')

export const Area = withContext<Assign<HTMLStyledProps<'div'>, ColorPicker.AreaProps>>(
  ColorPicker.Area,
  'area',
)

export const AreaThumb = withContext<Assign<HTMLStyledProps<'div'>, ColorPicker.AreaThumbProps>>(
  ColorPicker.AreaThumb,
  'areaThumb',
)

export const ChannelInput = withContext<
  Assign<HTMLStyledProps<'input'>, ColorPicker.ChannelInputProps>
>(ColorPicker.ChannelInput, 'channelInput')

export const ChannelSliderLabel = withContext<
  Assign<HTMLStyledProps<'label'>, ColorPicker.ChannelSliderLabelProps>
>(ColorPicker.ChannelSliderLabel, 'channelSliderLabel')

export const ChannelSlider = withContext<
  Assign<HTMLStyledProps<'div'>, ColorPicker.ChannelSliderProps>
>(ColorPicker.ChannelSlider, 'channelSlider')

export const ChannelSliderThumb = withContext<
  Assign<HTMLStyledProps<'div'>, ColorPicker.ChannelSliderThumbProps>
>(ColorPicker.ChannelSliderThumb, 'channelSliderThumb')

export const ChannelSliderTrack = withContext<
  Assign<HTMLStyledProps<'div'>, ColorPicker.ChannelSliderTrackProps>
>(ColorPicker.ChannelSliderTrack, 'channelSliderTrack')

export const ChannelSliderValueText = withContext<
  Assign<HTMLStyledProps<'span'>, ColorPicker.ChannelSliderValueTextProps>
>(ColorPicker.ChannelSliderValueText, 'channelSliderValueText')

export const Content = withContext<Assign<HTMLStyledProps<'div'>, ColorPicker.ContentProps>>(
  ColorPicker.Content,
  'content',
)

export const Control = withContext<Assign<HTMLStyledProps<'div'>, ColorPicker.ControlProps>>(
  ColorPicker.Control,
  'control',
)

export const EyeDropperTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, ColorPicker.EyeDropperTriggerProps>
>(ColorPicker.EyeDropperTrigger, 'eyeDropperTrigger')

export const FormatSelect = withContext<
  Assign<HTMLStyledProps<'select'>, ColorPicker.FormatSelectProps>
>(ColorPicker.FormatSelect, 'formatSelect')

export const FormatTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, ColorPicker.FormatTriggerProps>
>(ColorPicker.FormatTrigger, 'formatTrigger')

export const Label = withContext<Assign<HTMLStyledProps<'label'>, ColorPicker.LabelProps>>(
  ColorPicker.Label,
  'label',
)

export const Positioner = withContext<Assign<HTMLStyledProps<'div'>, ColorPicker.PositionerProps>>(
  ColorPicker.Positioner,
  'positioner',
)

export const SwatchGroup = withContext<
  Assign<HTMLStyledProps<'div'>, ColorPicker.SwatchGroupProps>
>(ColorPicker.SwatchGroup, 'swatchGroup')

export const SwatchIndicator = withContext<
  Assign<HTMLStyledProps<'div'>, ColorPicker.SwatchIndicatorProps>
>(ColorPicker.SwatchIndicator, 'swatchIndicator')

export const Swatch = withContext<Assign<HTMLStyledProps<'div'>, ColorPicker.SwatchProps>>(
  ColorPicker.Swatch,
  'swatch',
)

export const SwatchTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, ColorPicker.SwatchTriggerProps>
>(ColorPicker.SwatchTrigger, 'swatchTrigger')

export const TransparencyGrid = withContext<
  Assign<HTMLStyledProps<'div'>, ColorPicker.TransparencyGridProps>
>(ColorPicker.TransparencyGrid, 'transparencyGrid')

export const Trigger = withContext<Assign<HTMLStyledProps<'button'>, ColorPicker.TriggerProps>>(
  ColorPicker.Trigger,
  'trigger',
)

export const ValueSwatch = withContext<
  Assign<HTMLStyledProps<'div'>, ColorPicker.ValueSwatchProps>
>(ColorPicker.ValueSwatch, 'swatch')

export const ValueText = withContext<Assign<HTMLStyledProps<'span'>, ColorPicker.ValueTextProps>>(
  ColorPicker.ValueText,
  'valueText',
)

export const View = withContext<Assign<HTMLStyledProps<'div'>, ColorPicker.ViewProps>>(
  ColorPicker.View,
  'view',
)

export {
  ColorPickerContext as Context,
  ColorPickerHiddenInput as HiddenInput,
} from '@ark-ui/solid'
