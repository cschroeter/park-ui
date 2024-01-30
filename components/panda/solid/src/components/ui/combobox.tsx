import { Combobox as ArkCombobox } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { combobox } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(combobox)

export const ComboboxRoot = withProvider(styled(ArkCombobox.Root), 'root')
export const ComboboxClearTrigger = withContext(styled(ArkCombobox.ClearTrigger), 'clearTrigger')
export const ComboboxContent = withContext(styled(ArkCombobox.Content), 'content')
export const ComboboxControl = withContext(styled(ArkCombobox.Control), 'control')
export const ComboboxInput = withContext(styled(ArkCombobox.Input), 'input')
export const ComboboxItem = withContext(styled(ArkCombobox.Item), 'item')
export const ComboboxItemGroup = withContext(styled(ArkCombobox.ItemGroup), 'itemGroup')
export const ComboboxItemGroupLabel = withContext(
  styled(ArkCombobox.ItemGroupLabel),
  'itemGroupLabel',
)
export const ComboboxItemIndicator = withContext(styled(ArkCombobox.ItemIndicator), 'itemIndicator')
export const ComboboxItemText = withContext(styled(ArkCombobox.ItemText), 'itemText')
export const ComboboxLabel = withContext(styled(ArkCombobox.Label), 'label')
export const ComboboxPositioner = withContext(styled(ArkCombobox.Positioner), 'positioner')
export const ComboboxTrigger = withContext(styled(ArkCombobox.Trigger), 'trigger')

export const Combobox = {
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
}

export interface ComboboxRootProps extends ComponentProps<typeof ComboboxRoot> {}
export interface ComboboxClearTriggerProps extends ComponentProps<typeof ComboboxClearTrigger> {}
export interface ComboboxContentProps extends ComponentProps<typeof ComboboxContent> {}
export interface ComboboxControlProps extends ComponentProps<typeof ComboboxControl> {}
export interface ComboboxInputProps extends ComponentProps<typeof ComboboxInput> {}
export interface ComboboxItemProps extends ComponentProps<typeof ComboboxItem> {}
export interface ComboboxItemGroupProps extends ComponentProps<typeof ComboboxItemGroup> {}
export interface ComboboxItemGroupLabelProps
  extends ComponentProps<typeof ComboboxItemGroupLabel> {}
export interface ComboboxItemIndicatorProps extends ComponentProps<typeof ComboboxItemIndicator> {}
export interface ComboboxItemTextProps extends ComponentProps<typeof ComboboxItemText> {}
export interface ComboboxLabelProps extends ComponentProps<typeof ComboboxLabel> {}
export interface ComboboxPositionerProps extends ComponentProps<typeof ComboboxPositioner> {}
export interface ComboboxTriggerProps extends ComponentProps<typeof ComboboxTrigger> {}
