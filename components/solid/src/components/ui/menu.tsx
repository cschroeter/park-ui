import { type Assign, Menu } from '@ark-ui/solid'
import { type MenuVariantProps, menu } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withRootProvider, withContext } = createStyleContext(menu)

export interface RootProps extends Assign<JsxStyleProps, Menu.RootProps>, MenuVariantProps {}
export const Root = withRootProvider<RootProps>(Menu.Root)

export const Arrow = withContext<Assign<JsxStyleProps, Menu.ArrowProps>>(Menu.Arrow, 'arrow')

export const ArrowTip = withContext<Assign<JsxStyleProps, Menu.ArrowTipProps>>(
  Menu.ArrowTip,
  'arrowTip',
)

export const CheckboxItem = withContext<Assign<JsxStyleProps, Menu.CheckboxItemProps>>(
  Menu.CheckboxItem,
  'item',
)

export const Content = withContext<Assign<JsxStyleProps, Menu.ContentProps>>(
  Menu.Content,
  'content',
)

export const ContextTrigger = withContext<Assign<JsxStyleProps, Menu.ContextTriggerProps>>(
  Menu.ContextTrigger,
  'contextTrigger',
)

export const Indicator = withContext<Assign<JsxStyleProps, Menu.IndicatorProps>>(
  Menu.Indicator,
  'indicator',
)

export const ItemGroupLabel = withContext<Assign<JsxStyleProps, Menu.ItemGroupLabelProps>>(
  Menu.ItemGroupLabel,
  'itemGroupLabel',
)

export const ItemGroup = withContext<Assign<JsxStyleProps, Menu.ItemGroupProps>>(
  Menu.ItemGroup,
  'itemGroup',
)

export const ItemIndicator = withContext<Assign<JsxStyleProps, Menu.ItemIndicatorProps>>(
  Menu.ItemIndicator,
  'itemIndicator',
)

export const Item = withContext<Assign<JsxStyleProps, Menu.ItemProps>>(Menu.Item, 'item')

export const ItemText = withContext<Assign<JsxStyleProps, Menu.ItemTextProps>>(
  Menu.ItemText,
  'itemText',
)

export const Positioner = withContext<Assign<JsxStyleProps, Menu.PositionerProps>>(
  Menu.Positioner,
  'positioner',
)

export const RadioItemGroup = withContext<Assign<JsxStyleProps, Menu.RadioItemGroupProps>>(
  Menu.RadioItemGroup,
  'item',
)

export const RadioItem = withContext<Assign<JsxStyleProps, Menu.RadioItemProps>>(
  Menu.RadioItem,
  'item',
)

export const Separator = withContext<Assign<JsxStyleProps, Menu.SeparatorProps>>(
  Menu.Separator,
  'separator',
)

export const TriggerItem = withContext<Assign<JsxStyleProps, Menu.TriggerItemProps>>(
  Menu.TriggerItem,
  'triggerItem',
)

export const Trigger = withContext<Assign<JsxStyleProps, Menu.TriggerProps>>(
  Menu.Trigger,
  'trigger',
)

export { MenuContext as Context, type MenuContextProps as ContextProps } from '@ark-ui/solid'
