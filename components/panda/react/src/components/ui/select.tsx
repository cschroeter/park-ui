import { Select as ArkSelect } from '@ark-ui/react/select'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { select } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(select)

export const SelectRoot = withProvider(styled(ArkSelect.Root), 'root')
export const SelectClearTrigger = withContext(styled(ArkSelect.ClearTrigger), 'clearTrigger')
export const SelectContent = withContext(styled(ArkSelect.Content), 'content')
export const SelectControl = withContext(styled(ArkSelect.Control), 'control')
export const SelectIndicator = withContext(styled(ArkSelect.Indicator), 'indicator')
export const SelectItem = withContext(styled(ArkSelect.Item), 'item')
export const SelectItemGroup = withContext(styled(ArkSelect.ItemGroup), 'itemGroup')
export const SelectItemGroupLabel = withContext(styled(ArkSelect.ItemGroupLabel), 'itemGroupLabel')
export const SelectItemIndicator = withContext(styled(ArkSelect.ItemIndicator), 'itemIndicator')
export const SelectItemText = withContext(styled(ArkSelect.ItemText), 'itemText')
export const SelectLabel = withContext(styled(ArkSelect.Label), 'label')
export const SelectPositioner = withContext(styled(ArkSelect.Positioner), 'positioner')
export const SelectTrigger = withContext(styled(ArkSelect.Trigger), 'trigger')
export const SelectValueText = withContext(styled(ArkSelect.ValueText), 'valueText')

export const Select = {
  Root: SelectRoot,
  ClearTrigger: SelectClearTrigger,
  Content: SelectContent,
  Control: SelectControl,
  Indicator: SelectIndicator,
  Item: SelectItem,
  ItemGroup: SelectItemGroup,
  ItemGroupLabel: SelectItemGroupLabel,
  ItemIndicator: SelectItemIndicator,
  ItemText: SelectItemText,
  Label: SelectLabel,
  Positioner: SelectPositioner,
  Trigger: SelectTrigger,
  ValueText: SelectValueText,
}

export interface SelectRootProps extends ComponentProps<typeof SelectRoot> {}
export interface SelectClearTriggerProps extends ComponentProps<typeof SelectClearTrigger> {}
export interface SelectContentProps extends ComponentProps<typeof SelectContent> {}
export interface SelectControlProps extends ComponentProps<typeof SelectControl> {}
export interface SelectIndicatorProps extends ComponentProps<typeof SelectIndicator> {}
export interface SelectItemProps extends ComponentProps<typeof SelectItem> {}
export interface SelectItemGroupProps extends ComponentProps<typeof SelectItemGroup> {}
export interface SelectItemGroupLabelProps extends ComponentProps<typeof SelectItemGroupLabel> {}
export interface SelectItemIndicatorProps extends ComponentProps<typeof SelectItemIndicator> {}
export interface SelectItemTextProps extends ComponentProps<typeof SelectItemText> {}
export interface SelectLabelProps extends ComponentProps<typeof SelectLabel> {}
export interface SelectPositionerProps extends ComponentProps<typeof SelectPositioner> {}
export interface SelectTriggerProps extends ComponentProps<typeof SelectTrigger> {}
export interface SelectValueTextProps extends ComponentProps<typeof SelectValueText> {}
