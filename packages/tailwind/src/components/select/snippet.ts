import * as Ark from '@ark-ui/react/select'
import { createStyleContext } from '~/lib/create-style-context'
import { selectStyles } from './recipe'
export * from '@ark-ui/react/select'

type SelectVariantProps = ReturnType<typeof selectStyles>
export type SelectProps<T extends Ark.CollectionItem> = Ark.SelectProps<T> & SelectVariantProps

const { withProvider, withContext } = createStyleContext(selectStyles)

const SelectRoot = withProvider(Ark.Select.Root, 'root')
export const SelectClearTrigger = withContext(Ark.Select.ClearTrigger, 'clearTrigger')
export const SelectContent = withContext(Ark.Select.Content, 'content')
export const SelectControl = withContext(Ark.Select.Control, 'control')
export const SelectItem = withContext(Ark.Select.Item, 'item')
export const SelectItemGroup = withContext(Ark.Select.ItemGroup, 'itemGroup')
export const SelectItemGroupLabel = withContext(Ark.Select.ItemGroupLabel, 'itemGroupLabel')
export const SelectItemIndicator = withContext(Ark.Select.ItemIndicator, 'itemIndicator')
export const SelectItemText = withContext(Ark.Select.ItemText, 'itemText')
export const SelectLabel = withContext(Ark.Select.Label, 'label')
export const SelectPositioner = withContext(Ark.Select.Positioner, 'positioner')
export const SelectTrigger = withContext(Ark.Select.Trigger, 'trigger')
export const SelectValueText = withContext(Ark.Select.ValueText, 'valueText')

export const Select = Object.assign(SelectRoot, {
  Root: SelectRoot,
  ClearTrigger: SelectClearTrigger,
  Content: SelectContent,
  Control: SelectControl,
  Item: SelectItem,
  ItemGroup: SelectItemGroup,
  ItemGroupLabel: SelectItemGroupLabel,
  ItemIndicator: SelectItemIndicator,
  ItemText: SelectItemText,
  Label: SelectLabel,
  Positioner: SelectPositioner,
  Trigger: SelectTrigger,
  ValueText: SelectValueText,
})
