import { Switch as ArkSwitch } from '@ark-ui/react'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
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
})
const { withProvider, withContext } = createStyleContext(styles)

export const SwitchRoot = withProvider(ArkSwitch.Root, 'root')
export const SwitchControl = withContext(ArkSwitch.Control, 'control')
export const SwitchLabel = withContext(ArkSwitch.Label, 'label')
export const SwitchThumb = withContext(ArkSwitch.Thumb, 'thumb')

export const Switch = Object.assign(SwitchRoot, {
  Root: SwitchRoot,
  Control: SwitchControl,
  Label: SwitchLabel,
  Thumb: SwitchThumb,
})
