import { Slider as ArkSlider, type SliderRootProps } from '@ark-ui/react/slider'
import { type ReactNode, forwardRef } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

export interface SliderProps extends SliderRootProps, SliderVariantProps {
  marks?: {
    value: number
    label?: ReactNode
  }[]
}

export const Slider = forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const { children, className, size, ...rootProps } = props
  const { root, label, control, track, range, thumb, marker, markerGroup } = slider({ size })

  return (
    <ArkSlider.Root ref={ref} className={root({ className })} {...rootProps}>
      <ArkSlider.Context>
        {(api) => (
          <>
            {children && <ArkSlider.Label className={label()}>{children}</ArkSlider.Label>}
            <ArkSlider.Control className={control()}>
              <ArkSlider.Track className={track()}>
                <ArkSlider.Range className={range()} />
              </ArkSlider.Track>
              {api.value.map((_, index) => (
                <ArkSlider.Thumb key={index} index={index} className={thumb()} />
              ))}
            </ArkSlider.Control>
            {props.marks && (
              <ArkSlider.MarkerGroup className={markerGroup()}>
                {props.marks.map((mark) => (
                  <ArkSlider.Marker key={mark.value} value={mark.value} className={marker()}>
                    {mark.label}
                  </ArkSlider.Marker>
                ))}
              </ArkSlider.MarkerGroup>
            )}
          </>
        )}
      </ArkSlider.Context>
    </ArkSlider.Root>
  )
})

Slider.displayName = 'Slider'

type SliderVariantProps = VariantProps<typeof slider>

const slider = tv(
  {
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
  },
  { twMerge: false },
)
