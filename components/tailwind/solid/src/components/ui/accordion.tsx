import { Accordion as ArkAccordion } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
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
})
const { withProvider, withContext } = createStyleContext(styles)

export const AccordionRoot = withProvider(ArkAccordion.Root, 'root')
export const AccordionItem = withContext(ArkAccordion.Item, 'item')
export const AccordionItemContent = withContext(ArkAccordion.ItemContent, 'itemContent')
export const AccordionItemIndicator = withContext(ArkAccordion.ItemIndicator, 'itemIndicator')
export const AccordionItemTrigger = withContext(ArkAccordion.ItemTrigger, 'itemTrigger')

export const Accordion = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Item: AccordionItem,
  ItemContent: AccordionItemContent,
  ItemIndicator: AccordionItemIndicator,
  ItemTrigger: AccordionItemTrigger,
})
