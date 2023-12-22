import { Slider as ArkSlider } from '@ark-ui/react/slider'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from './create-style-context'

const { withProvider, withContext } = createStyleContext('Slider')

const Slider = withProvider(chakra(ArkSlider.Root), 'root')
const SliderControl = withContext(chakra(ArkSlider.Control), 'control')
const SliderLabel = withContext(chakra(ArkSlider.Label), 'label')
const SliderMarker = withContext(chakra(ArkSlider.Marker), 'marker')
const SliderMarkerGroup = withContext(chakra(ArkSlider.MarkerGroup), 'markerGroup')
const SliderRange = withContext(chakra(ArkSlider.Range), 'range')
const SliderThumb = withContext(chakra(ArkSlider.Thumb), 'thumb')
const SliderTrack = withContext(chakra(ArkSlider.Track), 'track')
const SliderValueText = withContext(chakra(ArkSlider.ValueText), 'valueText')

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

export interface SliderProps extends HTMLChakraProps<typeof Slider> {}
export interface SliderControlProps extends HTMLChakraProps<typeof SliderControl> {}
export interface SliderLabelProps extends HTMLChakraProps<typeof SliderLabel> {}
export interface SliderMarkerProps extends HTMLChakraProps<typeof SliderMarker> {}
export interface SliderMarkerGroupProps extends HTMLChakraProps<typeof SliderMarkerGroup> {}
export interface SliderRangeProps extends HTMLChakraProps<typeof SliderRange> {}
export interface SliderThumbProps extends HTMLChakraProps<typeof SliderThumb> {}
export interface SliderTrackProps extends HTMLChakraProps<typeof SliderTrack> {}
export interface SliderValueTextProps extends HTMLChakraProps<typeof SliderValueText> {}
