import * as Ark from '@ark-ui/react/range-slider'
import { styled } from 'styled-system/jsx'
import { slider, type SliderVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

export * from '@ark-ui/react/range-slider'

const { withProvider, withContext } = createStyleContext(slider)

export type RangeSliderProps = Ark.RangeSliderProps & SliderVariantProps

const RangeSliderRoot = withProvider(styled(Ark.RangeSlider.Root), 'root')
const RangeSliderControl = withContext(styled(Ark.RangeSlider.Control), 'control')
const RangeSliderLabel = withContext(styled(Ark.RangeSlider.Label), 'label')
const RangeSliderMarker = withContext(styled(Ark.RangeSlider.Marker), 'marker')
const RangeSliderMarkerGroup = withContext(styled(Ark.RangeSlider.MarkerGroup), 'markerGroup')
const RangeSliderOutput = withContext(styled(Ark.RangeSlider.Output), 'output')
const RangeSliderRange = withContext(styled(Ark.RangeSlider.Range), 'range')
const RangeSliderThumb = withContext(styled(Ark.RangeSlider.Thumb), 'thumb')
const RangeSliderTrack = withContext(styled(Ark.RangeSlider.Track), 'track')

const RangeSlider = Object.assign(RangeSliderRoot, {
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

export {
  RangeSlider,
  RangeSliderControl,
  RangeSliderLabel,
  RangeSliderMarker,
  RangeSliderMarkerGroup,
  RangeSliderOutput,
  RangeSliderRange,
  RangeSliderThumb,
  RangeSliderTrack,
}
