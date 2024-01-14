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

export const TagsInputRoot = withProvider(ArkTagsInput.Root, 'root')
export const TagsInputClearTrigger = withContext(ArkTagsInput.ClearTrigger, 'clearTrigger')
export const TagsInputControl = withContext(ArkTagsInput.Control, 'control')
export const TagsInputInput = withContext(ArkTagsInput.Input, 'input')
export const TagsInputItem = withContext(ArkTagsInput.Item, 'item')
export const TagsInputItemDeleteTrigger = withContext(
  ArkTagsInput.ItemDeleteTrigger,
  'itemDeleteTrigger',
)
export const TagsInputItemInput = withContext(ArkTagsInput.ItemInput, 'itemInput')
export const TagsInputItemText = withContext(ArkTagsInput.ItemText, 'itemText')
export const TagsInputLabel = withContext(ArkTagsInput.Label, 'label')

export const TagsInput = Object.assign(TagsInputRoot, {
  Root: TagsInputRoot,
  ClearTrigger: TagsInputClearTrigger,
  Control: TagsInputControl,
  Input: TagsInputInput,
  Item: TagsInputItem,
  ItemDeleteTrigger: TagsInputItemDeleteTrigger,
  ItemInput: TagsInputItemInput,
  ItemText: TagsInputItemText,
  Label: TagsInputLabel,
})
