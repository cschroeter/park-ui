import * as Ark from '@ark-ui/solid/range-slider'
import { styled } from 'styled-system/jsx'
import { rangeSlider, type RangeSliderVariantProps } from 'styled-system/recipes'

import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(rangeSlider)

export * from '@ark-ui/solid/range-slider'
export type RangeSliderProps = Ark.RangeSliderProps & RangeSliderVariantProps

const RangeSliderRoot = withProvider(styled(Ark.RangeSlider), 'root')
export const RangeSliderControl = withContext(styled(Ark.RangeSliderControl), 'control')
export const RangeSliderLabel = withContext(styled(Ark.RangeSliderLabel), 'label')
export const RangeSliderMarker = withContext(styled(Ark.RangeSliderMarker), 'marker')
export const RangeSliderMarkerGroup = withContext(styled(Ark.RangeSliderMarkerGroup), 'markerGroup')
export const RangeSliderOutput = withContext(styled(Ark.RangeSliderOutput), 'output')
export const RangeSliderRange = withContext(styled(Ark.RangeSliderRange), 'range')
export const RangeSliderThumb = withContext(styled(Ark.RangeSliderThumb), 'thumb')
export const RangeSliderTrack = withContext(styled(Ark.RangeSliderTrack), 'track')

export const RangeSlider = Object.assign(RangeSliderRoot, {
  Root: RangeSliderRoot,
  Control: RangeSliderControl,
  Label: RangeSliderLabel,
  Marker: RangeSliderMarker,
  MarkerGroup: RangeSliderMarkerGroup,
  Output: RangeSliderOutput,
  Range: RangeSliderRange,
  Thumb: RangeSliderThumb,
  Track: RangeSliderTrack,
})
