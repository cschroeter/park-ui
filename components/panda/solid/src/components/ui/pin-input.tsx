import { PinInput as ArkPinInput, type PinInputRootProps } from '@ark-ui/solid'
import { Index, Show, children, splitProps, type JSX } from 'solid-js'
import { css, cx } from 'styled-system/css'
import { splitCssProps } from 'styled-system/jsx'
import { pinInput, type PinInputVariantProps } from 'styled-system/recipes'
import type { Assign, JsxStyleProps } from 'styled-system/types'
import { Input } from '~/components/ui/input'

export interface PinInputProps
  extends Assign<JsxStyleProps, PinInputRootProps>,
    PinInputVariantProps {
  children?: JSX.Element
  /**
   * The number of inputs to render.
   * @default 4
   */
  length?: number
}

export const PinInput = (props: PinInputProps) => {
  const [variantProps, pinInputProps] = pinInput.splitVariantProps(props)
  const [cssProps, elementProps] = splitCssProps(pinInputProps)
  const [localProps, rootProps] = splitProps(elementProps, ['children', 'class', 'length'])
  const getChildren = children(() => localProps.children)
  const styles = pinInput(variantProps)

  return (
    // @ts-expect-error TODO cssProps is to complex to be typed
    <ArkPinInput.Root class={cx(styles.root, css(cssProps), localProps.class)} {...rootProps}>
      <Show when={getChildren()}>
        <ArkPinInput.Label class={styles.label}>{getChildren()}</ArkPinInput.Label>
      </Show>
      <ArkPinInput.Control class={styles.control}>
        <Index each={Array.from({ length: localProps.length ?? 4 }, (_, index) => index)}>
          {(index) => (
            <ArkPinInput.Input
              class={styles.input}
              index={index()}
              as={Input}
              size={variantProps.size}
            />
          )}
        </Index>
      </ArkPinInput.Control>
    </ArkPinInput.Root>
  )
}
