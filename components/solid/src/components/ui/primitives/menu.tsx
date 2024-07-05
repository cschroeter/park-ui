import { type Assign, Menu } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type MenuVariantProps, menu } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withRootProvider, withContext } = createStyleContext(menu)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withRootProvider<Assign<Menu.RootProviderProps, MenuVariantProps>>(
  Menu.RootProvider,
)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider<Assign<Menu.RootProps, MenuVariantProps>>(Menu.Root)

export const Arrow = withContext<Assign<HTMLStyledProps<'div'>, Menu.ArrowProps>>(
  Menu.Arrow,
  'arrow',
)

export const ArrowTip = withContext<Assign<HTMLStyledProps<'div'>, Menu.ArrowTipProps>>(
  Menu.ArrowTip,
  'arrowTip',
)

export const CheckboxItem = withContext<Assign<HTMLStyledProps<'div'>, Menu.CheckboxItemProps>>(
  Menu.CheckboxItem,
  'item',
)

export const Content = withContext<Assign<HTMLStyledProps<'div'>, Menu.ContentProps>>(
  Menu.Content,
  'content',
)

export const ContextTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, Menu.ContextTriggerProps>
>(Menu.ContextTrigger, 'contextTrigger')

export const Indicator = withContext<Assign<HTMLStyledProps<'div'>, Menu.IndicatorProps>>(
  Menu.Indicator,
  'indicator',
)

export const ItemGroupLabel = withContext<Assign<HTMLStyledProps<'div'>, Menu.ItemGroupLabelProps>>(
  Menu.ItemGroupLabel,
  'itemGroupLabel',
)

export const ItemGroup = withContext<Assign<HTMLStyledProps<'div'>, Menu.ItemGroupProps>>(
  Menu.ItemGroup,
  'itemGroup',
)

export const ItemIndicator = withContext<Assign<HTMLStyledProps<'div'>, Menu.ItemIndicatorProps>>(
  Menu.ItemIndicator,
  'itemIndicator',
)

export const Item = withContext<Assign<HTMLStyledProps<'div'>, Menu.ItemProps>>(Menu.Item, 'item')

export const ItemText = withContext<Assign<HTMLStyledProps<'div'>, Menu.ItemTextProps>>(
  Menu.ItemText,
  'itemText',
)

export const Positioner = withContext<Assign<HTMLStyledProps<'div'>, Menu.PositionerProps>>(
  Menu.Positioner,
  'positioner',
)

export const RadioItemGroup = withContext<Assign<HTMLStyledProps<'div'>, Menu.RadioItemGroupProps>>(
  Menu.RadioItemGroup,
  'itemGroup',
)

export const RadioItem = withContext<Assign<HTMLStyledProps<'div'>, Menu.RadioItemProps>>(
  Menu.RadioItem,
  'item',
)

export const Separator = withContext<Assign<HTMLStyledProps<'hr'>, Menu.SeparatorProps>>(
  Menu.Separator,
  'separator',
)

export const TriggerItem = withContext<Assign<HTMLStyledProps<'div'>, Menu.TriggerItemProps>>(
  Menu.TriggerItem,
  'triggerItem',
)

export const Trigger = withContext<Assign<HTMLStyledProps<'button'>, Menu.TriggerProps>>(
  Menu.Trigger,
  'trigger',
)

export { MenuContext as Context } from '@ark-ui/solid'
