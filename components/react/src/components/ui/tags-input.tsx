'use client'
import { TagsInput } from '@ark-ui/react/tags-input'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { tagsInput } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(tagsInput)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(TagsInput.Root, 'root')
export const RootProvider = withProvider(TagsInput.RootProvider, 'root')
export const ClearTrigger = withContext(TagsInput.ClearTrigger, 'clearTrigger')
export const Control = withContext(TagsInput.Control, 'control')
export const HiddenInput = TagsInput.HiddenInput
export const Input = withContext(TagsInput.Input, 'input')
export const Item = withContext(TagsInput.Item, 'item')
export const ItemDeleteTrigger = withContext(TagsInput.ItemDeleteTrigger, 'itemDeleteTrigger')
export const ItemInput = withContext(TagsInput.ItemInput, 'itemInput')
export const ItemPreview = withContext(TagsInput.ItemPreview, 'itemPreview')
export const ItemText = withContext(TagsInput.ItemText, 'itemText')
export const Label = withContext(TagsInput.Label, 'label')

export { TagsInputContext as Context } from '@ark-ui/react/tags-input'
