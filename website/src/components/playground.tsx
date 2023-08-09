'use client'
import * as Ark from '@ark-ui/react/accordion'
import { styled } from 'styled-system/jsx'
import { accordion, type AccordionVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(accordion)

type AccordionProps = Ark.AccordionProps & AccordionVariantProps
const AccordionRoot = withProvider(styled(Ark.Accordion.Root), 'root')

const AccordionItem = withContext(styled(Ark.Accordion.Item), 'item')
const AccordionContent = withContext(styled(Ark.Accordion.Content), 'content')
const AccordionTrigger = withContext(styled(Ark.Accordion.Trigger), 'trigger')

const Accordion = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Item: AccordionItem,
  Content: AccordionContent,
  Trigger: AccordionTrigger,
})

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
export type { AccordionProps }
