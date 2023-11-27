import { Slider as ArkSlider } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'
import { slider } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(slider)

export const SliderRoot = withProvider(styled(ArkSlider.Root), 'root')
export const SliderControl = withContext(styled(ArkSlider.Control), 'control')
export const SliderLabel = withContext(styled(ArkSlider.Label), 'label')
export const SliderMarker = withContext(styled(ArkSlider.Marker), 'marker')
export const SliderMarkerGroup = withContext(styled(ArkSlider.MarkerGroup), 'markerGroup')
export const SliderRange = withContext(styled(ArkSlider.Range), 'range')
export const SliderThumb = withContext(styled(ArkSlider.Thumb), 'thumb')
export const SliderTrack = withContext(styled(ArkSlider.Track), 'track')
export const SliderValueText = withContext(styled(ArkSlider.ValueText), 'valueText')

export const Slider = Object.assign(SliderRoot, {
  Root: SliderRoot,
  Control: SliderControl,
  Label: SliderLabel,
  Marker: SliderMarker,
  MarkerGroup: SliderMarkerGroup,
  Range: SliderRange,
  Thumb: SliderThumb,
  Track: SliderTrack,
  ValueText: SliderValueText,
})

export type SliderProps = typeof SliderRoot
export type SliderControlProps = typeof SliderControl
export type SliderLabelProps = typeof SliderLabel
export type SliderMarkerProps = typeof SliderMarker
export type SliderMarkerGroupProps = typeof SliderMarkerGroup
export type SliderRangeProps = typeof SliderRange
export type SliderThumbProps = typeof SliderThumb
export type SliderTrackProps = typeof SliderTrack
export type SliderValueTextProps = typeof SliderValueText
