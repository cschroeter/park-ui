import { Menu } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
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
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(Menu.Root)
export const Arrow = withContext(Menu.Arrow, 'arrow')
export const ArrowTip = withContext(Menu.ArrowTip, 'arrowTip')
export const Content = withContext(Menu.Content, 'content')
export const ContextTrigger = withContext(Menu.ContextTrigger, 'contextTrigger')
export const Item = withContext(Menu.Item, 'item')
export const ItemGroup = withContext(Menu.ItemGroup, 'itemGroup')
export const ItemGroupLabel = withContext(Menu.ItemGroupLabel, 'itemGroupLabel')
export const OptionItem = withContext(Menu.OptionItem, 'optionItem')
export const Positioner = withContext(Menu.Positioner, 'positioner')
export const Separator = withContext(Menu.Separator, 'separator')
export const Trigger = withContext(Menu.Trigger, 'trigger')
export const TriggerItem = withContext(Menu.TriggerItem, 'triggerItem')

export type RootProps = ComponentProps<typeof Root>
export interface ArrowProps extends ComponentProps<typeof Arrow> {}
export interface ArrowTipProps extends ComponentProps<typeof ArrowTip> {}
export interface ContentProps extends ComponentProps<typeof Content> {}
export interface ContextTriggerProps extends ComponentProps<typeof ContextTrigger> {}
export interface ItemProps extends ComponentProps<typeof Item> {}
export interface ItemGroupProps extends ComponentProps<typeof ItemGroup> {}
export interface ItemGroupLabelProps extends ComponentProps<typeof ItemGroupLabel> {}
export interface OptionItemProps extends ComponentProps<typeof OptionItem> {}
export interface PositionerProps extends ComponentProps<typeof Positioner> {}
export interface SeparatorProps extends ComponentProps<typeof Separator> {}
export interface TriggerProps extends ComponentProps<typeof Trigger> {}
export interface TriggerItemProps extends ComponentProps<typeof TriggerItem> {}
