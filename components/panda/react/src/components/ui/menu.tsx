import { Menu as ArkMenu } from '@ark-ui/react/menu'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { menu } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(menu)

const Root = withProvider(ArkMenu.Root)
const Arrow = withContext(styled(ArkMenu.Arrow), 'arrow')
const ArrowTip = withContext(styled(ArkMenu.ArrowTip), 'arrowTip')
const Content = withContext(styled(ArkMenu.Content), 'content')
const ContextTrigger = withContext(styled(ArkMenu.ContextTrigger), 'contextTrigger')
const Indicator = withContext(styled(ArkMenu.Indicator), 'indicator')
const Item = withContext(styled(ArkMenu.Item), 'item')
const ItemGroup = withContext(styled(ArkMenu.ItemGroup), 'itemGroup')
const ItemGroupLabel = withContext(styled(ArkMenu.ItemGroupLabel), 'itemGroupLabel')
const OptionItem = withContext(styled(ArkMenu.OptionItem), 'optionItem')
const OptionItemIndicator = withContext(styled(ArkMenu.OptionItemIndicator), 'optionItemIndicator')
const OptionItemText = withContext(styled(ArkMenu.OptionItemText), 'optionItemText')
const Positioner = withContext(styled(ArkMenu.Positioner), 'positioner')
const Separator = withContext(styled(ArkMenu.Separator), 'separator')
const Trigger = withContext(styled(ArkMenu.Trigger), 'trigger')
const TriggerItem = withContext(styled(ArkMenu.TriggerItem), 'triggerItem')

export {
  Arrow,
  ArrowTip,
  Content,
  ContextTrigger,
  Indicator,
  Item,
  ItemGroup,
  ItemGroupLabel,
  OptionItem,
  OptionItemIndicator,
  OptionItemText,
  Positioner,
  Root,
  Separator,
  Trigger,
  TriggerItem,
}

export interface MenuRootProps extends ComponentProps<typeof Root> {}
export interface MenuArrowProps extends ComponentProps<typeof Arrow> {}
export interface MenuArrowTipProps extends ComponentProps<typeof ArrowTip> {}
export interface MenuContentProps extends ComponentProps<typeof Content> {}
export interface MenuContextTriggerProps extends ComponentProps<typeof ContextTrigger> {}
export interface MenuIndicatorProps extends ComponentProps<typeof Indicator> {}
export interface MenuItemProps extends ComponentProps<typeof Item> {}
export interface MenuItemGroupProps extends ComponentProps<typeof ItemGroup> {}
export interface MenuItemGroupLabelProps extends ComponentProps<typeof ItemGroupLabel> {}
export interface MenuOptionItemProps extends ComponentProps<typeof OptionItem> {}
export interface MenuOptionItemIndicatorProps extends ComponentProps<typeof OptionItemIndicator> {}
export interface MenuOptionItemTextProps extends ComponentProps<typeof OptionItemText> {}
export interface MenuPositionerProps extends ComponentProps<typeof Positioner> {}
export interface MenuSeparatorProps extends ComponentProps<typeof Separator> {}
export interface MenuTriggerProps extends ComponentProps<typeof Trigger> {}
export interface MenuTriggerItemProps extends ComponentProps<typeof TriggerItem> {}
