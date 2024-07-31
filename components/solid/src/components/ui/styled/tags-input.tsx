import { type Assign, TagsInput } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type TagsInputVariantProps, tagsInput } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(tagsInput)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, TagsInput.RootProviderBaseProps>, TagsInputVariantProps>
>(TagsInput.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, TagsInput.RootBaseProps>, TagsInputVariantProps>
>(TagsInput.Root, 'root')

export const ClearTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, TagsInput.ClearTriggerBaseProps>
>(TagsInput.ClearTrigger, 'clearTrigger')

export const Control = withContext<Assign<HTMLStyledProps<'div'>, TagsInput.ControlBaseProps>>(
  TagsInput.Control,
  'control',
)

export const Input = withContext<Assign<HTMLStyledProps<'input'>, TagsInput.InputBaseProps>>(
  TagsInput.Input,
  'input',
)

export const ItemDeleteTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, TagsInput.ItemDeleteTriggerBaseProps>
>(TagsInput.ItemDeleteTrigger, 'itemDeleteTrigger')

export const ItemInput = withContext<
  Assign<HTMLStyledProps<'input'>, TagsInput.ItemInputBaseProps>
>(TagsInput.ItemInput, 'itemInput')

export const ItemPreview = withContext<
  Assign<HTMLStyledProps<'div'>, TagsInput.ItemPreviewBaseProps>
>(TagsInput.ItemPreview, 'itemPreview')

export const Item = withContext<Assign<HTMLStyledProps<'div'>, TagsInput.ItemBaseProps>>(
  TagsInput.Item,
  'item',
)

export const ItemText = withContext<Assign<HTMLStyledProps<'span'>, TagsInput.ItemTextBaseProps>>(
  TagsInput.ItemText,
  'itemText',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, TagsInput.LabelBaseProps>>(
  TagsInput.Label,
  'label',
)

export {
  TagsInputContext as Context,
  TagsInputHiddenInput as HiddenInput,
} from '@ark-ui/solid'
