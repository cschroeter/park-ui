import * as Ark from '@ark-ui/react/tags-input'
import { styled } from 'styled-system/jsx'
import { tagsInput, type TagsInputVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

export * from '@ark-ui/react/tags-input'

const { withProvider, withContext } = createStyleContext(tagsInput)

export type TagsInputProps = Ark.TagsInputProps & TagsInputVariantProps

const TagsInputRoot = withProvider(styled(Ark.TagsInput.Root), 'root')
const TagsInputClearTrigger = withContext(styled(Ark.TagsInput.ClearTrigger), 'clearTrigger')
const TagsInputControl = withContext(styled(Ark.TagsInput.Control), 'control')
const TagsInputInput = withContext(styled(Ark.TagsInput.Input), 'input')
const TagsInputLabel = withContext(styled(Ark.TagsInput.Label), 'label')
const Tag = withContext(styled(Ark.TagsInput.Tag), 'tag')
const TagInput = withContext(styled(Ark.TagsInput.TagInput), 'tagInput')
const TagDeleteTrigger = withContext(styled(Ark.TagsInput.TagDeleteTrigger), 'tagDeleteTrigger')

const TagsInput = Object.assign(TagsInputRoot, {
  Root: TagsInputRoot,
  ClearTrigger: TagsInputClearTrigger,
  Control: TagsInputControl,
  Input: TagsInputInput,
  Label: TagsInputLabel,
  Tag: Tag,
  TagInput: TagInput,
  TagDeleteTrigger: TagDeleteTrigger,
})

export {
  Tag,
  TagDeleteTrigger,
  TagInput,
  TagsInput,
  TagsInputClearTrigger,
  TagsInputControl,
  TagsInputInput,
  TagsInputLabel,
}
