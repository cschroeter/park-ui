import type { Assign } from '@ark-ui/react'
import { Select } from '@ark-ui/react/select'
import { type SelectVariantProps, select } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withRootProvider, withContext } = createStyleContext(select)

export interface RootProps
  extends Assign<JsxStyleProps, Select.RootProps<Select.CollectionItem>>,
    SelectVariantProps {}
export const Root = withRootProvider<RootProps>(Select.Root)

export interface ClearTriggerProps extends Assign<JsxStyleProps, Select.ClearTriggerProps> {}
export const ClearTrigger = withContext<HTMLButtonElement, ClearTriggerProps>(
  Select.ClearTrigger,
  'clearTrigger',
)

export interface ContentProps extends Assign<JsxStyleProps, Select.ContentProps> {}
export const Content = withContext<HTMLDivElement, ContentProps>(Select.Content, 'content')

export interface ControlProps extends Assign<JsxStyleProps, Select.ControlProps> {}
export const Control = withContext<HTMLDivElement, ControlProps>(Select.Control, 'control')

export interface IndicatorProps extends Assign<JsxStyleProps, Select.IndicatorProps> {}
export const Indicator = withContext<HTMLDivElement, IndicatorProps>(Select.Indicator, 'indicator')

export interface ItemGroupLabelProps extends Assign<JsxStyleProps, Select.ItemGroupLabelProps> {}
export const ItemGroupLabel = withContext<HTMLDivElement, ItemGroupLabelProps>(
  Select.ItemGroupLabel,
  'itemGroupLabel',
)

export interface ItemGroupProps extends Assign<JsxStyleProps, Select.ItemGroupProps> {}
export const ItemGroup = withContext<HTMLDivElement, ItemGroupProps>(Select.ItemGroup, 'itemGroup')

export interface ItemIndicatorProps extends Assign<JsxStyleProps, Select.ItemIndicatorProps> {}
export const ItemIndicator = withContext<HTMLDivElement, ItemIndicatorProps>(
  Select.ItemIndicator,
  'itemIndicator',
)

export interface ItemProps extends Assign<JsxStyleProps, Select.ItemProps> {}
export const Item = withContext<HTMLDivElement, ItemProps>(Select.Item, 'item')

export interface ItemTextProps extends Assign<JsxStyleProps, Select.ItemTextProps> {}
export const ItemText = withContext<HTMLDivElement, ItemTextProps>(Select.ItemText, 'itemText')

export interface LabelProps extends Assign<JsxStyleProps, Select.LabelProps> {}
export const Label = withContext<HTMLLabelElement, LabelProps>(Select.Label, 'label')

export interface PositionerProps extends Assign<JsxStyleProps, Select.PositionerProps> {}
export const Positioner = withContext<HTMLDivElement, PositionerProps>(
  Select.Positioner,
  'positioner',
)

export interface TriggerProps extends Assign<JsxStyleProps, Select.TriggerProps> {}
export const Trigger = withContext<HTMLButtonElement, TriggerProps>(Select.Trigger, 'trigger')

export interface ValueTextProps extends Assign<JsxStyleProps, Select.ValueTextProps> {}
export const ValueText = withContext<HTMLSpanElement, ValueTextProps>(Select.ValueText, 'valueText')

export {
  SelectContext as Context,
  SelectHiddenSelect as HiddenSelect,
  type SelectContextProps as ContextProps,
  type SelectHiddenSelectProps as HiddenSelectProps,
} from '@ark-ui/react/select'
