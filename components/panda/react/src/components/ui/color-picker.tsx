import type { Assign } from '@ark-ui/react'
import { ColorPicker } from '@ark-ui/react/color-picker'
import { type ColorPickerVariantProps, colorPicker } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(colorPicker)

export interface RootProps
  extends Assign<JsxStyleProps, ColorPicker.RootProps>,
    ColorPickerVariantProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(ColorPicker.Root, 'root')

export interface AreaBackgroundProps
  extends Assign<JsxStyleProps, ColorPicker.AreaBackgroundProps> {}
export const AreaBackground = withContext<HTMLDivElement, AreaBackgroundProps>(
  ColorPicker.AreaBackground,
  'areaBackground',
)

export interface AreaProps extends Assign<JsxStyleProps, ColorPicker.AreaProps> {}
export const Area = withContext<HTMLDivElement, AreaProps>(ColorPicker.Area, 'area')

export interface AreaThumbProps extends Assign<JsxStyleProps, ColorPicker.AreaThumbProps> {}
export const AreaThumb = withContext<HTMLDivElement, AreaThumbProps>(
  ColorPicker.AreaThumb,
  'areaThumb',
)

export interface ChannelInputProps extends Assign<JsxStyleProps, ColorPicker.ChannelInputProps> {}
export const ChannelInput = withContext<HTMLInputElement, ChannelInputProps>(
  ColorPicker.ChannelInput,
  'channelInput',
)

export interface ChannelSliderProps extends Assign<JsxStyleProps, ColorPicker.ChannelSliderProps> {}
export const ChannelSlider = withContext<HTMLDivElement, ChannelSliderProps>(
  ColorPicker.ChannelSlider,
  'channelSlider',
)

export interface ChannelSliderThumbProps
  extends Assign<JsxStyleProps, ColorPicker.ChannelSliderThumbProps> {}
export const ChannelSliderThumb = withContext<HTMLDivElement, ChannelSliderThumbProps>(
  ColorPicker.ChannelSliderThumb,
  'channelSliderThumb',
)

export interface ChannelSliderTrackProps
  extends Assign<JsxStyleProps, ColorPicker.ChannelSliderTrackProps> {}
export const ChannelSliderTrack = withContext<HTMLDivElement, ChannelSliderTrackProps>(
  ColorPicker.ChannelSliderTrack,
  'channelSliderTrack',
)

export interface ContentProps extends Assign<JsxStyleProps, ColorPicker.ContentProps> {}
export const Content = withContext<HTMLDivElement, ContentProps>(ColorPicker.Content, 'content')

export interface ControlProps extends Assign<JsxStyleProps, ColorPicker.ControlProps> {}
export const Control = withContext<HTMLDivElement, ControlProps>(ColorPicker.Control, 'control')

export interface EyeDropperTriggerProps
  extends Assign<JsxStyleProps, ColorPicker.EyeDropperTriggerProps> {}
export const EyeDropperTrigger = withContext<HTMLButtonElement, EyeDropperTriggerProps>(
  ColorPicker.EyeDropperTrigger,
  'eyeDropperTrigger',
)

export interface FormatSelectProps extends Assign<JsxStyleProps, ColorPicker.FormatSelectProps> {}
export const FormatSelect = withContext<HTMLSelectElement, FormatSelectProps>(
  ColorPicker.FormatSelect,
  'formatSelect',
)

export interface FormatTriggerProps extends Assign<JsxStyleProps, ColorPicker.FormatTriggerProps> {}
export const FormatTrigger = withContext<HTMLButtonElement, FormatTriggerProps>(
  ColorPicker.FormatTrigger,
  'formatTrigger',
)

export interface LabelProps extends Assign<JsxStyleProps, ColorPicker.LabelProps> {}
export const Label = withContext<HTMLLabelElement, LabelProps>(ColorPicker.Label, 'label')

export interface PositionerProps extends Assign<JsxStyleProps, ColorPicker.PositionerProps> {}
export const Positioner = withContext<HTMLDivElement, PositionerProps>(
  ColorPicker.Positioner,
  'positioner',
)

export interface SwatchGroupProps extends Assign<JsxStyleProps, ColorPicker.SwatchGroupProps> {}
export const SwatchGroup = withContext<HTMLDivElement, SwatchGroupProps>(
  ColorPicker.SwatchGroup,
  'swatchGroup',
)

export interface SwatchIndicatorProps
  extends Assign<JsxStyleProps, ColorPicker.SwatchIndicatorProps> {}
export const SwatchIndicator = withContext<HTMLDivElement, SwatchIndicatorProps>(
  ColorPicker.SwatchIndicator,
  'swatchIndicator',
)

export interface SwatchProps extends Assign<JsxStyleProps, ColorPicker.SwatchProps> {}
export const Swatch = withContext<HTMLDivElement, SwatchProps>(ColorPicker.Swatch, 'swatch')

export interface SwatchTriggerProps extends Assign<JsxStyleProps, ColorPicker.SwatchTriggerProps> {}
export const SwatchTrigger = withContext<HTMLButtonElement, SwatchTriggerProps>(
  ColorPicker.SwatchTrigger,
  'swatchTrigger',
)

export interface TransparencyGridProps
  extends Assign<JsxStyleProps, ColorPicker.TransparencyGridProps> {}
export const TransparencyGrid = withContext<HTMLDivElement, TransparencyGridProps>(
  ColorPicker.TransparencyGrid,
  'transparencyGrid',
)

export interface TriggerProps extends Assign<JsxStyleProps, ColorPicker.TriggerProps> {}
export const Trigger = withContext<HTMLButtonElement, TriggerProps>(ColorPicker.Trigger, 'trigger')

export interface ValueTextProps extends Assign<JsxStyleProps, ColorPicker.ValueTextProps> {}
export const ValueText = withContext<HTMLDivElement, ValueTextProps>(
  ColorPicker.ValueText,
  'valueText',
)

export interface ViewProps extends Assign<JsxStyleProps, ColorPicker.ViewProps> {}
export const View = withContext<HTMLDivElement, ViewProps>(ColorPicker.View, 'view')
export {
  ColorPickerContext as Context,
  ColorPickerHiddenInput as HiddenInput,
  type ColorPickerContextProps as ContextProps,
  type ColorPickerHiddenInputProps as HiddenInputProps,
} from '@ark-ui/react/color-picker'
