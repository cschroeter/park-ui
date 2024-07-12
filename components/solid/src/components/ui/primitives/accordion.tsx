import { Accordion, type Assign } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type AccordionVariantProps, accordion } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(accordion)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Accordion.RootProviderProps>, AccordionVariantProps>
>(Accordion.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Accordion.RootProps>, AccordionVariantProps>
>(Accordion.Root, 'root')

export const ItemContent = withContext<Assign<HTMLStyledProps<'div'>, Accordion.ItemContentProps>>(
  Accordion.ItemContent,
  'itemContent',
)

export const ItemIndicator = withContext<
  Assign<HTMLStyledProps<'div'>, Accordion.ItemIndicatorProps>
>(Accordion.ItemIndicator, 'itemIndicator')

export const Item = withContext<Assign<HTMLStyledProps<'div'>, Accordion.ItemProps>>(
  Accordion.Item,
  'item',
)

export const ItemTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, Accordion.ItemTriggerProps>
>(Accordion.ItemTrigger, 'itemTrigger')

export { AccordionContext as Context, AccordionItemContext as ItemContext } from '@ark-ui/solid'

export type {
  AccordionFocusChangeDetails as FocusChangeDetails,
  AccordionValueChangeDetails as ValueChangeDetails,
} from '@ark-ui/solid'
