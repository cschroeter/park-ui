import { ColorPicker } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
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
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(ColorPicker.Root, 'root')
export const Area = withContext(ColorPicker.Area, 'area')
export const AreaBackground = withContext(ColorPicker.AreaBackground, 'areaBackground')
export const AreaThumb = withContext(ColorPicker.AreaThumb, 'areaThumb')
export const ChannelInput = withContext(ColorPicker.ChannelInput, 'channelInput')
export const ChannelSlider = withContext(ColorPicker.ChannelSlider, 'channelSlider')
export const ChannelSliderThumb = withContext(ColorPicker.ChannelSliderThumb, 'channelSliderThumb')
export const ChannelSliderTrack = withContext(ColorPicker.ChannelSliderTrack, 'channelSliderTrack')
export const Content = withContext(ColorPicker.Content, 'content')
export const Control = withContext(ColorPicker.Control, 'control')
export const EyeDropperTrigger = withContext(ColorPicker.EyeDropperTrigger, 'eyeDropperTrigger')
export const FormatSelect = withContext(ColorPicker.FormatSelect, 'formatSelect')
export const FormatTrigger = withContext(ColorPicker.FormatTrigger, 'formatTrigger')
export const Label = withContext(ColorPicker.Label, 'label')
export const Positioner = withContext(ColorPicker.Positioner, 'positioner')
export const Swatch = withContext(ColorPicker.Swatch, 'swatch')
export const SwatchGroup = withContext(ColorPicker.SwatchGroup, 'swatchGroup')
export const SwatchIndicator = withContext(ColorPicker.SwatchIndicator, 'swatchIndicator')
export const SwatchTrigger = withContext(ColorPicker.SwatchTrigger, 'swatchTrigger')
export const TransparencyGrid = withContext(ColorPicker.TransparencyGrid, 'transparencyGrid')
export const Trigger = withContext(ColorPicker.Trigger, 'trigger')
export const ValueText = withContext(ColorPicker.ValueText, 'valueText')
export const View = withContext(ColorPicker.View, 'view')

export type RootProps = ComponentProps<typeof Root>
export interface AreaProps extends ComponentProps<typeof Area> {}
export interface AreaBackgroundProps extends ComponentProps<typeof AreaBackground> {}
export interface AreaThumbProps extends ComponentProps<typeof AreaThumb> {}
export interface ChannelInputProps extends ComponentProps<typeof ChannelInput> {}
export interface ChannelSliderProps extends ComponentProps<typeof ChannelSlider> {}
export interface ChannelSliderThumbProps extends ComponentProps<typeof ChannelSliderThumb> {}
export interface ChannelSliderTrackProps extends ComponentProps<typeof ChannelSliderTrack> {}
export interface ContentProps extends ComponentProps<typeof Content> {}
export interface ControlProps extends ComponentProps<typeof Control> {}
export interface EyeDropperTriggerProps extends ComponentProps<typeof EyeDropperTrigger> {}
export interface FormatSelectProps extends ComponentProps<typeof FormatSelect> {}
export interface FormatTriggerProps extends ComponentProps<typeof FormatTrigger> {}
export interface LabelProps extends ComponentProps<typeof Label> {}
export interface PositionerProps extends ComponentProps<typeof Positioner> {}
export interface SwatchProps extends ComponentProps<typeof Swatch> {}
export interface SwatchGroupProps extends ComponentProps<typeof SwatchGroup> {}
export interface SwatchIndicatorProps extends ComponentProps<typeof SwatchIndicator> {}
export interface SwatchTriggerProps extends ComponentProps<typeof SwatchTrigger> {}
export interface TransparencyGridProps extends ComponentProps<typeof TransparencyGrid> {}
export interface TriggerProps extends ComponentProps<typeof Trigger> {}
export interface ValueTextProps extends ComponentProps<typeof ValueText> {}
export interface ViewProps extends ComponentProps<typeof View> {}
