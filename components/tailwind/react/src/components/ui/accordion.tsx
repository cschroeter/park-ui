import { Accordion as ArkAccordion } from '@ark-ui/react/accordion'
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

const Accordion = withProvider(ArkAccordion.Root, 'root')
const AccordionItem = withContext(ArkAccordion.Item, 'item')
const AccordionItemContent = withContext(ArkAccordion.ItemContent, 'itemContent')
const AccordionItemIndicator = withContext(ArkAccordion.ItemIndicator, 'itemIndicator')
const AccordionItemTrigger = withContext(ArkAccordion.ItemTrigger, 'itemTrigger')

const Root = Accordion
const Item = AccordionItem
const ItemContent = AccordionItemContent
const ItemIndicator = AccordionItemIndicator
const ItemTrigger = AccordionItemTrigger

export {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemIndicator,
  AccordionItemTrigger,
  Item,
  ItemContent,
  ItemIndicator,
  ItemTrigger,
  Root,
}
