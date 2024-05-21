import { Accordion } from '@ark-ui/vue'
import { type AccordionVariantProps, accordion } from '../../../styled-system/recipes'
import type { Assign, JsxStyleProps } from '../../../styled-system/types'
import { createStyleContext } from '../../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(accordion)

export interface RootProps extends JsxStyleProps, Accordion.RootProps, AccordionVariantProps {}
export const Root = withProvider<RootProps>(Accordion.Root, 'root')

export interface ItemProps extends JsxStyleProps, Accordion.ItemProps {}
export const Item = withContext<ItemProps>(Accordion.Item, 'item')

export interface ItemTriggerProps extends JsxStyleProps, Accordion.ItemTriggerProps {}
export const ItemTrigger = withContext<ItemTriggerProps>(Accordion.ItemTrigger, 'itemTrigger')

export interface ItemIndicatorProps extends JsxStyleProps, Accordion.ItemIndicatorProps {}
export const ItemIndicator = withContext<ItemIndicatorProps>(
  Accordion.ItemIndicator,
  'itemIndicator',
)

export interface ItemContentProps extends JsxStyleProps, Accordion.ItemContentProps {}
export const ItemContent = withContext<ItemContentProps>(Accordion.ItemContent, 'itemContent')

export {
  AccordionContext as Context,
  type AccordionContextProps as ContextProps,
} from '@ark-ui/vue/accordion'

export type {
  AccordionFocusChangeDetails as FocusChangeDetails,
  AccordionValueChangeDetails as ValueChangeDetails,
} from '@ark-ui/vue/accordion'
