import { Slider, type Assign } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type SliderVariantProps, slider } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(slider)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Slider.RootProviderProps>, SliderVariantProps>
>(Slider.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Slider.RootProps>, SliderVariantProps>
>(Slider.Root, 'root')

export const Control = withContext<Assign<HTMLStyledProps<'div'>, Slider.ControlProps>>(
  Slider.Control,
  'control',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, Slider.LabelProps>>(
  Slider.Label,
  'label',
)

export const MarkerGroup = withContext<Assign<HTMLStyledProps<'div'>, Slider.MarkerGroupProps>>(
  Slider.MarkerGroup,
  'markerGroup',
)

export const Marker = withContext<Assign<HTMLStyledProps<'span'>, Slider.MarkerProps>>(
  Slider.Marker,
  'marker',
)

export const Range = withContext<Assign<HTMLStyledProps<'div'>, Slider.RangeProps>>(
  Slider.Range,
  'range',
)

export const Thumb = withContext<Assign<HTMLStyledProps<'div'>, Slider.ThumbProps>>(
  Slider.Thumb,
  'thumb',
)

export const Track = withContext<Assign<HTMLStyledProps<'div'>, Slider.TrackProps>>(
  Slider.Track,
  'track',
)

export const ValueText = withContext<Assign<HTMLStyledProps<'span'>, Slider.ValueTextProps>>(
  Slider.ValueText,
  'valueText',
)

export {
  SliderContext as Context,
  SliderHiddenInput as HiddenInput,
} from '@ark-ui/solid'
