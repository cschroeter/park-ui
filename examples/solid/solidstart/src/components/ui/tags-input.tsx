import * as Ark from '@ark-ui/solid/tags-input'
import { styled } from 'styled-system/jsx'
import { tagsInput, type TagsInputVariantProps } from 'styled-system/recipes'

import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tagsInput)

export * from '@ark-ui/solid/tags-input'
export type TagsInputProps = Ark.TagsInputProps & TagsInputVariantProps

const TagsInputRoot = withProvider(styled(Ark.TagsInput), 'root')
export const TagsInputClearTrigger = withContext(styled(Ark.TagsInputClearTrigger), 'clearTrigger')
export const TagsInputControl = withContext(styled(Ark.TagsInputControl), 'control')
export const TagsInputInput = withContext(styled(Ark.TagsInput), 'input')
export const TagsInputLabel = withContext(styled(Ark.TagsInputLabel), 'label')
export const Tag = withContext(styled(Ark.Tag), 'tag')
export const TagInput = withContext(styled(Ark.TagInput), 'tagInput')
export const TagDeleteTrigger = withContext(styled(Ark.TagsInputClearTrigger), 'tagDeleteTrigger')

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
