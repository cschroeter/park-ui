import { Menu as ArkMenu } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { menu } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(menu)

export const MenuRoot = withProvider(ArkMenu.Root)
export const MenuArrow = withContext(styled(ArkMenu.Arrow), 'arrow')
export const MenuArrowTip = withContext(styled(ArkMenu.ArrowTip), 'arrowTip')
export const MenuContent = withContext(styled(ArkMenu.Content), 'content')
export const MenuContextTrigger = withContext(styled(ArkMenu.ContextTrigger), 'contextTrigger')
export const MenuIndicator = withContext(styled(ArkMenu.Indicator), 'indicator')
export const MenuItem = withContext(styled(ArkMenu.Item), 'item')
export const MenuItemGroup = withContext(styled(ArkMenu.ItemGroup), 'itemGroup')
export const MenuItemGroupLabel = withContext(styled(ArkMenu.ItemGroupLabel), 'itemGroupLabel')
export const MenuOptionItem = withContext(styled(ArkMenu.OptionItem), 'optionItem')
export const MenuOptionItemIndicator = withContext(
  styled(ArkMenu.OptionItemIndicator),
  'optionItemIndicator',
)
export const MenuOptionItemText = withContext(styled(ArkMenu.OptionItemText), 'optionItemText')
export const MenuPositioner = withContext(styled(ArkMenu.Positioner), 'positioner')
export const MenuSeparator = withContext(styled(ArkMenu.Separator), 'separator')
export const MenuTrigger = withContext(styled(ArkMenu.Trigger), 'trigger')
export const MenuTriggerItem = withContext(styled(ArkMenu.TriggerItem), 'triggerItem')

export const Menu = Object.assign(MenuRoot, {
  Root: MenuRoot,
  Arrow: MenuArrow,
  ArrowTip: MenuArrowTip,
  Content: MenuContent,
  ContextTrigger: MenuContextTrigger,
  Indicator: MenuIndicator,
  Item: MenuItem,
  ItemGroup: MenuItemGroup,
  ItemGroupLabel: MenuItemGroupLabel,
  OptionItem: MenuOptionItem,
  OptionItemIndicator: MenuOptionItemIndicator,
  OptionItemText: MenuOptionItemText,
  Positioner: MenuPositioner,
  Separator: MenuSeparator,
  Trigger: MenuTrigger,
  TriggerItem: MenuTriggerItem,
})

export type MenuProps = typeof MenuRoot
export type MenuArrowProps = typeof MenuArrow
export type MenuArrowTipProps = typeof MenuArrowTip
export type MenuContentProps = typeof MenuContent
export type MenuContextTriggerProps = typeof MenuContextTrigger
export type MenuIndicatorProps = typeof MenuIndicator
export type MenuItemProps = typeof MenuItem
export type MenuItemGroupProps = typeof MenuItemGroup
export type MenuItemGroupLabelProps = typeof MenuItemGroupLabel
export type MenuOptionItemProps = typeof MenuOptionItem
export type MenuOptionItemIndicatorProps = typeof MenuOptionItemIndicator
export type MenuOptionItemTextProps = typeof MenuOptionItemText
export type MenuPositionerProps = typeof MenuPositioner
export type MenuSeparatorProps = typeof MenuSeparator
export type MenuTriggerProps = typeof MenuTrigger
export type MenuTriggerItemProps = typeof MenuTriggerItem
