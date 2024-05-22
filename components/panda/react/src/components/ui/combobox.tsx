import type { Assign } from '@ark-ui/react'
import { Combobox } from '@ark-ui/react/combobox'
import { type ComboboxVariantProps, combobox } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withRootProvider, withContext } = createStyleContext(combobox)

export interface RootProps
  extends Assign<JsxStyleProps, Combobox.RootProps<Combobox.CollectionItem>>,
    ComboboxVariantProps {}
export const Root = withRootProvider<RootProps>(Combobox.Root)

export interface ClearTriggerProps extends Assign<JsxStyleProps, Combobox.ClearTriggerProps> {}
export const ClearTrigger = withContext<HTMLButtonElement, ClearTriggerProps>(
  Combobox.ClearTrigger,
  'clearTrigger',
)

export interface ContentProps extends Assign<JsxStyleProps, Combobox.ContentProps> {}
export const Content = withContext<HTMLDivElement, ContentProps>(Combobox.Content, 'content')

export interface ControlProps extends Assign<JsxStyleProps, Combobox.ControlProps> {}
export const Control = withContext<HTMLDivElement, ControlProps>(Combobox.Control, 'control')

export interface InputProps extends Assign<JsxStyleProps, Combobox.InputProps> {}
export const Input = withContext<HTMLInputElement, InputProps>(Combobox.Input, 'input')

export interface ItemGroupLabelProps extends Assign<JsxStyleProps, Combobox.ItemGroupLabelProps> {}
export const ItemGroupLabel = withContext<HTMLDivElement, ItemGroupLabelProps>(
  Combobox.ItemGroupLabel,
  'itemGroupLabel',
)

export interface ItemGroupProps extends Assign<JsxStyleProps, Combobox.ItemGroupProps> {}
export const ItemGroup = withContext<HTMLDivElement, ItemGroupProps>(
  Combobox.ItemGroup,
  'itemGroup',
)

export interface ItemIndicatorProps extends Assign<JsxStyleProps, Combobox.ItemIndicatorProps> {}
export const ItemIndicator = withContext<HTMLDivElement, ItemIndicatorProps>(
  Combobox.ItemIndicator,
  'itemIndicator',
)

export interface ItemProps extends Assign<JsxStyleProps, Combobox.ItemProps> {}
export const Item = withContext<HTMLDivElement, ItemProps>(Combobox.Item, 'item')

export interface ItemTextProps extends Assign<JsxStyleProps, Combobox.ItemTextProps> {}
export const ItemText = withContext<HTMLDivElement, ItemTextProps>(Combobox.ItemText, 'itemText')

export interface LabelProps extends Assign<JsxStyleProps, Combobox.LabelProps> {}
export const Label = withContext<HTMLLabelElement, LabelProps>(Combobox.Label, 'label')

export interface PositionerProps extends Assign<JsxStyleProps, Combobox.PositionerProps> {}
export const Positioner = withContext<HTMLDivElement, PositionerProps>(
  Combobox.Positioner,
  'positioner',
)

export interface TriggerProps extends Assign<JsxStyleProps, Combobox.TriggerProps> {}
export const Trigger = withContext<HTMLButtonElement, TriggerProps>(Combobox.Trigger, 'trigger')

export {
  ComboboxContext as Context,
  type ComboboxContextProps as ContextProps,
} from '@ark-ui/react/combobox'
