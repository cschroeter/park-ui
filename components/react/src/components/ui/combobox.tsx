'use client'
import { Combobox } from '@ark-ui/react/combobox'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { type ComboboxVariantProps, combobox } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(combobox)

export type RootProps = ComponentProps<typeof Root>

export const Root = withProvider(Combobox.Root, 'root', {
  // @ts-expect-error
  defaultProps: { positioning: { sameWidth: true } },
}) as Combobox.RootComponent<ComboboxVariantProps>

export const RootProvider = withProvider(Combobox.RootProvider, 'root', {
  // @ts-expect-error
  defaultProps: { positioning: { sameWidth: true } },
}) as Combobox.RootProviderComponent<ComboboxVariantProps>

export const ClearTrigger = withContext(Combobox.ClearTrigger, 'clearTrigger')
export const Content = withContext(Combobox.Content, 'content')
export const Control = withContext(Combobox.Control, 'control')
export const Empty = withContext(Combobox.Empty, 'empty')
export const Input = withContext(Combobox.Input, 'input')
export const Item = withContext(Combobox.Item, 'item')
export const ItemGroup = withContext(Combobox.ItemGroup, 'itemGroup')
export const ItemGroupLabel = withContext(Combobox.ItemGroupLabel, 'itemGroupLabel')
export const ItemIndicator = withContext(Combobox.ItemIndicator, 'itemIndicator')
export const ItemText = withContext(Combobox.ItemText, 'itemText')
export const Label = withContext(Combobox.Label, 'label')
export const List = withContext(Combobox.List, 'list')
export const Positioner = withContext(Combobox.Positioner, 'positioner')
export const Trigger = withContext(Combobox.Trigger, 'trigger')

export { ComboboxContext as Context } from '@ark-ui/react/combobox'
