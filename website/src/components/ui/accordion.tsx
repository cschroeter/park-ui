import * as Ark from '@ark-ui/react/accordion'
import { styled } from 'styled-system/jsx'
import { accordion, type AccordionVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

export * from '@ark-ui/react/accordion'

const { withProvider, withContext } = createStyleContext(accordion)

export type AccordionProps = Ark.AccordionProps & AccordionVariantProps

const AccordionRoot = withProvider(styled(Ark.Accordion.Root), 'root')
const AccordionContent = withContext(styled(Ark.Accordion.Content), 'content')
const AccordionItem = withContext(styled(Ark.Accordion.Item), 'item')
const AccordionTrigger = withContext(styled(Ark.Accordion.Trigger), 'trigger')

const Accordion = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Content: AccordionContent,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
})

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
