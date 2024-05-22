import type { Assign } from '@ark-ui/react'
import { TagsInput } from '@ark-ui/react/tags-input'
import { type TagsInputVariantProps, tagsInput } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tagsInput)

export interface RootProps
  extends Assign<JsxStyleProps, TagsInput.RootProps>,
    TagsInputVariantProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(TagsInput.Root, 'root')

export interface ClearTriggerProps extends Assign<JsxStyleProps, TagsInput.ClearTriggerProps> {}
export const ClearTrigger = withContext<HTMLButtonElement, ClearTriggerProps>(
  TagsInput.ClearTrigger,
  'clearTrigger',
)

export interface ControlProps extends Assign<JsxStyleProps, TagsInput.ControlProps> {}
export const Control = withContext<HTMLDivElement, ControlProps>(TagsInput.Control, 'control')

export interface InputProps extends Assign<JsxStyleProps, TagsInput.InputProps> {}
export const Input = withContext<HTMLInputElement, InputProps>(TagsInput.Input, 'input')

export interface ItemDeleteTriggerProps
  extends Assign<JsxStyleProps, TagsInput.ItemDeleteTriggerProps> {}
export const ItemDeleteTrigger = withContext<HTMLButtonElement, ItemDeleteTriggerProps>(
  TagsInput.ItemDeleteTrigger,
  'itemDeleteTrigger',
)

export interface ItemInputProps extends Assign<JsxStyleProps, TagsInput.ItemInputProps> {}
export const ItemInput = withContext<HTMLInputElement, ItemInputProps>(
  TagsInput.ItemInput,
  'itemInput',
)

export interface ItemPreviewProps extends Assign<JsxStyleProps, TagsInput.ItemPreviewProps> {}
export const ItemPreview = withContext<HTMLDivElement, ItemPreviewProps>(
  TagsInput.ItemPreview,
  'itemPreview',
)

export interface ItemProps extends Assign<JsxStyleProps, TagsInput.ItemProps> {}
export const Item = withContext<HTMLDivElement, ItemProps>(TagsInput.Item, 'item')

export interface ItemTextProps extends Assign<JsxStyleProps, TagsInput.ItemTextProps> {}
export const ItemText = withContext<HTMLSpanElement, ItemTextProps>(TagsInput.ItemText, 'itemText')

export interface LabelProps extends Assign<JsxStyleProps, TagsInput.LabelProps> {}
export const Label = withContext<HTMLLabelElement, LabelProps>(TagsInput.Label, 'label')

export {
  TagsInputContext as Context,
  TagsInputHiddenInput as HiddenInput,
  type TagsInputContextProps as ContextProps,
  type TagsInputHiddenInputProps as HiddenInputProps,
} from '@ark-ui/react/tags-input'
