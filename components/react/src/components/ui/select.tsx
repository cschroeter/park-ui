'use client'
import { ark } from '@ark-ui/react/factory'
import { Select } from '@ark-ui/react/select'
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'
import { createStyleContext } from 'styled-system/jsx'
import { type SelectVariantProps, select } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'

const { withProvider, withContext } = createStyleContext(select)

export type RootProps = HTMLStyledProps<'div'> & SelectVariantProps

export const Root = withProvider(Select.Root, 'root', {
  defaultProps: { positioning: { sameWidth: true } },
}) as Select.RootComponent<RootProps>

export const RootProvider = withProvider(
  Select.RootProvider,
  'root',
) as Select.RootProviderComponent<RootProps>

export const ClearTrigger = withContext(Select.ClearTrigger, 'clearTrigger')
export const Content = withContext(Select.Content, 'content')
export const Control = withContext(Select.Control, 'control')
export const IndicatorGroup = withContext(ark.div, 'indicatorGroup')
export const Item = withContext(Select.Item, 'item')
export const ItemGroup = withContext(Select.ItemGroup, 'itemGroup')
export const ItemGroupLabel = withContext(Select.ItemGroupLabel, 'itemGroupLabel')
export const ItemText = withContext(Select.ItemText, 'itemText')
export const Label = withContext(Select.Label, 'label')
export const List = withContext(Select.List, 'list')
export const Positioner = withContext(Select.Positioner, 'positioner')
export const Trigger = withContext(Select.Trigger, 'trigger')
export const ValueText = withContext(Select.ValueText, 'valueText')
export const Indicator = withContext(Select.Indicator, 'indicator', {
  defaultProps: { children: <ChevronsUpDownIcon /> },
})
export const ItemIndicator = withContext(Select.ItemIndicator, 'itemIndicator', {
  defaultProps: { children: <CheckIcon /> },
})
export const HiddenSelect = Select.HiddenSelect

export const Context = Select.Context
export const ItemContext = Select.ItemContext
