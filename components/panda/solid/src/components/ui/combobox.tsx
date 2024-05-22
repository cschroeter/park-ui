import { type Assign, Combobox } from '@ark-ui/solid'
import { type ComboboxVariantProps, combobox } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(combobox)

export interface RootProps
  extends Assign<JsxStyleProps, Combobox.RootProps<Combobox.CollectionItem>>,
    ComboboxVariantProps {}
export const Root = withProvider<RootProps>(Combobox.Root, 'root')

export const ClearTrigger = withContext<Assign<JsxStyleProps, Combobox.ClearTriggerProps>>(
  Combobox.ClearTrigger,
  'clearTrigger',
)

export const Content = withContext<Assign<JsxStyleProps, Combobox.ContentProps>>(
  Combobox.Content,
  'content',
)

export const Control = withContext<Assign<JsxStyleProps, Combobox.ControlProps>>(
  Combobox.Control,
  'control',
)

export const Input = withContext<Assign<JsxStyleProps, Combobox.InputProps>>(
  Combobox.Input,
  'input',
)

export const ItemGroupLabel = withContext<Assign<JsxStyleProps, Combobox.ItemGroupLabelProps>>(
  Combobox.ItemGroupLabel,
  'itemGroupLabel',
)

export const ItemGroup = withContext<Assign<JsxStyleProps, Combobox.ItemGroupProps>>(
  Combobox.ItemGroup,
  'itemGroup',
)

export const ItemIndicator = withContext<Assign<JsxStyleProps, Combobox.ItemIndicatorProps>>(
  Combobox.ItemIndicator,
  'itemIndicator',
)

export const Item = withContext<Assign<JsxStyleProps, Combobox.ItemProps>>(Combobox.Item, 'item')

export const ItemText = withContext<Assign<JsxStyleProps, Combobox.ItemTextProps>>(
  Combobox.ItemText,
  'itemText',
)

export const Label = withContext<Assign<JsxStyleProps, Combobox.LabelProps>>(
  Combobox.Label,
  'label',
)

export const Positioner = withContext<Assign<JsxStyleProps, Combobox.PositionerProps>>(
  Combobox.Positioner,
  'positioner',
)

export const Trigger = withContext<Assign<JsxStyleProps, Combobox.TriggerProps>>(
  Combobox.Trigger,
  'trigger',
)

export {
  ComboboxContext as Context,
  type ComboboxContextProps as ContextProps,
} from '@ark-ui/solid'

export type {
  ComboboxHighlightChangeDetails as HighlightChangeDetails,
  ComboboxInputValueChangeDetails as InputValueChangeDetails,
  ComboboxOpenChangeDetails as OpenChangeDetails,
  ComboboxValueChangeDetails as ValueChangeDetails,
} from '@ark-ui/solid'
