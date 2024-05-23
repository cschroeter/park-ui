import { Combobox } from '@ark-ui/react/combobox'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const combobox = tv(
  {
    base: 'combobox',
    defaultVariants: { size: 'md' },
    slots: {
      root: 'combobox__root',
      label: 'combobox__label',
      input: 'combobox__input',
      positioner: 'combobox__positioner',
      control: 'combobox__control',
      trigger: 'combobox__trigger',
      content: 'combobox__content',
      clearTrigger: 'combobox__clearTrigger',
      item: 'combobox__item',
      itemText: 'combobox__itemText',
      itemIndicator: 'combobox__itemIndicator',
      itemGroup: 'combobox__itemGroup',
      itemGroupLabel: 'combobox__itemGroupLabel',
    },
    variants: {
      size: {
        sm: {
          root: 'combobox__root--size_sm',
          label: 'combobox__label--size_sm',
          input: 'combobox__input--size_sm',
          positioner: 'combobox__positioner--size_sm',
          control: 'combobox__control--size_sm',
          trigger: 'combobox__trigger--size_sm',
          content: 'combobox__content--size_sm',
          clearTrigger: 'combobox__clearTrigger--size_sm',
          item: 'combobox__item--size_sm',
          itemText: 'combobox__itemText--size_sm',
          itemIndicator: 'combobox__itemIndicator--size_sm',
          itemGroup: 'combobox__itemGroup--size_sm',
          itemGroupLabel: 'combobox__itemGroupLabel--size_sm',
        },
        md: {
          root: 'combobox__root--size_md',
          label: 'combobox__label--size_md',
          input: 'combobox__input--size_md',
          positioner: 'combobox__positioner--size_md',
          control: 'combobox__control--size_md',
          trigger: 'combobox__trigger--size_md',
          content: 'combobox__content--size_md',
          clearTrigger: 'combobox__clearTrigger--size_md',
          item: 'combobox__item--size_md',
          itemText: 'combobox__itemText--size_md',
          itemIndicator: 'combobox__itemIndicator--size_md',
          itemGroup: 'combobox__itemGroup--size_md',
          itemGroupLabel: 'combobox__itemGroupLabel--size_md',
        },
        lg: {
          root: 'combobox__root--size_lg',
          label: 'combobox__label--size_lg',
          input: 'combobox__input--size_lg',
          positioner: 'combobox__positioner--size_lg',
          control: 'combobox__control--size_lg',
          trigger: 'combobox__trigger--size_lg',
          content: 'combobox__content--size_lg',
          clearTrigger: 'combobox__clearTrigger--size_lg',
          item: 'combobox__item--size_lg',
          itemText: 'combobox__itemText--size_lg',
          itemIndicator: 'combobox__itemIndicator--size_lg',
          itemGroup: 'combobox__itemGroup--size_lg',
          itemGroupLabel: 'combobox__itemGroupLabel--size_lg',
        },
      },
    },
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(combobox)

export interface RootProps
  extends Combobox.RootProps<Combobox.CollectionItem>,
    VariantProps<typeof combobox> {}
export const Root = withProvider<HTMLDivElement, RootProps>(Combobox.Root, 'root')

export const ClearTrigger = withContext<HTMLButtonElement, Combobox.ClearTriggerProps>(
  Combobox.ClearTrigger,
  'clearTrigger',
)

export const Content = withContext<HTMLDivElement, Combobox.ContentProps>(
  Combobox.Content,
  'content',
)

export const Control = withContext<HTMLDivElement, Combobox.ControlProps>(
  Combobox.Control,
  'control',
)

export const Input = withContext<HTMLInputElement, Combobox.InputProps>(Combobox.Input, 'input')

export const ItemGroupLabel = withContext<HTMLDivElement, Combobox.ItemGroupLabelProps>(
  Combobox.ItemGroupLabel,
  'itemGroupLabel',
)

export const ItemGroup = withContext<HTMLDivElement, Combobox.ItemGroupProps>(
  Combobox.ItemGroup,
  'itemGroup',
)

export const ItemIndicator = withContext<HTMLDivElement, Combobox.ItemIndicatorProps>(
  Combobox.ItemIndicator,
  'itemIndicator',
)

export const Item = withContext<HTMLDivElement, Combobox.ItemProps>(Combobox.Item, 'item')

export const ItemText = withContext<HTMLDivElement, Combobox.ItemTextProps>(
  Combobox.ItemText,
  'itemText',
)

export const Label = withContext<HTMLLabelElement, Combobox.LabelProps>(Combobox.Label, 'label')

export const Positioner = withContext<HTMLDivElement, Combobox.PositionerProps>(
  Combobox.Positioner,
  'positioner',
)

export const Trigger = withContext<HTMLButtonElement, Combobox.TriggerProps>(
  Combobox.Trigger,
  'trigger',
)

export {
  ComboboxContext as Context,
  type ComboboxContextProps as ContextProps,
} from '@ark-ui/react/combobox'

export type {
  ComboboxHighlightChangeDetails as HighlightChangeDetails,
  ComboboxInputValueChangeDetails as InputValueChangeDetails,
  ComboboxOpenChangeDetails as OpenChangeDetails,
  ComboboxValueChangeDetails as ValueChangeDetails,
} from '@ark-ui/react/combobox'
