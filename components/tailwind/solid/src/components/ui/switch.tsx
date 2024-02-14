import { Switch as ArkSwitch, type SwitchRootProps } from '@ark-ui/solid'
import { type JSX, Show, children, splitProps } from 'solid-js'
import { type VariantProps, tv } from 'tailwind-variants'

export interface SwitchProps extends SwitchRootProps, SwitchVariantProps {
  children?: JSX.Element
}

export const Switch = (props: SwitchProps) => {
  const [variantProps, switchProps] = splitProps(props, ['size', 'class'])
  const [localProps, rootProps] = splitProps(switchProps, ['children'])
  const getChildren = children(() => localProps.children)
  const { root, control, label, thumb } = styles(variantProps)

  return (
    <ArkSwitch.Root class={root()} {...rootProps}>
      <ArkSwitch.Control class={control()}>
        <ArkSwitch.Thumb class={thumb()} />
      </ArkSwitch.Control>
      <Show when={getChildren()}>
        <ArkSwitch.Label class={label()}>{getChildren()}</ArkSwitch.Label>
      </Show>
    </ArkSwitch.Root>
  )
}

type SwitchVariantProps = VariantProps<typeof styles>

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
