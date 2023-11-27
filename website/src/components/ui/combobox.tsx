import { Combobox as ArkCombobox } from '@ark-ui/react'
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

export type ComboboxProps = typeof ComboboxRoot
export type ComboboxClearTriggerProps = typeof ComboboxClearTrigger
export type ComboboxContentProps = typeof ComboboxContent
export type ComboboxControlProps = typeof ComboboxControl
export type ComboboxInputProps = typeof ComboboxInput
export type ComboboxItemProps = typeof ComboboxItem
export type ComboboxItemGroupProps = typeof ComboboxItemGroup
export type ComboboxItemGroupLabelProps = typeof ComboboxItemGroupLabel
export type ComboboxItemIndicatorProps = typeof ComboboxItemIndicator
export type ComboboxItemTextProps = typeof ComboboxItemText
export type ComboboxLabelProps = typeof ComboboxLabel
export type ComboboxPositionerProps = typeof ComboboxPositioner
export type ComboboxTriggerProps = typeof ComboboxTrigger
