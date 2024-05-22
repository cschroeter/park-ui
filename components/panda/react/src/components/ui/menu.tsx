import type { Assign } from '@ark-ui/react'
import { Menu } from '@ark-ui/react/menu'
import { type MenuVariantProps, menu } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withRootProvider, withContext } = createStyleContext(menu)

export interface RootProps extends Assign<JsxStyleProps, Menu.RootProps>, MenuVariantProps {}
export const Root = withRootProvider<RootProps>(Menu.Root)

export interface ArrowProps extends Assign<JsxStyleProps, Menu.ArrowProps> {}
export const Arrow = withContext<HTMLDivElement, ArrowProps>(Menu.Arrow, 'arrow')

export interface ArrowTipProps extends Assign<JsxStyleProps, Menu.ArrowTipProps> {}
export const ArrowTip = withContext<HTMLDivElement, ArrowTipProps>(Menu.ArrowTip, 'arrowTip')

export interface CheckboxItemProps extends Assign<JsxStyleProps, Menu.CheckboxItemProps> {}
export const CheckboxItem = withContext<HTMLDivElement, CheckboxItemProps>(
  Menu.CheckboxItem,
  'item',
)

export interface ContentProps extends Assign<JsxStyleProps, Menu.ContentProps> {}
export const Content = withContext<HTMLDivElement, ContentProps>(Menu.Content, 'content')

export interface ContextTriggerProps extends Assign<JsxStyleProps, Menu.ContextTriggerProps> {}
export const ContextTrigger = withContext<HTMLButtonElement, ContextTriggerProps>(
  Menu.ContextTrigger,
  'contextTrigger',
)

export interface IndicatorProps extends Assign<JsxStyleProps, Menu.IndicatorProps> {}
export const Indicator = withContext<HTMLDivElement, IndicatorProps>(Menu.Indicator, 'indicator')

export interface ItemGroupLabelProps extends Assign<JsxStyleProps, Menu.ItemGroupLabelProps> {}
export const ItemGroupLabel = withContext<HTMLDivElement, ItemGroupLabelProps>(
  Menu.ItemGroupLabel,
  'itemGroupLabel',
)

export interface ItemGroupProps extends Assign<JsxStyleProps, Menu.ItemGroupProps> {}
export const ItemGroup = withContext<HTMLDivElement, ItemGroupProps>(Menu.ItemGroup, 'itemGroup')

export interface ItemIndicatorProps extends Assign<JsxStyleProps, Menu.ItemIndicatorProps> {}
export const ItemIndicator = withContext<HTMLDivElement, ItemIndicatorProps>(
  Menu.ItemIndicator,
  'itemIndicator',
)

export interface ItemProps extends Assign<JsxStyleProps, Menu.ItemProps> {}
export const Item = withContext<HTMLDivElement, ItemProps>(Menu.Item, 'item')

export interface ItemTextProps extends Assign<JsxStyleProps, Menu.ItemTextProps> {}
export const ItemText = withContext<HTMLDivElement, ItemTextProps>(Menu.ItemText, 'itemText')

export interface PositionerProps extends Assign<JsxStyleProps, Menu.PositionerProps> {}
export const Positioner = withContext<HTMLDivElement, PositionerProps>(
  Menu.Positioner,
  'positioner',
)

export interface RadioItemGroupProps extends Assign<JsxStyleProps, Menu.RadioItemGroupProps> {}
export const RadioItemGroup = withContext<HTMLDivElement, RadioItemGroupProps>(
  Menu.RadioItemGroup,
  'itemGroup',
)

export interface RadioItemProps extends Assign<JsxStyleProps, Menu.RadioItemProps> {}
export const RadioItem = withContext<HTMLDivElement, RadioItemProps>(Menu.RadioItem, 'item')

export interface SeparatorProps extends Assign<JsxStyleProps, Menu.SeparatorProps> {}
export const Separator = withContext<HTMLHRElement, SeparatorProps>(Menu.Separator, 'separator')

export interface TriggerItemProps extends Assign<JsxStyleProps, Menu.TriggerItemProps> {}
export const TriggerItem = withContext<HTMLDivElement, TriggerItemProps>(
  Menu.TriggerItem,
  'triggerItem',
)

export interface TriggerProps extends Assign<JsxStyleProps, Menu.TriggerProps> {}
export const Trigger = withContext<HTMLButtonElement, TriggerProps>(Menu.Trigger, 'trigger')

export { MenuContext as Context, type MenuContextProps as ContextProps } from '@ark-ui/react/menu'
