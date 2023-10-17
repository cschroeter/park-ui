import * as Ark from '@ark-ui/react/accordion'
import { createStyleContext } from '~/lib/create-style-context'
import { accordionStyles } from './recipe'
export * from '@ark-ui/react/accordion'

export type AccordionProps = React.ComponentProps<typeof Accordion>

const { withProvider, withContext } = createStyleContext(accordionStyles)

const AccordionRoot = withProvider(Ark.Accordion.Root, 'root')
export const AccordionContent = withContext(Ark.Accordion.Content, 'content')
export const AccordionItem = withContext(Ark.Accordion.Item, 'item')
export const AccordionTrigger = withContext(Ark.Accordion.Trigger, 'trigger')

export const Accordion = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Content: AccordionContent,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
})
