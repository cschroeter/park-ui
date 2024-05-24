import { Menu } from '@ark-ui/react/menu'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const menu = tv(
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
const { withRootProvider, withContext } = createStyleContext(menu)

export interface RootProps extends Menu.RootProps, VariantProps<typeof menu> {}
export const Root = withRootProvider<RootProps>(Menu.Root)

export const Arrow = withContext<HTMLDivElement, Menu.ArrowProps>(Menu.Arrow, 'arrow')

export const ArrowTip = withContext<HTMLDivElement, Menu.ArrowTipProps>(Menu.ArrowTip, 'arrowTip')

export const CheckboxItem = withContext<HTMLDivElement, Menu.CheckboxItemProps>(
  Menu.CheckboxItem,
  'item',
)

export const Content = withContext<HTMLDivElement, Menu.ContentProps>(Menu.Content, 'content')

export const ContextTrigger = withContext<HTMLButtonElement, Menu.ContextTriggerProps>(
  Menu.ContextTrigger,
  'contextTrigger',
)

export const Indicator = withContext<HTMLDivElement, Menu.IndicatorProps>(
  Menu.Indicator,
  'indicator',
)

export const ItemGroupLabel = withContext<HTMLDivElement, Menu.ItemGroupLabelProps>(
  Menu.ItemGroupLabel,
  'itemGroupLabel',
)

export const ItemGroup = withContext<HTMLDivElement, Menu.ItemGroupProps>(
  Menu.ItemGroup,
  'itemGroup',
)

export const ItemIndicator = withContext<HTMLDivElement, Menu.ItemIndicatorProps>(
  Menu.ItemIndicator,
  'optionItemIndicator',
)

export const Item = withContext<HTMLDivElement, Menu.ItemProps>(Menu.Item, 'item')

export const ItemText = withContext<HTMLDivElement, Menu.ItemTextProps>(
  Menu.ItemText,
  'optionItemText',
)

export const Positioner = withContext<HTMLDivElement, Menu.PositionerProps>(
  Menu.Positioner,
  'positioner',
)

export const RadioItemGroup = withContext<HTMLDivElement, Menu.RadioItemGroupProps>(
  Menu.RadioItemGroup,
  'itemGroup',
)

export const RadioItem = withContext<HTMLDivElement, Menu.RadioItemProps>(Menu.RadioItem, 'item')

export const Separator = withContext<HTMLHRElement, Menu.SeparatorProps>(
  Menu.Separator,
  'separator',
)

export const TriggerItem = withContext<HTMLDivElement, Menu.TriggerItemProps>(
  Menu.TriggerItem,
  'triggerItem',
)

export const Trigger = withContext<HTMLButtonElement, Menu.TriggerProps>(Menu.Trigger, 'trigger')

export { MenuContext as Context, type MenuContextProps as ContextProps } from '@ark-ui/react/menu'
