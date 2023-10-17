import * as Ark from '@ark-ui/react/select'
import { createStyleContext } from '~/lib/create-style-context'
import { selectStyles } from './recipe'
export * from '@ark-ui/react/select'

export type SelectProps = React.ComponentProps<typeof Select>

const { withProvider, withContext } = createStyleContext(selectStyles)

const SelectRoot = withProvider(Ark.Select.Root, 'root')
export const SelectContent = withContext(Ark.Select.Content, 'content')
export const SelectLabel = withContext(Ark.Select.Label, 'label')
export const SelectOption = withContext(Ark.Select.Option, 'option')
export const SelectOptionGroup = withContext(Ark.Select.OptionGroup, 'optionGroup')
export const SelectOptionGroupLabel = withContext(Ark.Select.OptionGroupLabel, 'optionGroupLabel')
export const SelectPositioner = withContext(Ark.Select.Positioner, 'positioner')
export const SelectTrigger = withContext(Ark.Select.Trigger, 'trigger')

export const Select = Object.assign(SelectRoot, {
  Root: SelectRoot,
  Content: SelectContent,
  Label: SelectLabel,
  Option: SelectOption,
  OptionGroup: SelectOptionGroup,
  OptionGroupLabel: SelectOptionGroupLabel,
  Positioner: SelectPositioner,
  Trigger: SelectTrigger,
})
