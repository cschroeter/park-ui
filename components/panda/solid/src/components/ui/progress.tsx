import { Progress as ArkProgress, type ProgressRootProps } from '@ark-ui/solid'
import { Show, children, splitProps, type JSX } from 'solid-js'
import { css, cx } from 'styled-system/css'
import { splitCssProps } from 'styled-system/jsx'
import { progress, type ProgressVariantProps } from 'styled-system/recipes'
import type { Assign, JsxStyleProps } from 'styled-system/types'

export interface ProgressProps
  extends Assign<JsxStyleProps, ProgressRootProps>,
    ProgressVariantProps {
  children?: JSX.Element
  /**
   * The type of progress to render.
   * @default linear
   */
  type?: 'linear' | 'circular'
}

export const Progress = (props: ProgressProps) => {
  const [variantProps, progressProps] = progress.splitVariantProps(props)
  const [cssProps, elementProps] = splitCssProps(progressProps)
  const [localProps, rootProps] = splitProps(elementProps, ['children', 'class', 'type'])
  const getChildren = children(() => localProps.children)
  const styles = progress(variantProps)

  return (
    <ArkProgress.Root class={cx(styles.root, css(cssProps), localProps.class)} {...rootProps}>
      <Show when={getChildren()}>
        <ArkProgress.Label class={styles.label}>{getChildren()}</ArkProgress.Label>
      </Show>
      <Show
        when={localProps.type === 'circular'}
        fallback={
          <ArkProgress.Track class={styles.track}>
            <ArkProgress.Range class={styles.range} />
          </ArkProgress.Track>
        }
      >
        <ArkProgress.Circle class={styles.circle}>
          <ArkProgress.CircleTrack class={styles.circleTrack} />
          <ArkProgress.CircleRange class={styles.circleRange} />
          <ArkProgress.ValueText class={styles.valueText} />
        </ArkProgress.Circle>
      </Show>
      <ArkProgress.ValueText class={styles.valueText} />
    </ArkProgress.Root>
  )
}
