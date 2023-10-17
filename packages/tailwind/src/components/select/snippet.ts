import * as Ark from '@ark-ui/react/select'
import { createStyleContext } from '~/lib/create-style-context'
import { selectStyles } from './recipe'
export * from '@ark-ui/react/select'

export type SelectProps = React.ComponentProps<typeof Select>

const { withProvider, withContext } = createStyleContext(selectStyles)

const SelectRoot = withProvider(Ark.Select.Root, 'root')
export const SelectContent = withContext(Ark.Select.Content, 'content')
export const SelectLabel = withContext(Ark.Select.Label, 'label')
export const SelectItem = withContext(Ark.Select.Item, 'item')
export const SelectItemGroup = withContext(Ark.Select.ItemGroup, 'itemGroup')
export const SelectItemGroupLabel = withContext(Ark.Select.ItemGroupLabel, 'itemGroupLabel')
export const SelectPositioner = withContext(Ark.Select.Positioner, 'positioner')
export const SelectTrigger = withContext(Ark.Select.Trigger, 'trigger')

export const Select = Object.assign(SelectRoot, {
  Root: SelectRoot,
  Content: SelectContent,
  Label: SelectLabel,
  Item: SelectItem,
  ItemGroup: SelectItemGroup,
  ItemGroupLabel: SelectItemGroupLabel,
  Positioner: SelectPositioner,
  Trigger: SelectTrigger,
})
