'use client'
import * as Ark from '@ark-ui/react/accordion'
import { accordion, type AccordionVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(accordion)

export type AccordionProps = Ark.AccordionProps & AccordionVariantProps
const AccordionRoot = withProvider(Ark.Accordion.Root, 'root')
const AccordionContent = withContext(Ark.Accordion.Content, 'content')
const AccordionItem = withContext(Ark.Accordion.Item, 'item')
const AccordionTrigger = withContext(Ark.Accordion.Trigger, 'trigger')

const Accordion = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Content: AccordionContent,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
})

export { Accordion, AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger }
