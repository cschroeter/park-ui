import { type Assign, Slider } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type SliderVariantProps, slider } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(slider)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Slider.RootProviderBaseProps>, SliderVariantProps>
>(Slider.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Slider.RootBaseProps>, SliderVariantProps>
>(Slider.Root, 'root')

export const Control = withContext<Assign<HTMLStyledProps<'div'>, Slider.ControlBaseProps>>(
  Slider.Control,
  'control',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, Slider.LabelBaseProps>>(
  Slider.Label,
  'label',
)

export const MarkerGroup = withContext<Assign<HTMLStyledProps<'div'>, Slider.MarkerGroupBaseProps>>(
  Slider.MarkerGroup,
  'markerGroup',
)

export const Marker = withContext<Assign<HTMLStyledProps<'span'>, Slider.MarkerBaseProps>>(
  Slider.Marker,
  'marker',
)

export const Range = withContext<Assign<HTMLStyledProps<'div'>, Slider.RangeBaseProps>>(
  Slider.Range,
  'range',
)

export const Thumb = withContext<Assign<HTMLStyledProps<'div'>, Slider.ThumbBaseProps>>(
  Slider.Thumb,
  'thumb',
)

export const Track = withContext<Assign<HTMLStyledProps<'div'>, Slider.TrackBaseProps>>(
  Slider.Track,
  'track',
)

export const ValueText = withContext<Assign<HTMLStyledProps<'span'>, Slider.ValueTextBaseProps>>(
  Slider.ValueText,
  'valueText',
)

export {
  SliderContext as Context,
  SliderHiddenInput as HiddenInput,
} from '@ark-ui/solid'
