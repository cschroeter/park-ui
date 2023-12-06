import { Accordion as ArkAccordion } from '@ark-ui/react'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { accordion } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(accordion)

const Accordion = withProvider(styled(ArkAccordion.Root), 'root')
const AccordionItem = withContext(styled(ArkAccordion.Item), 'item')
const AccordionItemContent = withContext(styled(ArkAccordion.ItemContent), 'itemContent')
const AccordionItemIndicator = withContext(styled(ArkAccordion.ItemIndicator), 'itemIndicator')
const AccordionItemTrigger = withContext(styled(ArkAccordion.ItemTrigger), 'itemTrigger')

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

export interface AccordionProps extends HTMLStyledProps<typeof Accordion> {}
export interface AccordionItemProps extends HTMLStyledProps<typeof AccordionItem> {}
export interface AccordionItemContentProps extends HTMLStyledProps<typeof AccordionItemContent> {}
export interface AccordionItemIndicatorProps
  extends HTMLStyledProps<typeof AccordionItemIndicator> {}
export interface AccordionItemTriggerProps extends HTMLStyledProps<typeof AccordionItemTrigger> {}
