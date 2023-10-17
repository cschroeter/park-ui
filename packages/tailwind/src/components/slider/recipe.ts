import { tv } from 'tailwind-variants'

export const sliderStyles = tv({
  base: 'slider',
  defaultVariants: {
    size: 'md',
  },
  slots: {
    root: 'slider__root',
    label: 'slider__label',
    thumb: 'slider__thumb',
    output: 'slider__output',
    track: 'slider__track',
    range: 'slider__range',
    control: 'slider__control',
    markerGroup: 'slider__markerGroup',
    marker: 'slider__marker',
  },
  variants: {
    size: {
      md: {
        root: 'slider__root--size_md',
        label: 'slider__label--size_md',
        thumb: 'slider__thumb--size_md',
        output: 'slider__output--size_md',
        track: 'slider__track--size_md',
        range: 'slider__range--size_md',
        control: 'slider__control--size_md',
        markerGroup: 'slider__markerGroup--size_md',
        marker: 'slider__marker--size_md',
      },
    },
  },
})
