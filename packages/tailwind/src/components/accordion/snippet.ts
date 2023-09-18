import * as Ark from '@ark-ui/react/accordion'
import { createStyled } from '../../styled'
import { accordionStyles } from './recipe'

const { styled, styledRoot } = createStyled(accordionStyles)
export * from '@ark-ui/react/accordion'

export type AccordionProps = React.ComponentProps<typeof Accordion>
const AccordionRoot = styledRoot(Ark.Accordion.Root, 'root')

export const AccordionContent = styled(Ark.Accordion.Content, 'content')

export const AccordionItem = styled(Ark.Accordion.Item, 'item')

export const AccordionTrigger = styled(Ark.Accordion.Trigger, 'trigger')

export const Accordion = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Content: AccordionContent,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
})
