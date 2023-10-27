import * as Ark from '@ark-ui/react/combobox'
import { createStyleContext } from '~/lib/create-style-context'
import { comboboxStyles } from './recipe'
export * from '@ark-ui/react/combobox'

export type ComboboxProps = React.ComponentProps<typeof Combobox>

const { withProvider, withContext } = createStyleContext(comboboxStyles)
const ComboboxRoot = withProvider(Ark.Combobox.Root, 'root')
export const ComboboxClearTrigger = withContext(Ark.Combobox.ClearTrigger, 'clearTrigger')
export const ComboboxContent = withContext(Ark.Combobox.Content, 'content')
export const ComboboxControl = withContext(Ark.Combobox.Control, 'control')
export const ComboboxInput = withContext(Ark.Combobox.Input, 'input')
export const ComboboxItem = withContext(Ark.Combobox.Item, 'item')
export const ComboboxItemGroup = withContext(Ark.Combobox.ItemGroup, 'itemGroup')
export const ComboboxItemGroupLabel = withContext(Ark.Combobox.ItemGroupLabel, 'itemGroupLabel')
export const ComboboxItemIndicator = withContext(Ark.Combobox.ItemIndicator, 'itemIndicator')
export const ComboboxItemText = withContext(Ark.Combobox.ItemText, 'itemText')
export const ComboboxLabel = withContext(Ark.Combobox.Label, 'label')
export const ComboboxPositioner = withContext(Ark.Combobox.Positioner, 'positioner')
export const ComboboxTrigger = withContext(Ark.Combobox.Trigger, 'trigger')

export const Combobox = Object.assign(ComboboxRoot, {
  Root: ComboboxRoot,
  ClearTrigger: ComboboxClearTrigger,
  Content: ComboboxContent,
  Control: ComboboxControl,
  Input: ComboboxInput,
  Item: ComboboxItem,
  ItemGroup: ComboboxItemGroup,
  ItemGroupLabel: ComboboxItemGroupLabel,
  ItemIndicator: ComboboxItemIndicator,
  ItemText: ComboboxItemText,
  Label: ComboboxLabel,
  Positioner: ComboboxPositioner,
  Trigger: ComboboxTrigger,
})
