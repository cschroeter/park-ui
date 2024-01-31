import { Select as ArkSelect } from '@ark-ui/react/select'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { select } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(select)

const Root = withProvider(styled(ArkSelect.Root), 'root')
const ClearTrigger = withContext(styled(ArkSelect.ClearTrigger), 'clearTrigger')
const Content = withContext(styled(ArkSelect.Content), 'content')
const Control = withContext(styled(ArkSelect.Control), 'control')
const Indicator = withContext(styled(ArkSelect.Indicator), 'indicator')
const Item = withContext(styled(ArkSelect.Item), 'item')
const ItemGroup = withContext(styled(ArkSelect.ItemGroup), 'itemGroup')
const ItemGroupLabel = withContext(styled(ArkSelect.ItemGroupLabel), 'itemGroupLabel')
const ItemIndicator = withContext(styled(ArkSelect.ItemIndicator), 'itemIndicator')
const ItemText = withContext(styled(ArkSelect.ItemText), 'itemText')
const Label = withContext(styled(ArkSelect.Label), 'label')
const Positioner = withContext(styled(ArkSelect.Positioner), 'positioner')
const Trigger = withContext(styled(ArkSelect.Trigger), 'trigger')
const ValueText = withContext(styled(ArkSelect.ValueText), 'valueText')

export {
  ClearTrigger,
  Content,
  Control,
  Indicator,
  Item,
  ItemGroup,
  ItemGroupLabel,
  ItemIndicator,
  ItemText,
  Label,
  Positioner,
  Root,
  Trigger,
  ValueText,
}

export interface SelectRootProps extends ComponentProps<typeof Root> {}
export interface SelectClearTriggerProps extends ComponentProps<typeof ClearTrigger> {}
export interface SelectContentProps extends ComponentProps<typeof Content> {}
export interface SelectControlProps extends ComponentProps<typeof Control> {}
export interface SelectIndicatorProps extends ComponentProps<typeof Indicator> {}
export interface SelectItemProps extends ComponentProps<typeof Item> {}
export interface SelectItemGroupProps extends ComponentProps<typeof ItemGroup> {}
export interface SelectItemGroupLabelProps extends ComponentProps<typeof ItemGroupLabel> {}
export interface SelectItemIndicatorProps extends ComponentProps<typeof ItemIndicator> {}
export interface SelectItemTextProps extends ComponentProps<typeof ItemText> {}
export interface SelectLabelProps extends ComponentProps<typeof Label> {}
export interface SelectPositionerProps extends ComponentProps<typeof Positioner> {}
export interface SelectTriggerProps extends ComponentProps<typeof Trigger> {}
export interface SelectValueTextProps extends ComponentProps<typeof ValueText> {}
