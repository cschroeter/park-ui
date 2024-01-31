import { Combobox as ArkCombobox } from '@ark-ui/react/combobox'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { combobox } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(combobox)

const Root = withProvider(styled(ArkCombobox.Root), 'root')
const ClearTrigger = withContext(styled(ArkCombobox.ClearTrigger), 'clearTrigger')
const Content = withContext(styled(ArkCombobox.Content), 'content')
const Control = withContext(styled(ArkCombobox.Control), 'control')
const Input = withContext(styled(ArkCombobox.Input), 'input')
const Item = withContext(styled(ArkCombobox.Item), 'item')
const ItemGroup = withContext(styled(ArkCombobox.ItemGroup), 'itemGroup')
const ItemGroupLabel = withContext(styled(ArkCombobox.ItemGroupLabel), 'itemGroupLabel')
const ItemIndicator = withContext(styled(ArkCombobox.ItemIndicator), 'itemIndicator')
const ItemText = withContext(styled(ArkCombobox.ItemText), 'itemText')
const Label = withContext(styled(ArkCombobox.Label), 'label')
const Positioner = withContext(styled(ArkCombobox.Positioner), 'positioner')
const Trigger = withContext(styled(ArkCombobox.Trigger), 'trigger')

export {
  ClearTrigger,
  Content,
  Control,
  Input,
  Item,
  ItemGroup,
  ItemGroupLabel,
  ItemIndicator,
  ItemText,
  Label,
  Positioner,
  Root,
  Trigger,
}

export interface ComboboxRootProps extends ComponentProps<typeof Root> {}
export interface ComboboxClearTriggerProps extends ComponentProps<typeof ClearTrigger> {}
export interface ComboboxContentProps extends ComponentProps<typeof Content> {}
export interface ComboboxControlProps extends ComponentProps<typeof Control> {}
export interface ComboboxInputProps extends ComponentProps<typeof Input> {}
export interface ComboboxItemProps extends ComponentProps<typeof Item> {}
export interface ComboboxItemGroupProps extends ComponentProps<typeof ItemGroup> {}
export interface ComboboxItemGroupLabelProps extends ComponentProps<typeof ItemGroupLabel> {}
export interface ComboboxItemIndicatorProps extends ComponentProps<typeof ItemIndicator> {}
export interface ComboboxItemTextProps extends ComponentProps<typeof ItemText> {}
export interface ComboboxLabelProps extends ComponentProps<typeof Label> {}
export interface ComboboxPositionerProps extends ComponentProps<typeof Positioner> {}
export interface ComboboxTriggerProps extends ComponentProps<typeof Trigger> {}
