import * as Ark from '@ark-ui/react/tags-input'
import { createStyleContext } from '~/lib/create-style-context'
import { tagsInputStyles } from './recipe'
export * from '@ark-ui/react/tags-input'

export type TagsInputProps = React.ComponentProps<typeof TagsInput>

const { withProvider, withContext } = createStyleContext(tagsInputStyles)

const TagsInputRoot = withProvider(Ark.TagsInput.Root, 'root')
export const TagsInputClearTrigger = withContext(Ark.TagsInput.ClearTrigger, 'clearTrigger')
export const TagsInputControl = withContext(Ark.TagsInput.Control, 'control')
export const TagsInputInput = withContext(Ark.TagsInput.Input, 'input')
export const TagsInputItem = withContext(Ark.TagsInput.Item, 'item')
export const TagsInputItemDeleteTrigger = withContext(
  Ark.TagsInput.ItemDeleteTrigger,
  'itemDeleteTrigger',
)
export const TagsInputItemInput = withContext(Ark.TagsInput.ItemInput, 'itemInput')
export const TagsInputItemText = withContext(Ark.TagsInput.ItemText, 'itemText')
export const TagsInputLabel = withContext(Ark.TagsInput.Label, 'label')

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
