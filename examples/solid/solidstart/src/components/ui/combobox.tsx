import * as Ark from '@ark-ui/solid/combobox'
import { styled } from 'styled-system/jsx'
import { combobox, type ComboboxVariantProps } from 'styled-system/recipes'

import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(combobox)

export * from '@ark-ui/solid/combobox'
export type ComboboxProps = Ark.ComboboxProps & ComboboxVariantProps

const ComboboxRoot = withProvider(styled(Ark.Combobox), 'root')
export const ComboboxClearTrigger = withContext(styled(Ark.ComboboxClearTrigger), 'clearTrigger')
export const ComboboxContent = withContext(styled(Ark.ComboboxContent), 'content')
export const ComboboxControl = withContext(styled(Ark.ComboboxControl), 'control')
export const ComboboxInput = withContext(styled(Ark.ComboboxInput), 'input')
export const ComboboxLabel = withContext(styled(Ark.ComboboxLabel), 'label')
export const ComboboxOption = withContext(styled(Ark.ComboboxOption), 'option')
export const ComboboxOptionGroup = withContext(styled(Ark.ComboboxOptionGroup), 'optionGroup')
export const ComboboxOptionGroupLabel = withContext(styled(Ark.ComboboxLabel), 'optionGroupLabel')
export const ComboboxPositioner = withContext(styled(Ark.ComboboxPositioner), 'positioner')
export const ComboboxTrigger = withContext(styled(Ark.ComboboxTrigger), 'trigger')

export const Combobox = Object.assign(ComboboxRoot, {
  Root: ComboboxRoot,
  ClearTrigger: ComboboxClearTrigger,
  Content: ComboboxContent,
  Control: ComboboxControl,
  Input: ComboboxInput,
  Label: ComboboxLabel,
  Option: ComboboxOption,
  OptionGroup: ComboboxOptionGroup,
  OptionGroupLabel: ComboboxOptionGroupLabel,
  Positioner: ComboboxPositioner,
  Trigger: ComboboxTrigger,
})
