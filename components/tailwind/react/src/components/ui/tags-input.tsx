import { TagsInput } from '@ark-ui/react/tags-input'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const tagsInput = tv(
  {
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
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(tagsInput)

export interface RootProps extends TagsInput.RootProps, VariantProps<typeof tagsInput> {}
export const Root = withProvider<HTMLDivElement, RootProps>(TagsInput.Root, 'root')

export const ClearTrigger = withContext<HTMLButtonElement, TagsInput.ClearTriggerProps>(
  TagsInput.ClearTrigger,
  'clearTrigger',
)

export const Control = withContext<HTMLDivElement, TagsInput.ControlProps>(
  TagsInput.Control,
  'control',
)

export const Input = withContext<HTMLInputElement, TagsInput.InputProps>(TagsInput.Input, 'input')

export const ItemDeleteTrigger = withContext<HTMLButtonElement, TagsInput.ItemDeleteTriggerProps>(
  TagsInput.ItemDeleteTrigger,
  'itemDeleteTrigger',
)

export const ItemInput = withContext<HTMLInputElement, TagsInput.ItemInputProps>(
  TagsInput.ItemInput,
  'itemInput',
)

export const ItemPreview = withContext<HTMLDivElement, TagsInput.ItemPreviewProps>(
  TagsInput.ItemPreview,
  'itemPreview',
)

export const Item = withContext<HTMLDivElement, TagsInput.ItemProps>(TagsInput.Item, 'item')

export const ItemText = withContext<HTMLSpanElement, TagsInput.ItemTextProps>(
  TagsInput.ItemText,
  'itemText',
)

export const Label = withContext<HTMLLabelElement, TagsInput.LabelProps>(TagsInput.Label, 'label')

export {
  TagsInputContext as Context,
  TagsInputHiddenInput as HiddenInput,
  type TagsInputContextProps as ContextProps,
  type TagsInputHiddenInputProps as HiddenInputProps,
} from '@ark-ui/react/tags-input'
