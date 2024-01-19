import { Slider as ArkSlider, type SliderProps as ArkSliderProps } from '@ark-ui/react/slider'
import { forwardRef, type ReactNode } from 'react'
import { css, cx } from 'styled-system/css'
import { slider, type SliderVariantProps } from 'styled-system/recipes'
import type { Assign, JsxStyleProps } from 'styled-system/types'

export interface SliderProps extends Assign<JsxStyleProps, ArkSliderProps>, SliderVariantProps {
  children?: ReactNode
  marks?: {
    value: number
    label?: ReactNode
  }[]
}

export const Slider = forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const [variantProps, sliderProps] = slider.splitVariantProps(props)
  const { children, ...rootProps } = sliderProps
  const styles = slider(variantProps)

  return (
    <ArkSlider.Root className={cx(styles.root, css(rootProps))} {...rootProps}>
      {(api) => (
        <>
          {children && <ArkSlider.Label className={styles.label}>{children}</ArkSlider.Label>}
          <ArkSlider.Control className={styles.control}>
            <ArkSlider.Track className={styles.track}>
              <ArkSlider.Range className={styles.range} />
            </ArkSlider.Track>
            {api.value.map((_, index) => (
              <ArkSlider.Thumb key={index} index={index} className={styles.thumb} />
            ))}
          </ArkSlider.Control>
          {props.marks && (
            <ArkSlider.MarkerGroup className={styles.markerGroup}>
              {props.marks.map((mark) => (
                <ArkSlider.Marker key={mark.value} value={mark.value} className={styles.marker}>
                  {mark.label}
                </ArkSlider.Marker>
              ))}
            </ArkSlider.MarkerGroup>
          )}
        </>
      )}
    </ArkSlider.Root>
  )
})

Slider.displayName = 'Slider'
