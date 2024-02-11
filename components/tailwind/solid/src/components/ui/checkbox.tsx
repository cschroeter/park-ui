import { Checkbox as ArkCheckbox, type CheckboxRootProps as ArkCheckboxProps } from '@ark-ui/solid'
import { type JSX, Show, children, splitProps } from 'solid-js'
import { type VariantProps, tv } from 'tailwind-variants'

export interface CheckboxProps extends ArkCheckboxProps, CheckboxVariantProps {
  children?: JSX.Element
}

export const Checkbox = (props: CheckboxProps) => {
  const [variantProps, avatarProps] = splitProps(props, ['size', 'class'])
  const [localProps, rootProps] = splitProps(avatarProps, ['children'])
  const { root, control, label } = styles(variantProps)
  const getChildren = children(() => localProps.children)

  return (
    <ArkCheckbox.Root class={root()} {...rootProps}>
      {(state) => (
        <>
          <ArkCheckbox.Control class={control()}>
            <Show when={state().isChecked}>
              <CheckIcon />
            </Show>
            <Show when={state().isIndeterminate}>
              <MinusIcon />
            </Show>
          </ArkCheckbox.Control>
          <Show when={getChildren()}>
            <ArkCheckbox.Label class={label()}>{getChildren()}</ArkCheckbox.Label>
          </Show>
        </>
      )}
    </ArkCheckbox.Root>
  )
}

type CheckboxVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    base: 'checkbox',
    defaultVariants: { size: 'md' },
    slots: {
      root: 'checkbox__root',
      label: 'checkbox__label',
      control: 'checkbox__control',
      indicator: 'checkbox__indicator',
    },
    variants: {
      size: {
        sm: {
          root: 'checkbox__root--size_sm',
          label: 'checkbox__label--size_sm',
          control: 'checkbox__control--size_sm',
          indicator: 'checkbox__indicator--size_sm',
        },
        md: {
          root: 'checkbox__root--size_md',
          label: 'checkbox__label--size_md',
          control: 'checkbox__control--size_md',
          indicator: 'checkbox__indicator--size_md',
        },
        lg: {
          root: 'checkbox__root--size_lg',
          label: 'checkbox__label--size_lg',
          control: 'checkbox__control--size_lg',
          indicator: 'checkbox__indicator--size_lg',
        },
      },
    },
  },
  { twMerge: false },
)

const CheckIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Check</title>
    <path
      d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

const MinusIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Minus</title>
    <path
      d="M2.91675 7H11.0834"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
