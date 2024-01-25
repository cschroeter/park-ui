import { TagsInput as ArkTagsInput } from '@ark-ui/react/tags-input'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'tagsInput',
  defaultVariants: { size: 'md' },
  slots: {
    root: 'tagsInput__root',
    label: 'tagsInput__label',
    control: 'tagsInput__control',
    input: 'tagsInput__input',
    clearTrigger: 'tagsInput__clearTrigger',
    item: 'tagsInput__item',
    itemInput: 'tagsInput__itemInput',
    itemText: 'tagsInput__itemText',
    itemDeleteTrigger: 'tagsInput__itemDeleteTrigger',
  },
  variants: {
    size: {
      md: {
        root: 'tagsInput__root--size_md',
        label: 'tagsInput__label--size_md',
        control: 'tagsInput__control--size_md',
        input: 'tagsInput__input--size_md',
        clearTrigger: 'tagsInput__clearTrigger--size_md',
        item: 'tagsInput__item--size_md',
        itemInput: 'tagsInput__itemInput--size_md',
        itemText: 'tagsInput__itemText--size_md',
        itemDeleteTrigger: 'tagsInput__itemDeleteTrigger--size_md',
      },
    },
  },
})
const { withProvider, withContext } = createStyleContext(styles)

const TagsInput = withProvider(ArkTagsInput.Root, 'root')
const TagsInputClearTrigger = withContext(ArkTagsInput.ClearTrigger, 'clearTrigger')
const TagsInputControl = withContext(ArkTagsInput.Control, 'control')
const TagsInputInput = withContext(ArkTagsInput.Input, 'input')
const TagsInputItem = withContext(ArkTagsInput.Item, 'item')
const TagsInputItemDeleteTrigger = withContext(ArkTagsInput.ItemDeleteTrigger, 'itemDeleteTrigger')
const TagsInputItemInput = withContext(ArkTagsInput.ItemInput, 'itemInput')
const TagsInputItemText = withContext(ArkTagsInput.ItemText, 'itemText')
const TagsInputLabel = withContext(ArkTagsInput.Label, 'label')

const Root = TagsInput
const ClearTrigger = TagsInputClearTrigger
const Control = TagsInputControl
const Input = TagsInputInput
const Item = TagsInputItem
const ItemDeleteTrigger = TagsInputItemDeleteTrigger
const ItemInput = TagsInputItemInput
const ItemText = TagsInputItemText
const Label = TagsInputLabel

export {
  ClearTrigger,
  Control,
  Input,
  Item,
  ItemDeleteTrigger,
  ItemInput,
  ItemText,
  Label,
  Root,
  TagsInput,
  TagsInputClearTrigger,
  TagsInputControl,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDeleteTrigger,
  TagsInputItemInput,
  TagsInputItemText,
  TagsInputLabel,
}
