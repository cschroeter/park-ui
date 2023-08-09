import * as Ark from '@ark-ui/react/slider'
import { styled } from 'styled-system/jsx'
import { slider, type SliderVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

export * from '@ark-ui/react/slider'

const { withProvider, withContext } = createStyleContext(slider)

export type SliderProps = Ark.SliderProps & SliderVariantProps

const SliderRoot = withProvider(styled(Ark.Slider.Root), 'root')
const SliderControl = withContext(styled(Ark.Slider.Control), 'control')
const SliderLabel = withContext(styled(Ark.Slider.Label), 'label')
const SliderMarker = withContext(styled(Ark.Slider.Marker), 'marker')
const SliderMarkerGroup = withContext(styled(Ark.Slider.MarkerGroup), 'markerGroup')
const SliderOutput = withContext(styled(Ark.Slider.Output), 'output')
const SliderRange = withContext(styled(Ark.Slider.Range), 'range')
const SliderThumb = withContext(styled(Ark.Slider.Thumb), 'thumb')
const SliderTrack = withContext(styled(Ark.Slider.Track), 'track')

const Slider = Object.assign(SliderRoot, {
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

export {
  Slider,
  SliderControl,
  SliderLabel,
  SliderMarker,
  SliderMarkerGroup,
  SliderOutput,
  SliderRange,
  SliderThumb,
  SliderTrack,
}
