import { Switch as ArkSwitch, type SwitchRootProps } from '@ark-ui/react/switch'
import { forwardRef } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

export interface SwitchProps extends SwitchRootProps, SwitchRecipeVariantProps {}

export const Switch = forwardRef<HTMLLabelElement, SwitchProps>((props, ref) => {
  const { children, className, size, ...rootProps } = props
  const { root, control, thumb, label } = styles({ size })

  return (
    <ArkSwitch.Root ref={ref} className={root({ className })} {...rootProps}>
      <ArkSwitch.Control className={control()}>
        <ArkSwitch.Thumb className={thumb()} />
      </ArkSwitch.Control>
      {children && <ArkSwitch.Label className={label()}>{children}</ArkSwitch.Label>}
      <ArkSwitch.HiddenInput />
    </ArkSwitch.Root>
  )
})

Switch.displayName = 'Switch'

type SwitchRecipeVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    base: 'switchRecipe',
    defaultVariants: { size: 'md' },
    slots: {
      root: 'switchRecipe__root',
      label: 'switchRecipe__label',
      control: 'switchRecipe__control',
      thumb: 'switchRecipe__thumb',
    },
    variants: {
      size: {
        sm: {
          root: 'switchRecipe__root--size_sm',
          label: 'switchRecipe__label--size_sm',
          control: 'switchRecipe__control--size_sm',
          thumb: 'switchRecipe__thumb--size_sm',
        },
        md: {
          root: 'switchRecipe__root--size_md',
          label: 'switchRecipe__label--size_md',
          control: 'switchRecipe__control--size_md',
          thumb: 'switchRecipe__thumb--size_md',
        },
        lg: {
          root: 'switchRecipe__root--size_lg',
          label: 'switchRecipe__label--size_lg',
          control: 'switchRecipe__control--size_lg',
          thumb: 'switchRecipe__thumb--size_lg',
        },
      },
    },
  },
  { twMerge: false },
)
