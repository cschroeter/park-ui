'use client'
import { Select } from '@ark-ui/react/select'
import { type ComponentProps, createStyleContext } from 'styled-system/jsx'
import { type SelectVariantProps, select } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(select)

export type RootProps = ComponentProps<typeof Root>

export const Root = withProvider(Select.Root, 'root', {
  // @ts-expect-error
  defaultProps: { positioning: { sameWidth: true } },
}) as Select.RootComponent<SelectVariantProps>

export const RootProvider = withProvider(Select.RootProvider, 'root', {
  // @ts-expect-error
  defaultProps: { positioning: { sameWidth: true } },
}) as Select.RootProviderComponent<SelectVariantProps>

export const ClearTrigger = withContext(Select.ClearTrigger, 'clearTrigger')
export const Content = withContext(Select.Content, 'content')
export const Control = withContext(Select.Control, 'control')
export const Indicator = withContext(Select.Indicator, 'indicator')
export const Item = withContext(Select.Item, 'item')
export const ItemGroup = withContext(Select.ItemGroup, 'itemGroup')
export const ItemGroupLabel = withContext(Select.ItemGroupLabel, 'itemGroupLabel')
export const ItemIndicator = withContext(Select.ItemIndicator, 'itemIndicator')
export const ItemText = withContext(Select.ItemText, 'itemText')
export const Label = withContext(Select.Label, 'label')
export const List = withContext(Select.List, 'list')
export const Positioner = withContext(Select.Positioner, 'positioner')
export const Trigger = withContext(Select.Trigger, 'trigger')
export const ValueText = withContext(Select.ValueText, 'valueText')

export { SelectContext as Context } from '@ark-ui/react/select'
