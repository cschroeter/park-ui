import { Menu } from '@ark-ui/react/menu'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { menu } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(menu)

export const Root = withProvider(Menu.Root)
export const Arrow = withContext(styled(Menu.Arrow), 'arrow')
export const ArrowTip = withContext(styled(Menu.ArrowTip), 'arrowTip')
export const CheckboxItem = withContext(styled(Menu.CheckboxItem), 'item')
export const Content = withContext(styled(Menu.Content), 'content')
export const ContextTrigger = withContext(styled(Menu.ContextTrigger), 'contextTrigger')
export const Indicator = withContext(styled(Menu.Indicator), 'indicator')
export const Item = withContext(styled(Menu.Item), 'item')
export const ItemGroup = withContext(styled(Menu.ItemGroup), 'itemGroup')
export const ItemGroupLabel = withContext(styled(Menu.ItemGroupLabel), 'itemGroupLabel')
export const ItemIndicator = withContext(styled(Menu.ItemIndicator), 'itemIndicator')
export const ItemText = withContext(styled(Menu.ItemText), 'itemText')
export const Positioner = withContext(styled(Menu.Positioner), 'positioner')
export const RadioItemGroup = withContext(styled(Menu.RadioItemGroup), 'itemGroup')
export const RadioItem = withContext(styled(Menu.RadioItem), 'item')
export const Separator = withContext(styled(Menu.Separator), 'separator')
export const Trigger = withContext(styled(Menu.Trigger), 'trigger')
export const TriggerItem = withContext(styled(Menu.TriggerItem), 'triggerItem')

export interface RootProps extends ComponentProps<typeof Root> {}
export interface ArrowProps extends ComponentProps<typeof Arrow> {}
export interface ArrowTipProps extends ComponentProps<typeof ArrowTip> {}
export interface CheckboxItemProps extends ComponentProps<typeof CheckboxItem> {}
export interface ContentProps extends ComponentProps<typeof Content> {}
export interface ContextTriggerProps extends ComponentProps<typeof ContextTrigger> {}
export interface IndicatorProps extends ComponentProps<typeof Indicator> {}
export interface ItemProps extends ComponentProps<typeof Item> {}
export interface ItemGroupProps extends ComponentProps<typeof ItemGroup> {}
export interface ItemGroupLabelProps extends ComponentProps<typeof ItemGroupLabel> {}
export interface ItemIndicatorProps extends ComponentProps<typeof ItemIndicator> {}
export interface ItemTextProps extends ComponentProps<typeof ItemText> {}
export interface PositionerProps extends ComponentProps<typeof Positioner> {}
export interface RadioItemGroupProps extends ComponentProps<typeof RadioItemGroup> {}
export interface RadioItemProps extends ComponentProps<typeof RadioItem> {}
export interface SeparatorProps extends ComponentProps<typeof Separator> {}
export interface TriggerProps extends ComponentProps<typeof Trigger> {}
export interface TriggerItemProps extends ComponentProps<typeof TriggerItem> {}
