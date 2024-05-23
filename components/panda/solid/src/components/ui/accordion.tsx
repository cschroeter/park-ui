import { Accordion, type Assign } from '@ark-ui/solid'
import { type AccordionVariantProps, accordion } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(accordion)

export interface RootProps
  extends Assign<JsxStyleProps, Accordion.RootProps>,
    AccordionVariantProps {}
export const Root = withProvider<RootProps>(Accordion.Root, 'root')

export const ItemContent = withContext<Assign<JsxStyleProps, Accordion.ItemContentProps>>(
  Accordion.ItemContent,
  'itemContent',
)

export const ItemIndicator = withContext<Assign<JsxStyleProps, Accordion.ItemIndicatorProps>>(
  Accordion.ItemIndicator,
  'itemIndicator',
)

export const Item = withContext<Assign<JsxStyleProps, Accordion.ItemProps>>(Accordion.Item, 'item')

export const ItemTrigger = withContext<Assign<JsxStyleProps, Accordion.ItemTriggerProps>>(
  Accordion.ItemTrigger,
  'itemTrigger',
)

export {
  AccordionContext as Context,
  AccordionItemContext as ItemContext,
  type AccordionContextProps as ContextProps,
  type AccordionItemContextProps as ItemContextProps,
} from '@ark-ui/solid'

export type {
  AccordionFocusChangeDetails as FocusChangeDetails,
  AccordionValueChangeDetails as ValueChangeDetails,
} from '@ark-ui/solid'
