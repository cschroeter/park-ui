'use client'
import { Menu } from '@ark-ui/react/menu'
import { CheckIcon, ChevronDownIcon } from 'lucide-react'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { menu } from 'styled-system/recipes'

const { withRootProvider, withContext } = createStyleContext(menu)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider(Menu.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true },
})
export const RootProvider = withRootProvider(Menu.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true },
})
export const Arrow = withContext(Menu.Arrow, 'arrow')
export const ArrowTip = withContext(Menu.ArrowTip, 'arrowTip')
export const CheckboxItem = withContext(Menu.CheckboxItem, 'item')
export const Content = withContext(Menu.Content, 'content')
export const ContextTrigger = withContext(Menu.ContextTrigger, 'contextTrigger')
export const Indicator = withContext(Menu.Indicator, 'indicator', {
  defaultProps: { children: <ChevronDownIcon /> },
})
export const Item = withContext(Menu.Item, 'item')
export const ItemGroup = withContext(Menu.ItemGroup, 'itemGroup')
export const ItemGroupLabel = withContext(Menu.ItemGroupLabel, 'itemGroupLabel')
export const ItemIndicator = withContext(Menu.ItemIndicator, 'itemIndicator', {
  defaultProps: { children: <CheckIcon strokeWidth="2.5px" /> },
})
export const ItemText = withContext(Menu.ItemText, 'itemText')
export const Positioner = withContext(Menu.Positioner, 'positioner')
export const RadioItem = withContext(Menu.RadioItem, 'item')
export const RadioItemGroup = withContext(Menu.RadioItemGroup, 'itemGroup')
export const Separator = withContext(Menu.Separator, 'separator')
export const Trigger = withContext(Menu.Trigger, 'trigger')
export const TriggerItem = withContext(Menu.TriggerItem, 'item')

export { MenuContext as Context } from '@ark-ui/react/menu'
