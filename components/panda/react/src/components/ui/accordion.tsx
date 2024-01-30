import { Accordion as ArkAccordion } from '@ark-ui/react/accordion'
import type { ComponentProps } from 'react'
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

export const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
  ItemContent: AccordionItemContent,
  ItemIndicator: AccordionItemIndicator,
  ItemTrigger: AccordionItemTrigger,
}

export interface AccordionRootProps extends ComponentProps<typeof AccordionRoot> {}
export interface AccordionItemProps extends ComponentProps<typeof AccordionItem> {}
export interface AccordionItemContentProps extends ComponentProps<typeof AccordionItemContent> {}
export interface AccordionItemIndicatorProps
  extends ComponentProps<typeof AccordionItemIndicator> {}
export interface AccordionItemTriggerProps extends ComponentProps<typeof AccordionItemTrigger> {}
