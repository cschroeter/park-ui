import * as Ark from '@ark-ui/solid/slider'
import { styled } from 'styled-system/jsx'
import { slider, type SliderVariantProps } from 'styled-system/recipes'

import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(slider)

export * from '@ark-ui/solid/slider'
export type SliderProps = Ark.SliderProps & SliderVariantProps

const SliderRoot = withProvider(styled(Ark.Slider), 'root')
export const SliderControl = withContext(styled(Ark.SliderControl), 'control')
export const SliderLabel = withContext(styled(Ark.SliderLabel), 'label')
export const SliderMarker = withContext(styled(Ark.SliderMarker), 'marker')
export const SliderMarkerGroup = withContext(styled(Ark.SliderMarkerGroup), 'markerGroup')
export const SliderOutput = withContext(styled(Ark.SliderOutput), 'output')
export const SliderRange = withContext(styled(Ark.SliderRange), 'range')
export const SliderThumb = withContext(styled(Ark.SliderThumb), 'thumb')
export const SliderTrack = withContext(styled(Ark.SliderTrack), 'track')

export const Slider = Object.assign(SliderRoot, {
  Root: SliderRoot,
  Control: SliderControl,
  Label: SliderLabel,
  Marker: SliderMarker,
  MarkerGroup: SliderMarkerGroup,
  Output: SliderOutput,
  Range: SliderRange,
  Thumb: SliderThumb,
  Track: SliderTrack,
})
