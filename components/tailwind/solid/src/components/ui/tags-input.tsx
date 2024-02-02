import { TagsInput } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
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
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(TagsInput.Root, 'root')
export const ClearTrigger = withContext(TagsInput.ClearTrigger, 'clearTrigger')
export const Control = withContext(TagsInput.Control, 'control')
export const Input = withContext(TagsInput.Input, 'input')
export const Item = withContext(TagsInput.Item, 'item')
export const ItemDeleteTrigger = withContext(TagsInput.ItemDeleteTrigger, 'itemDeleteTrigger')
export const ItemInput = withContext(TagsInput.ItemInput, 'itemInput')
export const ItemPreview = withContext(TagsInput.ItemPreview, 'itemPreview')
export const ItemText = withContext(TagsInput.ItemText, 'itemText')
export const Label = withContext(TagsInput.Label, 'label')

export type RootProps = ComponentProps<typeof Root>
export interface ClearTriggerProps extends ComponentProps<typeof ClearTrigger> {}
export interface ControlProps extends ComponentProps<typeof Control> {}
export interface InputProps extends ComponentProps<typeof Input> {}
export interface ItemProps extends ComponentProps<typeof Item> {}
export interface ItemDeleteTriggerProps extends ComponentProps<typeof ItemDeleteTrigger> {}
export interface ItemInputProps extends ComponentProps<typeof ItemInput> {}
export interface ItemPreviewProps extends ComponentProps<typeof ItemPreview> {}
export interface ItemTextProps extends ComponentProps<typeof ItemText> {}
export interface LabelProps extends ComponentProps<typeof Label> {}
