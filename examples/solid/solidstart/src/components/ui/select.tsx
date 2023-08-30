import * as Ark from '@ark-ui/solid/select'
import { styled } from 'styled-system/jsx'
import { select, type SelectVariantProps } from 'styled-system/recipes'

import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(select)

export * from '@ark-ui/solid/select'
export type SelectProps = Ark.SelectProps & SelectVariantProps

const SelectRoot = withProvider(styled(Ark.Select), 'root')
export const SelectContent = withContext(styled(Ark.SelectContent), 'content')
export const SelectLabel = withContext(styled(Ark.SelectLabel), 'label')
export const SelectOption = withContext(styled(Ark.SelectOption), 'option')
export const SelectOptionGroup = withContext(styled(Ark.SelectOptionGroup), 'optionGroup')
export const SelectOptionGroupLabel = withContext(
  styled(Ark.SelectOptionGroupLabel),
  'optionGroupLabel',
)
export const SelectPositioner = withContext(styled(Ark.SelectPositioner), 'positioner')
export const SelectTrigger = withContext(styled(Ark.SelectTrigger), 'trigger')

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
