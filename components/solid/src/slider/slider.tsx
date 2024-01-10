import { Slider as ArkSlider, type SliderProps as ArkSliderProps } from '@ark-ui/solid'
import { Index, Show, children, splitProps, type JSX } from 'solid-js'
import { slider, type SliderVariantProps } from 'styled-system/recipes'
import type { Assign, HTMLStyledProps } from 'styled-system/types'

export interface SliderProps
  extends Assign<HTMLStyledProps<'div'>, ArkSliderProps>,
    SliderVariantProps {
  children?: JSX.Element
  marks?: {
    value: number
    label?: JSX.Element
  }[]
}

export const Slider = (props: SliderProps) => {
  const [variantProps, localProps] = slider.splitVariantProps(props)
  const [local, rootProps] = splitProps(localProps, ['children'])
  const getChildren = children(() => local.children)
  const styles = slider(variantProps)

  return (
    <ArkSlider.Root class={styles.root} {...rootProps}>
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
