import * as Ark from '@ark-ui/react/select'
import { styled } from 'styled-system/jsx'
import { select, type SelectVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

export * from '@ark-ui/react/select'

const { withProvider, withContext } = createStyleContext(select)

export type SelectProps = Ark.SelectProps & SelectVariantProps

const SelectRoot = withProvider(styled(Ark.Select.Root), 'root')
const SelectContent = withContext(styled(Ark.Select.Content), 'content')
const SelectLabel = withContext(styled(Ark.Select.Label), 'label')
const SelectOption = withContext(styled(Ark.Select.Option), 'option')
const SelectOptionGroup = withContext(styled(Ark.Select.OptionGroup), 'optionGroup')
const SelectOptionGroupLabel = withContext(styled(Ark.Select.OptionGroupLabel), 'optionGroupLabel')
const SelectPositioner = withContext(styled(Ark.Select.Positioner), 'positioner')
const SelectTrigger = withContext(styled(Ark.Select.Trigger), 'trigger')

const Select = Object.assign(SelectRoot, {
  Root: SelectRoot,
  Content: SelectContent,
  Label: SelectLabel,
  Option: SelectOption,
  OptionGroup: SelectOptionGroup,
  OptionGroupLabel: SelectOptionGroupLabel,
  Positioner: SelectPositioner,
  Trigger: SelectTrigger,
})

export {
  Select,
  SelectContent,
  SelectLabel,
  SelectOption,
  SelectOptionGroup,
  SelectOptionGroupLabel,
  SelectPositioner,
  SelectTrigger,
}
