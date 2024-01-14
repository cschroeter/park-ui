import {
  Checkbox as ArkCheckbox,
  type CheckboxProps as ArkCheckboxProps,
} from '@ark-ui/react/checkbox'
import { forwardRef, type ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export interface CheckboxProps extends ArkCheckboxProps, CheckboxVariantProps {
  children?: ReactNode
}

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>((props, ref) => {
  const { className, size, children, ...rootProps } = props
  const { root, control, label } = styles({ size })

  return (
    <ArkCheckbox.Root ref={ref} className={root({ className })} {...rootProps}>
      {(state) => (
        <>
          <ArkCheckbox.Control className={control()}>
            {state.isChecked && <CheckIcon />}
            {state.isIndeterminate && <MinusIcon />}
          </ArkCheckbox.Control>
          {children && <ArkCheckbox.Label className={label()}>{children}</ArkCheckbox.Label>}
        </>
      )}
    </ArkCheckbox.Root>
  )
})

Checkbox.displayName = 'Checkbox'

type CheckboxVariantProps = VariantProps<typeof styles>

const styles = tv({
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
})

const CheckIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <path
      d="M2.91675 7H11.0834"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
