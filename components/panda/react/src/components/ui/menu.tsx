import { Menu as ArkMenu } from '@ark-ui/react/menu'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { menu } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(menu)

export const MenuRoot = withProvider(ArkMenu.Root)
export const MenuArrow = withContext(styled(ArkMenu.Arrow), 'arrow')
export const MenuArrowTip = withContext(styled(ArkMenu.ArrowTip), 'arrowTip')
export const MenuContent = withContext(styled(ArkMenu.Content), 'content')
export const MenuContextTrigger = withContext(styled(ArkMenu.ContextTrigger), 'contextTrigger')
export const MenuItem = withContext(styled(ArkMenu.Item), 'item')
export const MenuItemGroup = withContext(styled(ArkMenu.ItemGroup), 'itemGroup')
export const MenuItemGroupLabel = withContext(styled(ArkMenu.ItemGroupLabel), 'itemGroupLabel')
export const MenuOptionItem = withContext(styled(ArkMenu.OptionItem), 'optionItem')
export const MenuPositioner = withContext(styled(ArkMenu.Positioner), 'positioner')
export const MenuSeparator = withContext(styled(ArkMenu.Separator), 'separator')
export const MenuTrigger = withContext(styled(ArkMenu.Trigger), 'trigger')
export const MenuTriggerItem = withContext(styled(ArkMenu.TriggerItem), 'triggerItem')

export const Menu = {
  Root: MenuRoot,
  Arrow: MenuArrow,
  ArrowTip: MenuArrowTip,
  Content: MenuContent,
  ContextTrigger: MenuContextTrigger,
  Item: MenuItem,
  ItemGroup: MenuItemGroup,
  ItemGroupLabel: MenuItemGroupLabel,
  OptionItem: MenuOptionItem,
  Positioner: MenuPositioner,
  Separator: MenuSeparator,
  Trigger: MenuTrigger,
  TriggerItem: MenuTriggerItem,
}

export interface MenuRootProps extends ComponentProps<typeof MenuRoot> {}
export interface MenuArrowProps extends ComponentProps<typeof MenuArrow> {}
export interface MenuArrowTipProps extends ComponentProps<typeof MenuArrowTip> {}
export interface MenuContentProps extends ComponentProps<typeof MenuContent> {}
export interface MenuContextTriggerProps extends ComponentProps<typeof MenuContextTrigger> {}
export interface MenuItemProps extends ComponentProps<typeof MenuItem> {}
export interface MenuItemGroupProps extends ComponentProps<typeof MenuItemGroup> {}
export interface MenuItemGroupLabelProps extends ComponentProps<typeof MenuItemGroupLabel> {}
export interface MenuOptionItemProps extends ComponentProps<typeof MenuOptionItem> {}
export interface MenuPositionerProps extends ComponentProps<typeof MenuPositioner> {}
export interface MenuSeparatorProps extends ComponentProps<typeof MenuSeparator> {}
export interface MenuTriggerProps extends ComponentProps<typeof MenuTrigger> {}
export interface MenuTriggerItemProps extends ComponentProps<typeof MenuTriggerItem> {}
