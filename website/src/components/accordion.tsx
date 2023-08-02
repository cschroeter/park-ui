import {
  Accordion as ArkAccordion,
  AccordionTrigger as ArkAccordionTrigger,
  type AccordionProps as ArkAccordionProps,
  type AccordionTriggerProps as ArkAccordionTriggerProps,
} from '@ark-ui/react/accordion'
import { styled } from 'styled-system/jsx'
import { accordion, type AccordionVariantProps } from 'styled-system/recipes'

export * from '@ark-ui/react/accordion'

export type AccordionProps = AccordionVariantProps & ArkAccordionProps
export const Accordion = styled(ArkAccordion, accordion)

export type AccordionTriggerProps = AccordionVariantProps & ArkAccordionTriggerProps
export const AccordionTrigger = styled(ArkAccordionTrigger, accordion)
