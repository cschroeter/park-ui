import { Menu as ArkMenu } from '@ark-ui/react/menu'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from './create-style-context'

const { withProvider, withContext } = createStyleContext('Menu')

const Menu = withProvider(ArkMenu.Root)
const MenuArrow = withContext(chakra(ArkMenu.Arrow), 'arrow')
const MenuArrowTip = withContext(chakra(ArkMenu.ArrowTip), 'arrowTip')
const MenuContent = withContext(chakra(ArkMenu.Content), 'content')
const MenuContextTrigger = withContext(chakra(ArkMenu.ContextTrigger), 'contextTrigger')
const MenuIndicator = withContext(chakra(ArkMenu.Indicator), 'indicator')
const MenuItem = withContext(chakra(ArkMenu.Item), 'item')
const MenuItemGroup = withContext(chakra(ArkMenu.ItemGroup), 'itemGroup')
const MenuItemGroupLabel = withContext(chakra(ArkMenu.ItemGroupLabel), 'itemGroupLabel')
const MenuOptionItem = withContext(chakra(ArkMenu.OptionItem), 'optionItem')
const MenuOptionItemIndicator = withContext(
  chakra(ArkMenu.OptionItemIndicator),
  'optionItemIndicator',
)
const MenuOptionItemText = withContext(chakra(ArkMenu.OptionItemText), 'optionItemText')
const MenuPositioner = withContext(chakra(ArkMenu.Positioner), 'positioner')
const MenuSeparator = withContext(chakra(ArkMenu.Separator), 'separator')
const MenuTrigger = withContext(chakra(ArkMenu.Trigger), 'trigger')
const MenuTriggerItem = withContext(chakra(ArkMenu.TriggerItem), 'triggerItem')

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

export interface MenuProps extends HTMLChakraProps<typeof Menu> {}
export interface MenuArrowProps extends HTMLChakraProps<typeof MenuArrow> {}
export interface MenuArrowTipProps extends HTMLChakraProps<typeof MenuArrowTip> {}
export interface MenuContentProps extends HTMLChakraProps<typeof MenuContent> {}
export interface MenuContextTriggerProps extends HTMLChakraProps<typeof MenuContextTrigger> {}
export interface MenuIndicatorProps extends HTMLChakraProps<typeof MenuIndicator> {}
export interface MenuItemProps extends HTMLChakraProps<typeof MenuItem> {}
export interface MenuItemGroupProps extends HTMLChakraProps<typeof MenuItemGroup> {}
export interface MenuItemGroupLabelProps extends HTMLChakraProps<typeof MenuItemGroupLabel> {}
export interface MenuOptionItemProps extends HTMLChakraProps<typeof MenuOptionItem> {}
export interface MenuOptionItemIndicatorProps
  extends HTMLChakraProps<typeof MenuOptionItemIndicator> {}
export interface MenuOptionItemTextProps extends HTMLChakraProps<typeof MenuOptionItemText> {}
export interface MenuPositionerProps extends HTMLChakraProps<typeof MenuPositioner> {}
export interface MenuSeparatorProps extends HTMLChakraProps<typeof MenuSeparator> {}
export interface MenuTriggerProps extends HTMLChakraProps<typeof MenuTrigger> {}
export interface MenuTriggerItemProps extends HTMLChakraProps<typeof MenuTriggerItem> {}
