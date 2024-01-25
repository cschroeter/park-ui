import { Accordion as ArkAccordion } from '@ark-ui/react/accordion'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
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

export interface AccordionProps extends ComponentProps<typeof Accordion> {}
export interface AccordionItemProps extends ComponentProps<typeof AccordionItem> {}
export interface AccordionItemContentProps extends ComponentProps<typeof AccordionItemContent> {}
export interface AccordionItemIndicatorProps
  extends ComponentProps<typeof AccordionItemIndicator> {}
export interface AccordionItemTriggerProps extends ComponentProps<typeof AccordionItemTrigger> {}
