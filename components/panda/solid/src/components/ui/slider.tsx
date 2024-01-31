import { Slider as ArkSlider, type SliderRootProps } from '@ark-ui/solid'
import { Index, Show, children, splitProps, type JSX } from 'solid-js'
import { css, cx } from 'styled-system/css'
import { splitCssProps } from 'styled-system/jsx'
import { slider, type SliderVariantProps } from 'styled-system/recipes'
import type { Assign, JsxStyleProps } from 'styled-system/types'

export interface SliderProps extends Assign<JsxStyleProps, SliderRootProps>, SliderVariantProps {
  children?: JSX.Element
  marks?: {
    value: number
    label?: JSX.Element
  }[]
}

export const Slider = (props: SliderProps) => {
  const [variantProps, ratingGroupProps] = slider.splitVariantProps(props)
  const [cssProps, elementProps] = splitCssProps(ratingGroupProps)
  const [localProps, rootProps] = splitProps(elementProps, ['children', 'class', 'marks'])
  const getChildren = children(() => localProps.children)
  const styles = slider(variantProps)

  return (
    <ArkSlider.Root class={cx(styles.root, css(cssProps), localProps.class)} {...rootProps}>
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
          <Show when={localProps.marks}>
            <ArkSlider.MarkerGroup class={styles.markerGroup}>
              <Index each={localProps.marks}>
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
