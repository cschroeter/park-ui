import { Accordion as ArkAccordion } from '@ark-ui/react/accordion'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from './create-style-context'

const { withProvider, withContext } = createStyleContext('Accordion')

const Accordion = withProvider(chakra(ArkAccordion.Root), 'root')
const AccordionItem = withContext(chakra(ArkAccordion.Item), 'item')
const AccordionItemContent = withContext(chakra(ArkAccordion.ItemContent), 'itemContent')
const AccordionItemIndicator = withContext(chakra(ArkAccordion.ItemIndicator), 'itemIndicator')
const AccordionItemTrigger = withContext(chakra(ArkAccordion.ItemTrigger), 'itemTrigger')

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

export interface AccordionProps extends HTMLChakraProps<typeof Accordion> {}
export interface AccordionItemProps extends HTMLChakraProps<typeof AccordionItem> {}
export interface AccordionItemContentProps extends HTMLChakraProps<typeof AccordionItemContent> {}
export interface AccordionItemIndicatorProps
  extends HTMLChakraProps<typeof AccordionItemIndicator> {}
export interface AccordionItemTriggerProps extends HTMLChakraProps<typeof AccordionItemTrigger> {}
