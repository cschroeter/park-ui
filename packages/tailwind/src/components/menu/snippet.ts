import * as Ark from '@ark-ui/react/menu'
import { createStyleContext } from '~/lib/create-style-context'
import { menuStyles } from './recipe'
export * from '@ark-ui/react/menu'

export type MenuProps = React.ComponentProps<typeof Menu>

const { withProvider, withContext } = createStyleContext(menuStyles)

const MenuRoot = withProvider(Ark.Menu.Root, 'root')
export const MenuArrow = withContext(Ark.Menu.Arrow, 'arrow')
export const MenuArrowTip = withContext(Ark.Menu.ArrowTip, 'arrowTip')
export const MenuContent = withContext(Ark.Menu.Content, 'content')
export const MenuContextTrigger = withContext(Ark.Menu.ContextTrigger, 'contextTrigger')
export const MenuItem = withContext(Ark.Menu.Item, 'item')
export const MenuItemGroup = withContext(Ark.Menu.ItemGroup, 'itemGroup')
export const MenuItemGroupLabel = withContext(Ark.Menu.ItemGroupLabel, 'itemGroupLabel')
export const MenuOptionItem = withContext(Ark.Menu.OptionItem, 'optionItem')
export const MenuPositioner = withContext(Ark.Menu.Positioner, 'positioner')
export const MenuSeparator = withContext(Ark.Menu.Separator, 'separator')
export const MenuTrigger = withContext(Ark.Menu.Trigger, 'trigger')
export const MenuTriggerItem = withContext(Ark.Menu.TriggerItem, 'triggerItem')

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
