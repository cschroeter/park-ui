'use client'
import { Accordion } from '@ark-ui/react/accordion'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { accordion } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(accordion)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(Accordion.Root, 'root')
export const RootProvider = withProvider(Accordion.RootProvider, 'root')
export const Item = withContext(Accordion.Item, 'item')
export const ItemContent = withContext(Accordion.ItemContent, 'itemContent')
export const ItemIndicator = withContext(Accordion.ItemIndicator, 'itemIndicator')
export const ItemTrigger = withContext(Accordion.ItemTrigger, 'itemTrigger')

export { AccordionContext as Context } from '@ark-ui/react/accordion'
