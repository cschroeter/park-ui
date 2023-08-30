import * as Ark from '@ark-ui/solid/menu'
import { styled } from 'styled-system/jsx'
import { menu, type MenuVariantProps } from 'styled-system/recipes'

import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(menu)

export * from '@ark-ui/solid/menu'
export type MenuProps = Ark.MenuProps & MenuVariantProps

const MenuRoot = withProvider(styled(Ark.Menu), 'root')
export const MenuArrow = withContext(styled(Ark.MenuArrow), 'arrow')
export const MenuArrowTip = withContext(styled(Ark.MenuArrowTip), 'arrowTip')
export const MenuContent = withContext(styled(Ark.MenuContent), 'content')
export const MenuContextTrigger = withContext(styled(Ark.MenuContextTrigger), 'contextTrigger')
export const MenuItem = withContext(styled(Ark.MenuItem), 'item')
export const MenuItemGroup = withContext(styled(Ark.MenuItemGroup), 'itemGroup')
export const MenuItemGroupLabel = withContext(styled(Ark.MenuItemGroupLabel), 'itemGroupLabel')
export const MenuOptionItem = withContext(styled(Ark.MenuOptionItem), 'optionItem')
export const MenuPositioner = withContext(styled(Ark.MenuPositioner), 'positioner')
export const MenuSeparator = withContext(styled(Ark.MenuSeparator), 'separator')
export const MenuTrigger = withContext(styled(Ark.MenuTrigger), 'trigger')
export const MenuTriggerItem = withContext(styled(Ark.MenuTriggerItem), 'triggerItem')

export const Menu = Object.assign(MenuRoot, {
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
})
