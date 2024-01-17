import { Slider as ArkSlider, type SliderProps as ArkSliderProps } from '@ark-ui/solid'
import { Index, Show, children, splitProps, type JSX } from 'solid-js'
import { css, cx } from 'styled-system/css'
import { slider, type SliderVariantProps } from 'styled-system/recipes'
import type { Assign, JsxStyleProps } from 'styled-system/types'

export interface SliderProps extends Assign<JsxStyleProps, ArkSliderProps>, SliderVariantProps {
  children?: JSX.Element
  marks?: {
    value: number
    label?: JSX.Element
  }[]
}

export const Slider = (props: SliderProps) => {
  const [variantProps, sliderProps] = slider.splitVariantProps(props)
  const [localProps, rootProps] = splitProps(sliderProps, ['children'])
  const getChildren = children(() => localProps.children)
  const styles = slider(variantProps)

  return (
    <ArkSlider.Root class={cx(styles.root, css(rootProps))} {...rootProps}>
      {(api) => (
        <>
          <Show when={getChildren()}>
            <ArkSlider.Label class={styles.label}>{getChildren()}</ArkSlider.Label>
          </Show>
          <ArkSlider.Control class={styles.control}>
            <ArkSlider.Track class={styles.track}>
              <ArkSlider.Range class={styles.range} />
            </ArkSlider.Track>
            <Index each={api().value}>
              {(_, index) => <ArkSlider.Thumb index={index} class={styles.thumb} />}
            </Index>
          </ArkSlider.Control>
          <Show when={rootProps.marks}>
            <ArkSlider.MarkerGroup class={styles.markerGroup}>
              <Index each={rootProps.marks}>
                {(mark) => (
                  <ArkSlider.Marker value={mark().value} class={styles.marker}>
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
