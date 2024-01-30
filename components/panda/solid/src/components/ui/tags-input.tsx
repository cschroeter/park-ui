import { TagsInput as ArkTagsInput } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { tagsInput } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tagsInput)

export const TagsInputRoot = withProvider(styled(ArkTagsInput.Root), 'root')
export const TagsInputClearTrigger = withContext(styled(ArkTagsInput.ClearTrigger), 'clearTrigger')
export const TagsInputControl = withContext(styled(ArkTagsInput.Control), 'control')
export const TagsInputInput = withContext(styled(ArkTagsInput.Input), 'input')
export const TagsInputItem = withContext(styled(ArkTagsInput.Item), 'item')
export const TagsInputItemDeleteTrigger = withContext(
  styled(ArkTagsInput.ItemDeleteTrigger),
  'itemDeleteTrigger',
)
export const TagsInputItemInput = withContext(styled(ArkTagsInput.ItemInput), 'itemInput')
export const TagsInputItemPreview = withContext(styled(ArkTagsInput.ItemPreview), 'itemPreview')
export const TagsInputItemText = withContext(styled(ArkTagsInput.ItemText), 'itemText')
export const TagsInputLabel = withContext(styled(ArkTagsInput.Label), 'label')

export const TagsInput = {
  Root: TagsInputRoot,
  ClearTrigger: TagsInputClearTrigger,
  Control: TagsInputControl,
  Input: TagsInputInput,
  Item: TagsInputItem,
  ItemDeleteTrigger: TagsInputItemDeleteTrigger,
  ItemInput: TagsInputItemInput,
  ItemPreview: TagsInputItemPreview,
  ItemText: TagsInputItemText,
  Label: TagsInputLabel,
}

export interface TagsInputRootProps extends ComponentProps<typeof TagsInputRoot> {}
export interface TagsInputClearTriggerProps extends ComponentProps<typeof TagsInputClearTrigger> {}
export interface TagsInputControlProps extends ComponentProps<typeof TagsInputControl> {}
export interface TagsInputInputProps extends ComponentProps<typeof TagsInputInput> {}
export interface TagsInputItemProps extends ComponentProps<typeof TagsInputItem> {}
export interface TagsInputItemDeleteTriggerProps
  extends ComponentProps<typeof TagsInputItemDeleteTrigger> {}
export interface TagsInputItemInputProps extends ComponentProps<typeof TagsInputItemInput> {}
export interface TagsInputItemPreviewProps extends ComponentProps<typeof TagsInputItemPreview> {}
export interface TagsInputItemTextProps extends ComponentProps<typeof TagsInputItemText> {}
export interface TagsInputLabelProps extends ComponentProps<typeof TagsInputLabel> {}
