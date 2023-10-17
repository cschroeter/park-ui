import * as Ark from '@ark-ui/react/slider'
import { createStyleContext } from '~/lib/create-style-context'
import { sliderStyles } from './recipe'
export * from '@ark-ui/react/slider'

export type SliderProps = React.ComponentProps<typeof Slider>

const { withProvider, withContext } = createStyleContext(sliderStyles)

const SliderRoot = withProvider(Ark.Slider.Root, 'root')
export const SliderControl = withContext(Ark.Slider.Control, 'control')
export const SliderLabel = withContext(Ark.Slider.Label, 'label')
export const SliderMarker = withContext(Ark.Slider.Marker, 'marker')
export const SliderMarkerGroup = withContext(Ark.Slider.MarkerGroup, 'markerGroup')
export const SliderOutput = withContext(Ark.Slider.Output, 'output')
export const SliderRange = withContext(Ark.Slider.Range, 'range')
export const SliderThumb = withContext(Ark.Slider.Thumb, 'thumb')
export const SliderTrack = withContext(Ark.Slider.Track, 'track')

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
