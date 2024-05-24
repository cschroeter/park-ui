import { ToggleGroup } from '@ark-ui/react/toggle-group'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const toggleGroup = tv(
  {
    base: 'toggleGroup',
    defaultVariants: { size: 'md', variant: 'outline' },
    slots: { root: 'toggleGroup__root', item: 'toggleGroup__item' },
    variants: {
      variant: {
        outline: {
          root: 'toggleGroup__root--variant_outline',
          item: 'toggleGroup__item--variant_outline',
        },
        ghost: {
          root: 'toggleGroup__root--variant_ghost',
          item: 'toggleGroup__item--variant_ghost',
        },
      },
      size: {
        sm: { root: 'toggleGroup__root--size_sm', item: 'toggleGroup__item--size_sm' },
        md: { root: 'toggleGroup__root--size_md', item: 'toggleGroup__item--size_md' },
        lg: { root: 'toggleGroup__root--size_lg', item: 'toggleGroup__item--size_lg' },
      },
    },
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(toggleGroup)

export interface RootProps extends ToggleGroup.RootProps, VariantProps<typeof toggleGroup> {}
export const Root = withProvider<HTMLDivElement, RootProps>(ToggleGroup.Root, 'root')

export const Item = withContext<HTMLButtonElement, ToggleGroup.ItemProps>(ToggleGroup.Item, 'item')

export {
  ToggleGroupContext as Context,
  type ToggleGroupContextProps as ContextProps,
} from '@ark-ui/react/toggle-group'
