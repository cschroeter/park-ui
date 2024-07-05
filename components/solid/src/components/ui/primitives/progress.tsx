import { Progress, type Assign } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type ProgressVariantProps, progress } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(progress)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Progress.RootProviderProps>, ProgressVariantProps>
>(Progress.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Progress.RootProps>, ProgressVariantProps>
>(Progress.Root, 'root')

export const Circle = withContext<Assign<HTMLStyledProps<'svg'>, Progress.CircleProps>>(
  Progress.Circle,
  'circle',
)

export const CircleRange = withContext<
  Assign<HTMLStyledProps<'circle'>, Progress.CircleRangeProps>
>(Progress.CircleRange, 'circleRange')

export const CircleTrack = withContext<
  Assign<HTMLStyledProps<'circle'>, Progress.CircleTrackProps>
>(Progress.CircleTrack, 'circleTrack')

export const Label = withContext<Assign<HTMLStyledProps<'label'>, Progress.LabelProps>>(
  Progress.Label,
  'label',
)

export const Range = withContext<Assign<HTMLStyledProps<'div'>, Progress.RangeProps>>(
  Progress.Range,
  'range',
)

export const Track = withContext<Assign<HTMLStyledProps<'div'>, Progress.TrackProps>>(
  Progress.Track,
  'track',
)

export const ValueText = withContext<Assign<HTMLStyledProps<'span'>, Progress.ValueTextProps>>(
  Progress.ValueText,
  'valueText',
)

export const View = withContext<Assign<HTMLStyledProps<'span'>, Progress.ViewProps>>(
  Progress.View,
  'view',
)

export { ProgressContext as Context } from '@ark-ui/solid'
