import { Checkbox as ArkCheckbox, type CheckboxRootProps } from '@ark-ui/react/checkbox'
import { forwardRef } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

export interface CheckboxProps extends CheckboxRootProps, CheckboxVariantProps {}

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>((props, ref) => {
  const { className, size, children, ...rootProps } = props
  const { root, control, label, indicator } = checkbox({ size })

  return (
    <ArkCheckbox.Root ref={ref} className={root({ className })} {...rootProps}>
      <ArkCheckbox.Control className={control()}>
        <ArkCheckbox.Indicator className={indicator()}>
          <CheckIcon />
        </ArkCheckbox.Indicator>
        <ArkCheckbox.Indicator indeterminate className={indicator()}>
          <MinusIcon />
        </ArkCheckbox.Indicator>
      </ArkCheckbox.Control>
      {children && <ArkCheckbox.Label className={label()}>{children}</ArkCheckbox.Label>}
      <ArkCheckbox.HiddenInput />
    </ArkCheckbox.Root>
  )
})

Checkbox.displayName = 'Checkbox'

type CheckboxVariantProps = VariantProps<typeof checkbox>

const checkbox = tv(
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const MinusIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Minus</title>
    <path
      d="M2.91675 7H11.0834"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
