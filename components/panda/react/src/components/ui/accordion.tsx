import { Accordion } from '@ark-ui/react/accordion'
import { type AccordionVariantProps, accordion } from 'styled-system/recipes'
import type { Assign, JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(accordion)

export interface RootProps
  extends Assign<JsxStyleProps, Accordion.RootProps>,
    AccordionVariantProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(Accordion.Root, 'root')

export interface ItemProps extends Assign<JsxStyleProps, Accordion.ItemProps> {}
export const Item = withContext<HTMLDivElement, ItemProps>(Accordion.Item, 'item')

export interface ItemTriggerProps extends Assign<JsxStyleProps, Accordion.ItemTriggerProps> {}
export const ItemTrigger = withContext<HTMLDivElement, ItemTriggerProps>(
  Accordion.ItemTrigger,
  'itemTrigger',
)

export interface ItemIndicatorProps extends Assign<JsxStyleProps, Accordion.ItemIndicatorProps> {}
export const ItemIndicator = withContext<HTMLButtonElement, ItemIndicatorProps>(
  Accordion.ItemIndicator,
  'itemIndicator',
)

export interface ItemContentProps extends Assign<JsxStyleProps, Accordion.ItemContentProps> {}
export const ItemContent = withContext<HTMLDivElement, ItemContentProps>(
  Accordion.ItemContent,
  'itemContent',
)

export {
  AccordionContext as Context,
  type AccordionContextProps as ContextProps,
} from '@ark-ui/react/accordion'

export type {
  AccordionFocusChangeDetails as FocusChangeDetails,
  AccordionValueChangeDetails as ValueChangeDetails,
} from '@ark-ui/react/accordion'
