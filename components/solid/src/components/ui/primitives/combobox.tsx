import { type Assign, Combobox } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type ComboboxVariantProps, combobox } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withRootProvider, withContext } = createStyleContext(combobox)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withRootProvider<
  Assign<
    Assign<HTMLStyledProps<'div'>, Combobox.RootProviderBaseProps<Combobox.CollectionItem>>,
    ComboboxVariantProps
  >
>(Combobox.RootProvider)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider<
  Assign<
    Assign<HTMLStyledProps<'div'>, Combobox.RootBaseProps<Combobox.CollectionItem>>,
    ComboboxVariantProps
  >
>(Combobox.Root)

export const ClearTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, Combobox.ClearTriggerProps>
>(Combobox.ClearTrigger, 'clearTrigger')

export const Content = withContext<Assign<HTMLStyledProps<'div'>, Combobox.ContentProps>>(
  Combobox.Content,
  'content',
)

export const Control = withContext<Assign<HTMLStyledProps<'div'>, Combobox.ControlProps>>(
  Combobox.Control,
  'control',
)

export const Input = withContext<Assign<HTMLStyledProps<'input'>, Combobox.InputProps>>(
  Combobox.Input,
  'input',
)

export const ItemGroupLabel = withContext<
  Assign<HTMLStyledProps<'div'>, Combobox.ItemGroupLabelProps>
>(Combobox.ItemGroupLabel, 'itemGroupLabel')

export const ItemGroup = withContext<Assign<HTMLStyledProps<'div'>, Combobox.ItemGroupProps>>(
  Combobox.ItemGroup,
  'itemGroup',
)

export const ItemIndicator = withContext<
  Assign<HTMLStyledProps<'div'>, Combobox.ItemIndicatorProps>
>(Combobox.ItemIndicator, 'itemIndicator')

export const Item = withContext<Assign<HTMLStyledProps<'div'>, Combobox.ItemProps>>(
  Combobox.Item,
  'item',
)

export const ItemText = withContext<Assign<HTMLStyledProps<'span'>, Combobox.ItemTextProps>>(
  Combobox.ItemText,
  'itemText',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, Combobox.LabelProps>>(
  Combobox.Label,
  'label',
)

export const List = withContext<Assign<HTMLStyledProps<'div'>, Combobox.ListProps>>(
  Combobox.List,
  'list',
)

export const Positioner = withContext<Assign<HTMLStyledProps<'div'>, Combobox.PositionerProps>>(
  Combobox.Positioner,
  'positioner',
)

export const Trigger = withContext<Assign<HTMLStyledProps<'button'>, Combobox.TriggerProps>>(
  Combobox.Trigger,
  'trigger',
)

export { ComboboxContext as Context } from '@ark-ui/solid'

export type {
  ComboboxHighlightChangeDetails as HighlightChangeDetails,
  ComboboxInputValueChangeDetails as InputValueChangeDetails,
  ComboboxOpenChangeDetails as OpenChangeDetails,
  ComboboxValueChangeDetails as ValueChangeDetails,
} from '@ark-ui/react/combobox'
