import { Slider as ArkSlider } from '@ark-ui/react/slider'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { slider } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(slider)

const Slider = withProvider(styled(ArkSlider.Root), 'root')
const SliderControl = withContext(styled(ArkSlider.Control), 'control')
const SliderLabel = withContext(styled(ArkSlider.Label), 'label')
const SliderMarker = withContext(styled(ArkSlider.Marker), 'marker')
const SliderMarkerGroup = withContext(styled(ArkSlider.MarkerGroup), 'markerGroup')
const SliderRange = withContext(styled(ArkSlider.Range), 'range')
const SliderThumb = withContext(styled(ArkSlider.Thumb), 'thumb')
const SliderTrack = withContext(styled(ArkSlider.Track), 'track')
const SliderValueText = withContext(styled(ArkSlider.ValueText), 'valueText')

const Root = Slider
const Control = SliderControl
const Label = SliderLabel
const Marker = SliderMarker
const MarkerGroup = SliderMarkerGroup
const Range = SliderRange
const Thumb = SliderThumb
const Track = SliderTrack
const ValueText = SliderValueText

export {
  Control,
  Label,
  Marker,
  MarkerGroup,
  Range,
  Root,
  Slider,
  SliderControl,
  SliderLabel,
  SliderMarker,
  SliderMarkerGroup,
  SliderRange,
  SliderThumb,
  SliderTrack,
  SliderValueText,
  Thumb,
  Track,
  ValueText,
}

export interface SliderProps extends HTMLStyledProps<typeof Slider> {}
export interface SliderControlProps extends HTMLStyledProps<typeof SliderControl> {}
export interface SliderLabelProps extends HTMLStyledProps<typeof SliderLabel> {}
export interface SliderMarkerProps extends HTMLStyledProps<typeof SliderMarker> {}
export interface SliderMarkerGroupProps extends HTMLStyledProps<typeof SliderMarkerGroup> {}
export interface SliderRangeProps extends HTMLStyledProps<typeof SliderRange> {}
export interface SliderThumbProps extends HTMLStyledProps<typeof SliderThumb> {}
export interface SliderTrackProps extends HTMLStyledProps<typeof SliderTrack> {}
export interface SliderValueTextProps extends HTMLStyledProps<typeof SliderValueText> {}
