import { Menu as ArkMenu } from '@ark-ui/react'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'menu',
  defaultVariants: { size: 'md' },
  slots: {
    contextTrigger: 'menu__contextTrigger',
    trigger: 'menu__trigger',
    triggerItem: 'menu__triggerItem',
    indicator: 'menu__indicator',
    positioner: 'menu__positioner',
    arrow: 'menu__arrow',
    arrowTip: 'menu__arrowTip',
    content: 'menu__content',
    separator: 'menu__separator',
    item: 'menu__item',
    optionItem: 'menu__optionItem',
    optionItemIndicator: 'menu__optionItemIndicator',
    optionItemText: 'menu__optionItemText',
    itemGroupLabel: 'menu__itemGroupLabel',
    itemGroup: 'menu__itemGroup',
  },
  variants: {
    size: {
      xs: {
        contextTrigger: 'menu__contextTrigger--size_xs',
        trigger: 'menu__trigger--size_xs',
        triggerItem: 'menu__triggerItem--size_xs',
        indicator: 'menu__indicator--size_xs',
        positioner: 'menu__positioner--size_xs',
        arrow: 'menu__arrow--size_xs',
        arrowTip: 'menu__arrowTip--size_xs',
        content: 'menu__content--size_xs',
        separator: 'menu__separator--size_xs',
        item: 'menu__item--size_xs',
        optionItem: 'menu__optionItem--size_xs',
        optionItemIndicator: 'menu__optionItemIndicator--size_xs',
        optionItemText: 'menu__optionItemText--size_xs',
        itemGroupLabel: 'menu__itemGroupLabel--size_xs',
        itemGroup: 'menu__itemGroup--size_xs',
      },
      sm: {
        contextTrigger: 'menu__contextTrigger--size_sm',
        trigger: 'menu__trigger--size_sm',
        triggerItem: 'menu__triggerItem--size_sm',
        indicator: 'menu__indicator--size_sm',
        positioner: 'menu__positioner--size_sm',
        arrow: 'menu__arrow--size_sm',
        arrowTip: 'menu__arrowTip--size_sm',
        content: 'menu__content--size_sm',
        separator: 'menu__separator--size_sm',
        item: 'menu__item--size_sm',
        optionItem: 'menu__optionItem--size_sm',
        optionItemIndicator: 'menu__optionItemIndicator--size_sm',
        optionItemText: 'menu__optionItemText--size_sm',
        itemGroupLabel: 'menu__itemGroupLabel--size_sm',
        itemGroup: 'menu__itemGroup--size_sm',
      },
      md: {
        contextTrigger: 'menu__contextTrigger--size_md',
        trigger: 'menu__trigger--size_md',
        triggerItem: 'menu__triggerItem--size_md',
        indicator: 'menu__indicator--size_md',
        positioner: 'menu__positioner--size_md',
        arrow: 'menu__arrow--size_md',
        arrowTip: 'menu__arrowTip--size_md',
        content: 'menu__content--size_md',
        separator: 'menu__separator--size_md',
        item: 'menu__item--size_md',
        optionItem: 'menu__optionItem--size_md',
        optionItemIndicator: 'menu__optionItemIndicator--size_md',
        optionItemText: 'menu__optionItemText--size_md',
        itemGroupLabel: 'menu__itemGroupLabel--size_md',
        itemGroup: 'menu__itemGroup--size_md',
      },
      lg: {
        contextTrigger: 'menu__contextTrigger--size_lg',
        trigger: 'menu__trigger--size_lg',
        triggerItem: 'menu__triggerItem--size_lg',
        indicator: 'menu__indicator--size_lg',
        positioner: 'menu__positioner--size_lg',
        arrow: 'menu__arrow--size_lg',
        arrowTip: 'menu__arrowTip--size_lg',
        content: 'menu__content--size_lg',
        separator: 'menu__separator--size_lg',
        item: 'menu__item--size_lg',
        optionItem: 'menu__optionItem--size_lg',
        optionItemIndicator: 'menu__optionItemIndicator--size_lg',
        optionItemText: 'menu__optionItemText--size_lg',
        itemGroupLabel: 'menu__itemGroupLabel--size_lg',
        itemGroup: 'menu__itemGroup--size_lg',
      },
    },
  },
})
const { withProvider, withContext } = createStyleContext(styles)

export const MenuRoot = withProvider(ArkMenu.Root)
export const MenuArrow = withContext(ArkMenu.Arrow, 'arrow')
export const MenuArrowTip = withContext(ArkMenu.ArrowTip, 'arrowTip')
export const MenuContent = withContext(ArkMenu.Content, 'content')
export const MenuContextTrigger = withContext(ArkMenu.ContextTrigger, 'contextTrigger')
export const MenuItem = withContext(ArkMenu.Item, 'item')
export const MenuItemGroup = withContext(ArkMenu.ItemGroup, 'itemGroup')
export const MenuItemGroupLabel = withContext(ArkMenu.ItemGroupLabel, 'itemGroupLabel')
export const MenuOptionItem = withContext(ArkMenu.OptionItem, 'optionItem')
export const MenuPositioner = withContext(ArkMenu.Positioner, 'positioner')
export const MenuSeparator = withContext(ArkMenu.Separator, 'separator')
export const MenuTrigger = withContext(ArkMenu.Trigger, 'trigger')
export const MenuTriggerItem = withContext(ArkMenu.TriggerItem, 'triggerItem')

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
