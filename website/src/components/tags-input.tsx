'use client'
import {
  TagsInput as ArkTagsInput,
  type TagsInputProps as ArkTagsInputProps,
} from '@ark-ui/react/tags-input'
import { styled } from 'styled-system/jsx'
import { tagsInput, type TagsInputVariantProps } from 'styled-system/recipes'

export * from '@ark-ui/react/tags-input'

export type TagsInputProps = TagsInputVariantProps & ArkTagsInputProps
export const TagsInput = styled(ArkTagsInput, tagsInput)
