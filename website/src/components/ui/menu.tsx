import * as Ark from '@ark-ui/react/menu'
import { styled } from 'styled-system/jsx'
import { menu, type MenuVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

export * from '@ark-ui/react/menu'

const { withProvider, withContext } = createStyleContext(menu)

export type MenuProps = Ark.MenuProps & MenuVariantProps

const MenuRoot = withProvider(styled(Ark.Menu.Root), 'root')
const MenuArrow = withContext(styled(Ark.Menu.Arrow), 'arrow')
const MenuArrowTip = withContext(styled(Ark.Menu.ArrowTip), 'arrowTip')
const MenuContent = withContext(styled(Ark.Menu.Content), 'content')
const MenuContextTrigger = withContext(styled(Ark.Menu.ContextTrigger), 'contextTrigger')
const MenuItem = withContext(styled(Ark.Menu.Item), 'item')
const MenuItemGroup = withContext(styled(Ark.Menu.ItemGroup), 'itemGroup')
const MenuItemGroupLabel = withContext(styled(Ark.Menu.ItemGroupLabel), 'itemGroupLabel')
const MenuOptionItem = withContext(styled(Ark.Menu.OptionItem), 'optionItem')
const MenuPositioner = withContext(styled(Ark.Menu.Positioner), 'positioner')
const MenuSeparator = withContext(styled(Ark.Menu.Separator), 'separator')
const MenuTrigger = withContext(styled(Ark.Menu.Trigger), 'trigger')
const MenuTriggerItem = withContext(styled(Ark.Menu.TriggerItem), 'triggerItem')

const Menu = Object.assign(MenuRoot, {
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

export {
  Menu,
  MenuArrow,
  MenuArrowTip,
  MenuContent,
  MenuContextTrigger,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuOptionItem,
  MenuPositioner,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem,
}
