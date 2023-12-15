'use client'

import { Slider as ArkSlider } from '@ark-ui/react'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'slider',
  defaultVariants: { size: 'md' },
  slots: {
    root: 'slider__root',
    label: 'slider__label',
    thumb: 'slider__thumb',
    valueText: 'slider__valueText',
    track: 'slider__track',
    range: 'slider__range',
    control: 'slider__control',
    markerGroup: 'slider__markerGroup',
    marker: 'slider__marker',
  },
  variants: {
    size: {
      sm: {
        root: 'slider__root--size_sm',
        label: 'slider__label--size_sm',
        thumb: 'slider__thumb--size_sm',
        valueText: 'slider__valueText--size_sm',
        track: 'slider__track--size_sm',
        range: 'slider__range--size_sm',
        control: 'slider__control--size_sm',
        markerGroup: 'slider__markerGroup--size_sm',
        marker: 'slider__marker--size_sm',
      },
      md: {
        root: 'slider__root--size_md',
        label: 'slider__label--size_md',
        thumb: 'slider__thumb--size_md',
        valueText: 'slider__valueText--size_md',
        track: 'slider__track--size_md',
        range: 'slider__range--size_md',
        control: 'slider__control--size_md',
        markerGroup: 'slider__markerGroup--size_md',
        marker: 'slider__marker--size_md',
      },
      lg: {
        root: 'slider__root--size_lg',
        label: 'slider__label--size_lg',
        thumb: 'slider__thumb--size_lg',
        valueText: 'slider__valueText--size_lg',
        track: 'slider__track--size_lg',
        range: 'slider__range--size_lg',
        control: 'slider__control--size_lg',
        markerGroup: 'slider__markerGroup--size_lg',
        marker: 'slider__marker--size_lg',
      },
    },
  },
})
const { withProvider, withContext } = createStyleContext(styles)

const Slider = withProvider(ArkSlider.Root, 'root')
const SliderControl = withContext(ArkSlider.Control, 'control')
const SliderLabel = withContext(ArkSlider.Label, 'label')
const SliderMarker = withContext(ArkSlider.Marker, 'marker')
const SliderMarkerGroup = withContext(ArkSlider.MarkerGroup, 'markerGroup')
const SliderRange = withContext(ArkSlider.Range, 'range')
const SliderThumb = withContext(ArkSlider.Thumb, 'thumb')
const SliderTrack = withContext(ArkSlider.Track, 'track')
const SliderValueText = withContext(ArkSlider.ValueText, 'valueText')

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
