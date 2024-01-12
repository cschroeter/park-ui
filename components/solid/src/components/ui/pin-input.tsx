import { PinInput as ArkPinInput, type PinInputProps as ArkPinInputProps } from '@ark-ui/solid'
import { Index, Show, children, splitProps, type JSX } from 'solid-js'
import { css, cx } from 'styled-system/css'
import { splitCssProps } from 'styled-system/jsx'
import { pinInput, type PinInputVariantProps } from 'styled-system/recipes'
import type { Assign, HTMLStyledProps } from 'styled-system/types'
import { Input } from '~/components/ui/input'

export interface PinInputProps
  extends Assign<ArkPinInputProps, HTMLStyledProps<'div'>>,
    PinInputVariantProps {
  children?: JSX.Element
  /**
   * The number of inputs to render.
   * @default 4
   */
  length?: number
}

export const PinInput = (props: PinInputProps) => {
  const [localProps, restProps] = splitProps(props, ['children', 'length'])
  const [variantProps] = pinInput.splitVariantProps(props)
  const [cssProps, rootProps] = splitCssProps(restProps)
  const getChildren = children(() => localProps.children)
  const styles = pinInput(variantProps)

  return (
    <ArkPinInput.Root class={cx(styles.root, css(cssProps))} {...rootProps}>
      <Show when={getChildren()}>
        <ArkPinInput.Label class={styles.label}>{getChildren()}</ArkPinInput.Label>
      </Show>
      <ArkPinInput.Control class={styles.control}>
        <Index each={Array.from({ length: localProps.length ?? 4 }, (_, index) => index)}>
          {(index) => (
            <ArkPinInput.Input class={styles.input} index={index()} asChild>
              {/* Attention: this only works with static css for inputs */}
              <Input size={variantProps.size} />
            </ArkPinInput.Input>
          )}
        </Index>
      </ArkPinInput.Control>
    </ArkPinInput.Root>
  )
}

PinInput.displayName = 'PinInput'
