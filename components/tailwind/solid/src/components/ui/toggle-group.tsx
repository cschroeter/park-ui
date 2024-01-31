import { ToggleGroup } from '@ark-ui/solid'
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

const Root = withProvider(ToggleGroup.Root, 'root')
const Item = withContext(ToggleGroup.Item, 'item')

export { Item, Root }
