import { Menu as ArkMenu } from '@ark-ui/solid'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { menu } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(menu)

const Menu = withProvider(ArkMenu.Root)
const MenuArrow = withContext(styled(ArkMenu.Arrow), 'arrow')
const MenuArrowTip = withContext(styled(ArkMenu.ArrowTip), 'arrowTip')
const MenuContent = withContext(styled(ArkMenu.Content), 'content')
const MenuContextTrigger = withContext(styled(ArkMenu.ContextTrigger), 'contextTrigger')
const MenuIndicator = withContext(styled(ArkMenu.Indicator), 'indicator')
const MenuItem = withContext(styled(ArkMenu.Item), 'item')
const MenuItemGroup = withContext(styled(ArkMenu.ItemGroup), 'itemGroup')
const MenuItemGroupLabel = withContext(styled(ArkMenu.ItemGroupLabel), 'itemGroupLabel')
const MenuOptionItem = withContext(styled(ArkMenu.OptionItem), 'optionItem')
const MenuOptionItemIndicator = withContext(
  styled(ArkMenu.OptionItemIndicator),
  'optionItemIndicator',
)
const MenuOptionItemText = withContext(styled(ArkMenu.OptionItemText), 'optionItemText')
const MenuPositioner = withContext(styled(ArkMenu.Positioner), 'positioner')
const MenuSeparator = withContext(styled(ArkMenu.Separator), 'separator')
const MenuTrigger = withContext(styled(ArkMenu.Trigger), 'trigger')
const MenuTriggerItem = withContext(styled(ArkMenu.TriggerItem), 'triggerItem')

const Root = Menu
const Arrow = MenuArrow
const ArrowTip = MenuArrowTip
const Content = MenuContent
const ContextTrigger = MenuContextTrigger
const Indicator = MenuIndicator
const Item = MenuItem
const ItemGroup = MenuItemGroup
const ItemGroupLabel = MenuItemGroupLabel
const OptionItem = MenuOptionItem
const OptionItemIndicator = MenuOptionItemIndicator
const OptionItemText = MenuOptionItemText
const Positioner = MenuPositioner
const Separator = MenuSeparator
const Trigger = MenuTrigger
const TriggerItem = MenuTriggerItem

export {
  Arrow,
  ArrowTip,
  Content,
  ContextTrigger,
  Indicator,
  Item,
  ItemGroup,
  ItemGroupLabel,
  Menu,
  MenuArrow,
  MenuArrowTip,
  MenuContent,
  MenuContextTrigger,
  MenuIndicator,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuOptionItem,
  MenuOptionItemIndicator,
  MenuOptionItemText,
  MenuPositioner,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem,
  OptionItem,
  OptionItemIndicator,
  OptionItemText,
  Positioner,
  Root,
  Separator,
  Trigger,
  TriggerItem,
}

export interface MenuProps extends HTMLStyledProps<typeof Menu> {}
export interface MenuArrowProps extends HTMLStyledProps<typeof MenuArrow> {}
export interface MenuArrowTipProps extends HTMLStyledProps<typeof MenuArrowTip> {}
export interface MenuContentProps extends HTMLStyledProps<typeof MenuContent> {}
export interface MenuContextTriggerProps extends HTMLStyledProps<typeof MenuContextTrigger> {}
export interface MenuIndicatorProps extends HTMLStyledProps<typeof MenuIndicator> {}
export interface MenuItemProps extends HTMLStyledProps<typeof MenuItem> {}
export interface MenuItemGroupProps extends HTMLStyledProps<typeof MenuItemGroup> {}
export interface MenuItemGroupLabelProps extends HTMLStyledProps<typeof MenuItemGroupLabel> {}
export interface MenuOptionItemProps extends HTMLStyledProps<typeof MenuOptionItem> {}
export interface MenuOptionItemIndicatorProps
  extends HTMLStyledProps<typeof MenuOptionItemIndicator> {}
export interface MenuOptionItemTextProps extends HTMLStyledProps<typeof MenuOptionItemText> {}
export interface MenuPositionerProps extends HTMLStyledProps<typeof MenuPositioner> {}
export interface MenuSeparatorProps extends HTMLStyledProps<typeof MenuSeparator> {}
export interface MenuTriggerProps extends HTMLStyledProps<typeof MenuTrigger> {}
export interface MenuTriggerItemProps extends HTMLStyledProps<typeof MenuTriggerItem> {}
