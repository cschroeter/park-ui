import * as Ark from '@ark-ui/solid/accordion'
import { styled } from 'styled-system/jsx'
import { accordion, type AccordionVariantProps } from 'styled-system/recipes'

import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(accordion)

export * from '@ark-ui/solid/accordion'
export type AccordionProps = Ark.AccordionProps & AccordionVariantProps

const AccordionRoot = withProvider(styled(Ark.Accordion), 'root')
export const AccordionContent = withContext(styled(Ark.AccordionContent), 'content')
export const AccordionItem = withContext(styled(Ark.AccordionItem), 'item')
export const AccordionTrigger = withContext(styled(Ark.AccordionTrigger), 'trigger')

export const Accordion = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Content: AccordionContent,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
})
