import { Combobox as ArkCombobox } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
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
})
const { withProvider, withContext } = createStyleContext(styles)

const Combobox = withProvider(ArkCombobox.Root, 'root')
const ComboboxClearTrigger = withContext(ArkCombobox.ClearTrigger, 'clearTrigger')
const ComboboxContent = withContext(ArkCombobox.Content, 'content')
const ComboboxControl = withContext(ArkCombobox.Control, 'control')
const ComboboxInput = withContext(ArkCombobox.Input, 'input')
const ComboboxItem = withContext(ArkCombobox.Item, 'item')
const ComboboxItemGroup = withContext(ArkCombobox.ItemGroup, 'itemGroup')
const ComboboxItemGroupLabel = withContext(ArkCombobox.ItemGroupLabel, 'itemGroupLabel')
const ComboboxItemIndicator = withContext(ArkCombobox.ItemIndicator, 'itemIndicator')
const ComboboxItemText = withContext(ArkCombobox.ItemText, 'itemText')
const ComboboxLabel = withContext(ArkCombobox.Label, 'label')
const ComboboxPositioner = withContext(ArkCombobox.Positioner, 'positioner')
const ComboboxTrigger = withContext(ArkCombobox.Trigger, 'trigger')

const Root = Combobox
const ClearTrigger = ComboboxClearTrigger
const Content = ComboboxContent
const Control = ComboboxControl
const Input = ComboboxInput
const Item = ComboboxItem
const ItemGroup = ComboboxItemGroup
const ItemGroupLabel = ComboboxItemGroupLabel
const ItemIndicator = ComboboxItemIndicator
const ItemText = ComboboxItemText
const Label = ComboboxLabel
const Positioner = ComboboxPositioner
const Trigger = ComboboxTrigger

export {
  ClearTrigger,
  Combobox,
  ComboboxClearTrigger,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxLabel,
  ComboboxPositioner,
  ComboboxTrigger,
  Content,
  Control,
  Input,
  Item,
  ItemGroup,
  ItemGroupLabel,
  ItemIndicator,
  ItemText,
  Label,
  Positioner,
  Root,
  Trigger,
}
