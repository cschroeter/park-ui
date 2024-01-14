import { ToggleGroup as ArkToggleGroup } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'toggleGroup',
  defaultVariants: { size: 'md', variant: 'outline' },
  slots: { root: 'toggleGroup__root', item: 'toggleGroup__item' },
  variants: {
    variant: {
      outline: {
        root: 'toggleGroup__root--variant_outline',
        item: 'toggleGroup__item--variant_outline',
      },
      ghost: { root: 'toggleGroup__root--variant_ghost', item: 'toggleGroup__item--variant_ghost' },
    },
    size: {
      sm: { root: 'toggleGroup__root--size_sm', item: 'toggleGroup__item--size_sm' },
      md: { root: 'toggleGroup__root--size_md', item: 'toggleGroup__item--size_md' },
      lg: { root: 'toggleGroup__root--size_lg', item: 'toggleGroup__item--size_lg' },
    },
  },
})
const { withProvider, withContext } = createStyleContext(styles)

export const ToggleGroupRoot = withProvider(ArkToggleGroup.Root, 'root')
export const ToggleGroupItem = withContext(ArkToggleGroup.Item, 'item')

export const ToggleGroup = Object.assign(ToggleGroupRoot, {
  Root: ToggleGroupRoot,
  Item: ToggleGroupItem,
})
