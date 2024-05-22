import { type Assign, ColorPicker } from '@ark-ui/solid'
import { type ColorPickerVariantProps, colorPicker } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(colorPicker)

export interface RootProps
  extends Assign<JsxStyleProps, ColorPicker.RootProps>,
    ColorPickerVariantProps {}
export const Root = withProvider<RootProps>(ColorPicker.Root, 'root')

export const AreaBackground = withContext<Assign<JsxStyleProps, ColorPicker.AreaBackgroundProps>>(
  ColorPicker.AreaBackground,
  'areaBackground',
)

export const Area = withContext<Assign<JsxStyleProps, ColorPicker.AreaProps>>(
  ColorPicker.Area,
  'area',
)

export const AreaThumb = withContext<Assign<JsxStyleProps, ColorPicker.AreaThumbProps>>(
  ColorPicker.AreaThumb,
  'areaThumb',
)

export const ChannelInput = withContext<Assign<JsxStyleProps, ColorPicker.ChannelInputProps>>(
  ColorPicker.ChannelInput,
  'channelInput',
)

export const ChannelSlider = withContext<Assign<JsxStyleProps, ColorPicker.ChannelSliderProps>>(
  ColorPicker.ChannelSlider,
  'channelSlider',
)

export const ChannelSliderThumb = withContext<
  Assign<JsxStyleProps, ColorPicker.ChannelSliderThumbProps>
>(ColorPicker.ChannelSliderThumb, 'channelSliderThumb')

export const ChannelSliderTrack = withContext<
  Assign<JsxStyleProps, ColorPicker.ChannelSliderTrackProps>
>(ColorPicker.ChannelSliderTrack, 'channelSliderTrack')

export const Content = withContext<Assign<JsxStyleProps, ColorPicker.ContentProps>>(
  ColorPicker.Content,
  'content',
)

export const Control = withContext<Assign<JsxStyleProps, ColorPicker.ControlProps>>(
  ColorPicker.Control,
  'control',
)

export const EyeDropperTrigger = withContext<
  Assign<JsxStyleProps, ColorPicker.EyeDropperTriggerProps>
>(ColorPicker.EyeDropperTrigger, 'eyeDropperTrigger')

export const FormatSelect = withContext<Assign<JsxStyleProps, ColorPicker.FormatSelectProps>>(
  ColorPicker.FormatSelect,
  'formatSelect',
)

export const FormatTrigger = withContext<Assign<JsxStyleProps, ColorPicker.FormatTriggerProps>>(
  ColorPicker.FormatTrigger,
  'formatTrigger',
)

export const Label = withContext<Assign<JsxStyleProps, ColorPicker.LabelProps>>(
  ColorPicker.Label,
  'label',
)

export const Positioner = withContext<Assign<JsxStyleProps, ColorPicker.PositionerProps>>(
  ColorPicker.Positioner,
  'positioner',
)

export const SwatchGroup = withContext<Assign<JsxStyleProps, ColorPicker.SwatchGroupProps>>(
  ColorPicker.SwatchGroup,
  'swatchGroup',
)

export const SwatchIndicator = withContext<Assign<JsxStyleProps, ColorPicker.SwatchIndicatorProps>>(
  ColorPicker.SwatchIndicator,
  'swatchIndicator',
)

export const Swatch = withContext<Assign<JsxStyleProps, ColorPicker.SwatchProps>>(
  ColorPicker.Swatch,
  'swatch',
)

export const SwatchTrigger = withContext<Assign<JsxStyleProps, ColorPicker.SwatchTriggerProps>>(
  ColorPicker.SwatchTrigger,
  'swatchTrigger',
)

export const TransparencyGrid = withContext<
  Assign<JsxStyleProps, ColorPicker.TransparencyGridProps>
>(ColorPicker.TransparencyGrid, 'transparencyGrid')

export const Trigger = withContext<Assign<JsxStyleProps, ColorPicker.TriggerProps>>(
  ColorPicker.Trigger,
  'trigger',
)

export const ValueText = withContext<Assign<JsxStyleProps, ColorPicker.ValueTextProps>>(
  ColorPicker.ValueText,
  'valueText',
)

// @ts-expect-error fix with 3.0
export const View = withContext<Assign<JsxStyleProps, ColorPicker.ViewProps>>(
  ColorPicker.View,
  'view',
)

export {
  ColorPickerContext as Context,
  ColorPickerHiddenInput as HiddenInput,
  type ColorPickerContextProps as ContextProps,
  type ColorPickerHiddenInputProps as HiddenInputProps,
} from '@ark-ui/solid'
