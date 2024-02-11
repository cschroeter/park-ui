import { Slider as ArkSlider, type SliderRootProps } from '@ark-ui/solid'
import { Index, type JSX, Show, children, splitProps } from 'solid-js'
import { type VariantProps, tv } from 'tailwind-variants'

export interface SliderProps extends SliderRootProps, SliderVariantProps {
  children?: JSX.Element
  marks?: {
    value: number
    label?: JSX.Element
  }[]
}

export const Slider = (props: SliderProps) => {
  const [variantProps, sliderProps] = splitProps(props, ['size', 'class'])
  const [localProps, rootProps] = splitProps(sliderProps, ['marks', 'children'])
  const getChildren = children(() => localProps.children)
  const { root, control, label, marker, markerGroup, range, thumb, track } = styles(variantProps)

  return (
    <ArkSlider.Root class={root()} {...rootProps}>
      {(api) => (
        <>
          <Show when={getChildren()}>
            <ArkSlider.Label class={label()}>{getChildren()}</ArkSlider.Label>
          </Show>
          <ArkSlider.Control class={control()}>
            <ArkSlider.Track class={track()}>
              <ArkSlider.Range class={range()} />
            </ArkSlider.Track>
            <Index each={api().value}>
              {(_, index) => <ArkSlider.Thumb index={index} class={thumb()} />}
            </Index>
          </ArkSlider.Control>
          <Show when={localProps.marks}>
            <ArkSlider.MarkerGroup class={markerGroup()}>
              <Index each={localProps.marks}>
                {(mark) => (
                  <ArkSlider.Marker value={mark().value} class={marker()}>
                    {mark().label}
                  </ArkSlider.Marker>
                )}
              </Index>
            </ArkSlider.MarkerGroup>
          </Show>
        </>
      )}
    </ArkSlider.Root>
  )
}

type SliderVariantProps = VariantProps<typeof styles>

const styles = tv(
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
