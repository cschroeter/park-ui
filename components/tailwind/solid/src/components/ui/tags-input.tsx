import { TagsInput } from '@ark-ui/solid'
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

const Root = withProvider(TagsInput.Root, 'root')
const ClearTrigger = withContext(TagsInput.ClearTrigger, 'clearTrigger')
const Control = withContext(TagsInput.Control, 'control')
const Input = withContext(TagsInput.Input, 'input')
const Item = withContext(TagsInput.Item, 'item')
const ItemDeleteTrigger = withContext(TagsInput.ItemDeleteTrigger, 'itemDeleteTrigger')
const ItemInput = withContext(TagsInput.ItemInput, 'itemInput')
const ItemPreview = withContext(TagsInput.ItemPreview, 'itemPreview')
const ItemText = withContext(TagsInput.ItemText, 'itemText')
const Label = withContext(TagsInput.Label, 'label')

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
