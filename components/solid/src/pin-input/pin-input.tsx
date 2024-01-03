import { ark, PinInput as ArkPinInput, type PinInputProps as ArkPinInputProps } from '@ark-ui/solid'
import { children, Index, Show, splitProps, type JSX } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { input, pinInput, type PinInputVariantProps } from 'styled-system/recipes'

export interface PinInputProps extends ArkPinInputProps, PinInputVariantProps {
  children?: JSX.Element
  length?: number
}

const Input = styled(ark.input, input)

export const PinInput = (props: PinInputProps) => {
  const [variantProps, localProps] = pinInput.splitVariantProps(props)
  const [local, rootProps] = splitProps(localProps, ['children', 'length'])
  const getChildren = children(() => local.children)
  const arr = Array.from({ length: local.length ?? 4 }, (_, index) => index)
  const styles = pinInput(variantProps)

  return (
    <ArkPinInput.Root class={styles.root} {...rootProps}>
      <Show when={getChildren()}>
        <ArkPinInput.Label class={styles.label}>{local.children}</ArkPinInput.Label>
      </Show>
      <ArkPinInput.Control class={styles.control}>
        <Index each={arr}>
          {(id) => (
            <ArkPinInput.Input class={styles.input} index={id()} asChild>
              <Input size="lg" width="0" textAlign="center" />
            </ArkPinInput.Input>
          )}
        </Index>
      </ArkPinInput.Control>
    </ArkPinInput.Root>
  )
}

PinInput.displayName = 'PinInput'
