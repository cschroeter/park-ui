import { Accordion } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    base: 'accordion',
    defaultVariants: { size: 'md' },
    slots: {
      root: 'accordion__root',
      item: 'accordion__item',
      itemTrigger: 'accordion__itemTrigger',
      itemContent: 'accordion__itemContent',
      itemIndicator: 'accordion__itemIndicator',
    },
    variants: {
      size: {
        md: {
          root: 'accordion__root--size_md',
          item: 'accordion__item--size_md',
          itemTrigger: 'accordion__itemTrigger--size_md',
          itemContent: 'accordion__itemContent--size_md',
          itemIndicator: 'accordion__itemIndicator--size_md',
        },
      },
    },
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(Accordion.Root, 'root')
export const Item = withContext(Accordion.Item, 'item')
export const ItemContent = withContext(Accordion.ItemContent, 'itemContent')
export const ItemIndicator = withContext(Accordion.ItemIndicator, 'itemIndicator')
export const ItemTrigger = withContext(Accordion.ItemTrigger, 'itemTrigger')

export type RootProps = ComponentProps<typeof Root>
export interface ItemProps extends ComponentProps<typeof Item> {}
export interface ItemContentProps extends ComponentProps<typeof ItemContent> {}
export interface ItemIndicatorProps extends ComponentProps<typeof ItemIndicator> {}
export interface ItemTriggerProps extends ComponentProps<typeof ItemTrigger> {}
