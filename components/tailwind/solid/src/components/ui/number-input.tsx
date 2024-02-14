import { NumberInput as ArkNumberInput, type NumberInputRootProps } from '@ark-ui/solid'
import { type JSX, Show, children, splitProps } from 'solid-js'
import { type VariantProps, tv } from 'tailwind-variants'

export interface NumberInputProps
  extends Omit<NumberInputRootProps, 'children'>,
    NumberInputVariantProps {
  children?: JSX.Element
}

export const NumberInput = (props: NumberInputProps) => {
  const [variantProps, numberInputProps] = splitProps(props, ['size', 'class'])
  const { root, control, label, input, incrementTrigger, decrementTrigger } = styles(variantProps)
  const getChildren = children(() => numberInputProps.children)

  return (
    <ArkNumberInput.Root class={root()} {...numberInputProps}>
      <Show when={getChildren()}>
        <ArkNumberInput.Label class={label()}>{getChildren()}</ArkNumberInput.Label>
      </Show>
      <ArkNumberInput.Control class={control()}>
        <ArkNumberInput.Input class={input()} />
        <ArkNumberInput.IncrementTrigger class={incrementTrigger()}>
          <ChevronUpIcon />
        </ArkNumberInput.IncrementTrigger>
        <ArkNumberInput.DecrementTrigger class={decrementTrigger()}>
          <ChevronDownIcon />
        </ArkNumberInput.DecrementTrigger>
      </ArkNumberInput.Control>
    </ArkNumberInput.Root>
  )
}

type NumberInputVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    base: 'numberInput',
    defaultVariants: { size: 'md' },
    slots: {
      root: 'numberInput__root',
      label: 'numberInput__label',
      input: 'numberInput__input',
      control: 'numberInput__control',
      incrementTrigger: 'numberInput__incrementTrigger',
      decrementTrigger: 'numberInput__decrementTrigger',
      scrubber: 'numberInput__scrubber',
    },
    variants: {
      size: {
        md: {
          root: 'numberInput__root--size_md',
          label: 'numberInput__label--size_md',
          input: 'numberInput__input--size_md',
          control: 'numberInput__control--size_md',
          incrementTrigger: 'numberInput__incrementTrigger--size_md',
          decrementTrigger: 'numberInput__decrementTrigger--size_md',
          scrubber: 'numberInput__scrubber--size_md',
        },
        lg: {
          root: 'numberInput__root--size_lg',
          label: 'numberInput__label--size_lg',
          input: 'numberInput__input--size_lg',
          control: 'numberInput__control--size_lg',
          incrementTrigger: 'numberInput__incrementTrigger--size_lg',
          decrementTrigger: 'numberInput__decrementTrigger--size_lg',
          scrubber: 'numberInput__scrubber--size_lg',
        },
        xl: {
          root: 'numberInput__root--size_xl',
          label: 'numberInput__label--size_xl',
          input: 'numberInput__input--size_xl',
          control: 'numberInput__control--size_xl',
          incrementTrigger: 'numberInput__incrementTrigger--size_xl',
          decrementTrigger: 'numberInput__decrementTrigger--size_xl',
          scrubber: 'numberInput__scrubber--size_xl',
        },
      },
    },
  },
  { twMerge: false },
)

const ChevronUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>Chevron Up</title>
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m18 15l-6-6l-6 6"
    />
  </svg>
)

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>Chevron Down</title>
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m6 9l6 6l6-6"
    />
  </svg>
)
