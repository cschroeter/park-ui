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
    itemPreview: 'tagsInput__itemPreview',
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
        itemPreview: 'tagsInput__itemPreview--size_md',
        itemInput: 'tagsInput__itemInput--size_md',
        itemText: 'tagsInput__itemText--size_md',
        itemDeleteTrigger: 'tagsInput__itemDeleteTrigger--size_md',
      },
    },
  },
})
const { withProvider, withContext } = createStyleContext(styles)

const Root = withProvider(ArkTagsInput.Root, 'root')
const ClearTrigger = withContext(ArkTagsInput.ClearTrigger, 'clearTrigger')
const Control = withContext(ArkTagsInput.Control, 'control')
const Input = withContext(ArkTagsInput.Input, 'input')
const Item = withContext(ArkTagsInput.Item, 'item')
const ItemDeleteTrigger = withContext(ArkTagsInput.ItemDeleteTrigger, 'itemDeleteTrigger')
const ItemInput = withContext(ArkTagsInput.ItemInput, 'itemInput')
const ItemPreview = withContext(ArkTagsInput.ItemPreview, 'itemPreview')
const ItemText = withContext(ArkTagsInput.ItemText, 'itemText')
const Label = withContext(ArkTagsInput.Label, 'label')

export {
  ClearTrigger,
  Control,
  Input,
  Item,
  ItemDeleteTrigger,
  ItemInput,
  ItemPreview,
  ItemText,
  Label,
  Root,
}
