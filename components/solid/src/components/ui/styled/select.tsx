import { type Assign, Select } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type SelectVariantProps, select } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withRootProvider, withContext } = createStyleContext(select)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withRootProvider<
  Assign<
    Assign<HTMLStyledProps<'div'>, Select.RootProviderBaseProps<Select.CollectionItem>>,
    SelectVariantProps
  >
>(Select.RootProvider)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider<
  Assign<
    Assign<HTMLStyledProps<'div'>, Select.RootBaseProps<Select.CollectionItem>>,
    SelectVariantProps
  >
>(Select.Root)

export const ClearTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, Select.ClearTriggerBaseProps>
>(Select.ClearTrigger, 'clearTrigger')

export const Content = withContext<Assign<HTMLStyledProps<'div'>, Select.ContentBaseProps>>(
  Select.Content,
  'content',
)

export const Control = withContext<Assign<HTMLStyledProps<'div'>, Select.ControlBaseProps>>(
  Select.Control,
  'control',
)

export const Indicator = withContext<Assign<HTMLStyledProps<'div'>, Select.IndicatorBaseProps>>(
  Select.Indicator,
  'indicator',
)

export const ItemGroupLabel = withContext<
  Assign<HTMLStyledProps<'div'>, Select.ItemGroupLabelBaseProps>
>(Select.ItemGroupLabel, 'itemGroupLabel')

export const ItemGroup = withContext<Assign<HTMLStyledProps<'div'>, Select.ItemGroupBaseProps>>(
  Select.ItemGroup,
  'itemGroup',
)

export const ItemIndicator = withContext<
  Assign<HTMLStyledProps<'div'>, Select.ItemIndicatorBaseProps>
>(Select.ItemIndicator, 'itemIndicator')

export const Item = withContext<Assign<HTMLStyledProps<'div'>, Select.ItemBaseProps>>(
  Select.Item,
  'item',
)

export const ItemText = withContext<Assign<HTMLStyledProps<'span'>, Select.ItemTextBaseProps>>(
  Select.ItemText,
  'itemText',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, Select.LabelBaseProps>>(
  Select.Label,
  'label',
)

export const List = withContext<Assign<HTMLStyledProps<'div'>, Select.ListBaseProps>>(
  Select.List,
  'list',
)

export const Positioner = withContext<Assign<HTMLStyledProps<'div'>, Select.PositionerBaseProps>>(
  Select.Positioner,
  'positioner',
)

export const Trigger = withContext<Assign<HTMLStyledProps<'button'>, Select.TriggerBaseProps>>(
  Select.Trigger,
  'trigger',
)

export const ValueText = withContext<Assign<HTMLStyledProps<'span'>, Select.ValueTextBaseProps>>(
  Select.ValueText,
  'valueText',
)

export {
  SelectContext as Context,
  SelectHiddenSelect as HiddenSelect,
} from '@ark-ui/solid'
