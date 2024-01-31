import { Accordion as ArkAccordion } from '@ark-ui/react/accordion'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { accordion } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(accordion)

const Root = withProvider(styled(ArkAccordion.Root), 'root')
const Item = withContext(styled(ArkAccordion.Item), 'item')
const ItemContent = withContext(styled(ArkAccordion.ItemContent), 'itemContent')
const ItemIndicator = withContext(styled(ArkAccordion.ItemIndicator), 'itemIndicator')
const ItemTrigger = withContext(styled(ArkAccordion.ItemTrigger), 'itemTrigger')

export { Item, ItemContent, ItemIndicator, ItemTrigger, Root }

export interface AccordionRootProps extends ComponentProps<typeof Root> {}
export interface AccordionItemProps extends ComponentProps<typeof Item> {}
export interface AccordionItemContentProps extends ComponentProps<typeof ItemContent> {}
export interface AccordionItemIndicatorProps extends ComponentProps<typeof ItemIndicator> {}
export interface AccordionItemTriggerProps extends ComponentProps<typeof ItemTrigger> {}
