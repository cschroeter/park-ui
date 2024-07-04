import { type Assign, TagsInput } from '@ark-ui/solid'
import { type TagsInputVariantProps, tagsInput } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tagsInput)

export interface RootProps
  extends Assign<JsxStyleProps, TagsInput.RootProps>,
    TagsInputVariantProps {}
export const Root = withProvider<RootProps>(TagsInput.Root, 'root')

export const ClearTrigger = withContext<Assign<JsxStyleProps, TagsInput.ClearTriggerProps>>(
  TagsInput.ClearTrigger,
  'clearTrigger',
)

export const Control = withContext<Assign<JsxStyleProps, TagsInput.ControlProps>>(
  TagsInput.Control,
  'control',
)

export const Input = withContext<Assign<JsxStyleProps, TagsInput.InputProps>>(
  TagsInput.Input,
  'input',
)

export const ItemDeleteTrigger = withContext<
  Assign<JsxStyleProps, TagsInput.ItemDeleteTriggerProps>
>(TagsInput.ItemDeleteTrigger, 'itemDeleteTrigger')

export const ItemInput = withContext<Assign<JsxStyleProps, TagsInput.ItemInputProps>>(
  TagsInput.ItemInput,
  'itemInput',
)

export const ItemPreview = withContext<Assign<JsxStyleProps, TagsInput.ItemPreviewProps>>(
  TagsInput.ItemPreview,
  'itemPreview',
)

export const Item = withContext<Assign<JsxStyleProps, TagsInput.ItemProps>>(TagsInput.Item, 'item')

export const ItemText = withContext<Assign<JsxStyleProps, TagsInput.ItemTextProps>>(
  TagsInput.ItemText,
  'itemText',
)

export const Label = withContext<Assign<JsxStyleProps, TagsInput.LabelProps>>(
  TagsInput.Label,
  'label',
)

export {
  TagsInputContext as Context,
  TagsInputHiddenInput as HiddenInput,
  type TagsInputContextProps as ContextProps,
  type TagsInputHiddenInputProps as HiddenInputProps,
} from '@ark-ui/solid'
