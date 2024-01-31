import { TagsInput as ArkTagsInput } from '@ark-ui/react/tags-input'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { tagsInput } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tagsInput)

const Root = withProvider(styled(ArkTagsInput.Root), 'root')
const ClearTrigger = withContext(styled(ArkTagsInput.ClearTrigger), 'clearTrigger')
const Control = withContext(styled(ArkTagsInput.Control), 'control')
const Input = withContext(styled(ArkTagsInput.Input), 'input')
const Item = withContext(styled(ArkTagsInput.Item), 'item')
const ItemDeleteTrigger = withContext(styled(ArkTagsInput.ItemDeleteTrigger), 'itemDeleteTrigger')
const ItemInput = withContext(styled(ArkTagsInput.ItemInput), 'itemInput')
const ItemPreview = withContext(styled(ArkTagsInput.ItemPreview), 'itemPreview')
const ItemText = withContext(styled(ArkTagsInput.ItemText), 'itemText')
const Label = withContext(styled(ArkTagsInput.Label), 'label')

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

export interface TagsInputRootProps extends ComponentProps<typeof Root> {}
export interface TagsInputClearTriggerProps extends ComponentProps<typeof ClearTrigger> {}
export interface TagsInputControlProps extends ComponentProps<typeof Control> {}
export interface TagsInputInputProps extends ComponentProps<typeof Input> {}
export interface TagsInputItemProps extends ComponentProps<typeof Item> {}
export interface TagsInputItemDeleteTriggerProps extends ComponentProps<typeof ItemDeleteTrigger> {}
export interface TagsInputItemInputProps extends ComponentProps<typeof ItemInput> {}
export interface TagsInputItemPreviewProps extends ComponentProps<typeof ItemPreview> {}
export interface TagsInputItemTextProps extends ComponentProps<typeof ItemText> {}
export interface TagsInputLabelProps extends ComponentProps<typeof Label> {}
