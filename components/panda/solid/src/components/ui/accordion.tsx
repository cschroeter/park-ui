import { Accordion as ArkAccordion } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { accordion } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(accordion)

export const AccordionRoot = withProvider(styled(ArkAccordion.Root), 'root')
export const AccordionItem = withContext(styled(ArkAccordion.Item), 'item')
export const AccordionItemContent = withContext(styled(ArkAccordion.ItemContent), 'itemContent')
export const AccordionItemIndicator = withContext(
  styled(ArkAccordion.ItemIndicator),
  'itemIndicator',
)
export const AccordionItemTrigger = withContext(styled(ArkAccordion.ItemTrigger), 'itemTrigger')

export const Accordion = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Item: AccordionItem,
  ItemContent: AccordionItemContent,
  ItemIndicator: AccordionItemIndicator,
  ItemTrigger: AccordionItemTrigger,
})

export type AccordionProps = typeof AccordionRoot
export type AccordionItemProps = typeof AccordionItem
export type AccordionItemContentProps = typeof AccordionItemContent
export type AccordionItemIndicatorProps = typeof AccordionItemIndicator
export type AccordionItemTriggerProps = typeof AccordionItemTrigger
