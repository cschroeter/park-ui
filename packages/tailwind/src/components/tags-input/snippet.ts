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
export const TagsInputLabel = withContext(Ark.TagsInput.Label, 'label')
export const Tag = withContext(Ark.TagsInput.Tag, 'tag')
export const TagInput = withContext(Ark.TagsInput.TagInput, 'tagInput')
export const TagDeleteTrigger = withContext(Ark.TagsInput.TagDeleteTrigger, 'tagDeleteTrigger')

export const TagsInput = Object.assign(TagsInputRoot, {
  Root: TagsInputRoot,
  ClearTrigger: TagsInputClearTrigger,
  Control: TagsInputControl,
  Input: TagsInputInput,
  Label: TagsInputLabel,
  Tag: Tag,
  TagInput: TagInput,
  TagDeleteTrigger: TagDeleteTrigger,
})
