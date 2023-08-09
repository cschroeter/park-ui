import * as Ark from '@ark-ui/react/combobox'
import { styled } from 'styled-system/jsx'
import { combobox, type ComboboxVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

export * from '@ark-ui/react/combobox'

const { withProvider, withContext } = createStyleContext(combobox)

export type ComboboxProps = Ark.ComboboxProps & ComboboxVariantProps

const ComboboxRoot = withProvider(styled(Ark.Combobox.Root), 'root')
const ComboboxClearTrigger = withContext(styled(Ark.Combobox.ClearTrigger), 'clearTrigger')
const ComboboxContent = withContext(styled(Ark.Combobox.Content), 'content')
const ComboboxControl = withContext(styled(Ark.Combobox.Control), 'control')
const ComboboxInput = withContext(styled(Ark.Combobox.Input), 'input')
const ComboboxLabel = withContext(styled(Ark.Combobox.Label), 'label')
const ComboboxOption = withContext(styled(Ark.Combobox.Option), 'option')
const ComboboxOptionGroup = withContext(styled(Ark.Combobox.OptionGroup), 'optionGroup')
const ComboboxOptionGroupLabel = withContext(
  styled(Ark.Combobox.OptionGroupLabel),
  'optionGroupLabel',
)
const ComboboxPositioner = withContext(styled(Ark.Combobox.Positioner), 'positioner')
const ComboboxTrigger = withContext(styled(Ark.Combobox.Trigger), 'trigger')

const Combobox = Object.assign(ComboboxRoot, {
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

export {
  Combobox,
  ComboboxClearTrigger,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptionGroup,
  ComboboxOptionGroupLabel,
  ComboboxPositioner,
  ComboboxTrigger,
}
