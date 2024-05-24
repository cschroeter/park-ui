import { ColorPicker } from '@ark-ui/react/color-picker'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const colorPicker = tv(
  {
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
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(colorPicker)

export interface RootProps extends ColorPicker.RootProps, VariantProps<typeof colorPicker> {}
export const Root = withProvider<HTMLDivElement, RootProps>(ColorPicker.Root, 'root')

export const AreaBackground = withContext<HTMLDivElement, ColorPicker.AreaBackgroundProps>(
  ColorPicker.AreaBackground,
  'areaBackground',
)

export const Area = withContext<HTMLDivElement, ColorPicker.AreaProps>(ColorPicker.Area, 'area')

export const AreaThumb = withContext<HTMLDivElement, ColorPicker.AreaThumbProps>(
  ColorPicker.AreaThumb,
  'areaThumb',
)

export const ChannelInput = withContext<HTMLInputElement, ColorPicker.ChannelInputProps>(
  ColorPicker.ChannelInput,
  'channelInput',
)

export const ChannelSlider = withContext<HTMLDivElement, ColorPicker.ChannelSliderProps>(
  ColorPicker.ChannelSlider,
  'channelSlider',
)

export const ChannelSliderThumb = withContext<HTMLDivElement, ColorPicker.ChannelSliderThumbProps>(
  ColorPicker.ChannelSliderThumb,
  'channelSliderThumb',
)

export const ChannelSliderTrack = withContext<HTMLDivElement, ColorPicker.ChannelSliderTrackProps>(
  ColorPicker.ChannelSliderTrack,
  'channelSliderTrack',
)

export const Content = withContext<HTMLDivElement, ColorPicker.ContentProps>(
  ColorPicker.Content,
  'content',
)

export const Control = withContext<HTMLDivElement, ColorPicker.ControlProps>(
  ColorPicker.Control,
  'control',
)

export const EyeDropperTrigger = withContext<HTMLButtonElement, ColorPicker.EyeDropperTriggerProps>(
  ColorPicker.EyeDropperTrigger,
  'eyeDropperTrigger',
)

export const FormatSelect = withContext<HTMLSelectElement, ColorPicker.FormatSelectProps>(
  ColorPicker.FormatSelect,
  'formatSelect',
)

export const FormatTrigger = withContext<HTMLButtonElement, ColorPicker.FormatTriggerProps>(
  ColorPicker.FormatTrigger,
  'formatTrigger',
)

export const Label = withContext<HTMLLabelElement, ColorPicker.LabelProps>(
  ColorPicker.Label,
  'label',
)

export const Positioner = withContext<HTMLDivElement, ColorPicker.PositionerProps>(
  ColorPicker.Positioner,
  'positioner',
)

export const SwatchGroup = withContext<HTMLDivElement, ColorPicker.SwatchGroupProps>(
  ColorPicker.SwatchGroup,
  'swatchGroup',
)

export const SwatchIndicator = withContext<HTMLDivElement, ColorPicker.SwatchIndicatorProps>(
  ColorPicker.SwatchIndicator,
  'swatchIndicator',
)

export const Swatch = withContext<HTMLDivElement, ColorPicker.SwatchProps>(
  ColorPicker.Swatch,
  'swatch',
)

export const SwatchTrigger = withContext<HTMLButtonElement, ColorPicker.SwatchTriggerProps>(
  ColorPicker.SwatchTrigger,
  'swatchTrigger',
)

export const TransparencyGrid = withContext<HTMLDivElement, ColorPicker.TransparencyGridProps>(
  ColorPicker.TransparencyGrid,
  'transparencyGrid',
)

export const Trigger = withContext<HTMLButtonElement, ColorPicker.TriggerProps>(
  ColorPicker.Trigger,
  'trigger',
)

export const ValueText = withContext<HTMLDivElement, ColorPicker.ValueTextProps>(
  ColorPicker.ValueText,
  'valueText',
)

export const View = withContext<HTMLDivElement, ColorPicker.ViewProps>(ColorPicker.View, 'view')

export {
  ColorPickerContext as Context,
  ColorPickerHiddenInput as HiddenInput,
  type ColorPickerContextProps as ContextProps,
  type ColorPickerHiddenInputProps as HiddenInputProps,
} from '@ark-ui/react/color-picker'
