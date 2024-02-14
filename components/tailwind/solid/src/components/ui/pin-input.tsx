import { PinInput as ArkPinInput, type PinInputRootProps } from '@ark-ui/solid'
import { Index, type JSX, Show, children, splitProps } from 'solid-js'
import { type VariantProps, tv } from 'tailwind-variants'
import { Input } from '~/components/ui/input'

export interface PinInputProps extends PinInputRootProps, PinInputVariantProps {
  children?: JSX.Element
  /**
   * The number of inputs to render.
   * @default 4
   */
  length?: number
}

export const PinInput = (props: PinInputProps) => {
  const [variantProps, pinInputProps] = splitProps(props, ['size', 'class'])
  const [localProps, rootProps] = splitProps(pinInputProps, ['children', 'length'])
  const getChildren = children(() => localProps.children)
  const { root, control, label, input } = styles(variantProps)

  return (
    <ArkPinInput.Root class={root()} {...rootProps}>
      <Show when={getChildren()}>
        <ArkPinInput.Label class={label()}>{getChildren()}</ArkPinInput.Label>
      </Show>
      <ArkPinInput.Control class={control()}>
        <Index each={Array.from({ length: localProps.length ?? 4 }, (_, index) => index)}>
          {(index) => (
            <ArkPinInput.Input
              class={input()}
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

type PinInputVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    base: 'pinInput',
    defaultVariants: { size: 'md' },
    slots: {
      root: 'pinInput__root',
      label: 'pinInput__label',
      input: 'pinInput__input',
      control: 'pinInput__control',
    },
    variants: {
      size: {
        xs: {
          root: 'pinInput__root--size_xs',
          label: 'pinInput__label--size_xs',
          input: 'pinInput__input--size_xs',
          control: 'pinInput__control--size_xs',
        },
        sm: {
          root: 'pinInput__root--size_sm',
          label: 'pinInput__label--size_sm',
          input: 'pinInput__input--size_sm',
          control: 'pinInput__control--size_sm',
        },
        md: {
          root: 'pinInput__root--size_md',
          label: 'pinInput__label--size_md',
          input: 'pinInput__input--size_md',
          control: 'pinInput__control--size_md',
        },
        lg: {
          root: 'pinInput__root--size_lg',
          label: 'pinInput__label--size_lg',
          input: 'pinInput__input--size_lg',
          control: 'pinInput__control--size_lg',
        },
        xl: {
          root: 'pinInput__root--size_xl',
          label: 'pinInput__label--size_xl',
          input: 'pinInput__input--size_xl',
          control: 'pinInput__control--size_xl',
        },
        '2xl': {
          root: 'pinInput__root--size_2xl',
          label: 'pinInput__label--size_2xl',
          input: 'pinInput__input--size_2xl',
          control: 'pinInput__control--size_2xl',
        },
      },
    },
  },
  { twMerge: false },
)
