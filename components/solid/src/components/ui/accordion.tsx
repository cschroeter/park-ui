import { Accordion } from '@ark-ui/solid/accordion'
import { ark } from '@ark-ui/solid/factory'
import { ChevronDownIcon } from 'lucide-solid'
import type { ComponentProps } from 'solid-js'
import { createStyleContext } from 'styled-system/jsx'
import { accordion } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(accordion)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(Accordion.Root, 'root')
export const RootProvider = withProvider(Accordion.RootProvider, 'root')
export const Item = withContext(Accordion.Item, 'item')
export const ItemContent = withContext(Accordion.ItemContent, 'itemContent')
export const ItemIndicator = withContext(Accordion.ItemIndicator, 'itemIndicator', {
  defaultProps: () => ({ children: <ChevronDownIcon /> }),
})
export const ItemTrigger = withContext(Accordion.ItemTrigger, 'itemTrigger')
export const ItemBody = withContext(ark.div, 'itemBody')

export { AccordionContext as Context } from '@ark-ui/solid/accordion'
