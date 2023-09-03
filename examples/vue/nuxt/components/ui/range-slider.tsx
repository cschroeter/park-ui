import * as Ark from '@ark-ui/vue/range-slider'
import { styled } from 'styled-system/jsx'
import { rangeSlider, type RangeSliderVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(rangeSlider)

export * from '@ark-ui/vue/range-slider'
export type RangeSliderProps = Ark.RangeSliderProps & RangeSliderVariantProps

export const RangeSlider = withProvider(styled(Ark.RangeSlider.Root), 'root')
export const RangeSliderControl = withContext(styled(Ark.RangeSlider.Control), 'control')
export const RangeSliderLabel = withContext(styled(Ark.RangeSlider.Label), 'label')
export const RangeSliderMarker = withContext(styled(Ark.RangeSlider.Marker), 'marker')
export const RangeSliderMarkerGroup = withContext(
  styled(Ark.RangeSlider.MarkerGroup),
  'markerGroup',
)
export const RangeSliderOutput = withContext(styled(Ark.RangeSlider.Output), 'output')
export const RangeSliderRange = withContext(styled(Ark.RangeSlider.Range), 'range')
export const RangeSliderThumb = withContext(styled(Ark.RangeSlider.Thumb), 'thumb')
export const RangeSliderTrack = withContext(styled(Ark.RangeSlider.Track), 'track')
