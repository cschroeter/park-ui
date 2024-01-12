import { TagsInput as ArkTagsInput } from '@ark-ui/solid'
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
export const TagsInputItemText = withContext(styled(ArkTagsInput.ItemText), 'itemText')
export const TagsInputLabel = withContext(styled(ArkTagsInput.Label), 'label')

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

export type TagsInputProps = typeof TagsInputRoot
export type TagsInputClearTriggerProps = typeof TagsInputClearTrigger
export type TagsInputControlProps = typeof TagsInputControl
export type TagsInputInputProps = typeof TagsInputInput
export type TagsInputItemProps = typeof TagsInputItem
export type TagsInputItemDeleteTriggerProps = typeof TagsInputItemDeleteTrigger
export type TagsInputItemInputProps = typeof TagsInputItemInput
export type TagsInputItemTextProps = typeof TagsInputItemText
export type TagsInputLabelProps = typeof TagsInputLabel
