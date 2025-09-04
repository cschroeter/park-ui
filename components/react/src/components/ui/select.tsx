'use client'
import type { CollectionItem } from '@ark-ui/react/select'
import { Select } from '@ark-ui/react/select'
import { createStyleContext } from 'styled-system/jsx'
import { select } from 'styled-system/recipes'
import type {
  Assign,
  ComponentProps,
  JsxHTMLProps,
  RecipeVariantProps,
  UnstyledProps,
} from 'styled-system/types'

const { withProvider, withContext } = createStyleContext(select)

interface RootBaseProps<T extends CollectionItem>
  extends Assign<Select.RootBaseProps<T>, RecipeVariantProps<typeof select>>,
    UnstyledProps {}

interface RootProps<T extends CollectionItem>
  extends JsxHTMLProps<ComponentProps<'div'>, RootBaseProps<T>> {}

type RootComponent = <T extends CollectionItem>(
  props: RootProps<T> & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element

export const Root = withProvider(Select.Root, 'root', {
  // @ts-expect-error
  defaultProps: { positioning: { sameWidth: true } },
}) as RootComponent

export const ClearTrigger = withContext(Select.ClearTrigger, 'clearTrigger')
export const Content = withContext(Select.Content, 'content')
export const Control = withContext(Select.Control, 'control')
export const Indicator = withContext(Select.Indicator, 'indicator')
export const Item = withContext(Select.Item, 'item')
export const ItemGroup = withContext(Select.ItemGroup, 'itemGroup')
export const ItemGroupLabel = withContext(Select.ItemGroupLabel, 'itemGroupLabel')
export const ItemIndicator = withContext(Select.ItemIndicator, 'itemIndicator')
export const ItemText = withContext(Select.ItemText, 'itemText')
export const Label = withContext(Select.Label, 'label')
export const List = withContext(Select.List, 'list')
export const Positioner = withContext(Select.Positioner, 'positioner')
export const Trigger = withContext(Select.Trigger, 'trigger')
export const ValueText = withContext(Select.ValueText, 'valueText')

export { SelectContext as Context } from '@ark-ui/react/select'
