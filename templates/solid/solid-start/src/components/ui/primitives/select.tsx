import { type Assign, Select } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type SelectVariantProps, select } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

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
  Assign<HTMLStyledProps<'button'>, Select.ClearTriggerProps>
>(Select.ClearTrigger, 'clearTrigger')

export const Content = withContext<Assign<HTMLStyledProps<'div'>, Select.ContentProps>>(
  Select.Content,
  'content',
)

export const Control = withContext<Assign<HTMLStyledProps<'div'>, Select.ControlProps>>(
  Select.Control,
  'control',
)

export const Indicator = withContext<Assign<HTMLStyledProps<'div'>, Select.IndicatorProps>>(
  Select.Indicator,
  'indicator',
)

export const ItemGroupLabel = withContext<
  Assign<HTMLStyledProps<'div'>, Select.ItemGroupLabelProps>
>(Select.ItemGroupLabel, 'itemGroupLabel')

export const ItemGroup = withContext<Assign<HTMLStyledProps<'div'>, Select.ItemGroupProps>>(
  Select.ItemGroup,
  'itemGroup',
)

export const ItemIndicator = withContext<Assign<HTMLStyledProps<'div'>, Select.ItemIndicatorProps>>(
  Select.ItemIndicator,
  'itemIndicator',
)

export const Item = withContext<Assign<HTMLStyledProps<'div'>, Select.ItemProps>>(
  Select.Item,
  'item',
)

export const ItemText = withContext<Assign<HTMLStyledProps<'span'>, Select.ItemTextProps>>(
  Select.ItemText,
  'itemText',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, Select.LabelProps>>(
  Select.Label,
  'label',
)

export const List = withContext<Assign<HTMLStyledProps<'div'>, Select.ListProps>>(
  Select.List,
  'list',
)

export const Positioner = withContext<Assign<HTMLStyledProps<'div'>, Select.PositionerProps>>(
  Select.Positioner,
  'positioner',
)

export const Trigger = withContext<Assign<HTMLStyledProps<'button'>, Select.TriggerProps>>(
  Select.Trigger,
  'trigger',
)

export const ValueText = withContext<Assign<HTMLStyledProps<'span'>, Select.ValueTextProps>>(
  Select.ValueText,
  'valueText',
)

export {
  SelectContext as Context,
  SelectHiddenSelect as HiddenSelect,
} from '@ark-ui/solid'
