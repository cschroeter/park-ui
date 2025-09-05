'use client'
import type { CollectionItem } from '@ark-ui/react/combobox'
import { Combobox } from '@ark-ui/react/combobox'
import { createStyleContext } from 'styled-system/jsx'
import { combobox } from 'styled-system/recipes'
import type {
  Assign,
  ComponentProps,
  JsxHTMLProps,
  RecipeVariantProps,
  UnstyledProps,
} from 'styled-system/types'

const { withProvider, withContext } = createStyleContext(combobox)

interface RootBaseProps<T extends CollectionItem>
  extends Assign<Combobox.RootBaseProps<T>, RecipeVariantProps<typeof combobox>>,
    UnstyledProps {}

interface RootProps<T extends CollectionItem>
  extends JsxHTMLProps<ComponentProps<'div'>, RootBaseProps<T>> {}

type RootComponent = <T extends CollectionItem>(
  props: RootProps<T> & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element

export const Root = withProvider(Combobox.Root, 'root', {
  // @ts-expect-error
  defaultProps: { positioning: { sameWidth: true } },
}) as RootComponent

export const ClearTrigger = withContext(Combobox.ClearTrigger, 'clearTrigger')
export const Content = withContext(Combobox.Content, 'content')
export const Control = withContext(Combobox.Control, 'control')
export const Empty = withContext(Combobox.Empty, 'empty')
export const Input = withContext(Combobox.Input, 'input')
export const Item = withContext(Combobox.Item, 'item')
export const ItemGroup = withContext(Combobox.ItemGroup, 'itemGroup')
export const ItemGroupLabel = withContext(Combobox.ItemGroupLabel, 'itemGroupLabel')
export const ItemIndicator = withContext(Combobox.ItemIndicator, 'itemIndicator')
export const ItemText = withContext(Combobox.ItemText, 'itemText')
export const Label = withContext(Combobox.Label, 'label')
export const List = withContext(Combobox.List, 'list')
export const Positioner = withContext(Combobox.Positioner, 'positioner')
export const Trigger = withContext(Combobox.Trigger, 'trigger')

export { ComboboxContext as Context } from '@ark-ui/react/combobox'
