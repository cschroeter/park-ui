import { TagsInput, type Assign } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type TagsInputVariantProps, tagsInput } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tagsInput)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, TagsInput.RootProviderProps>, TagsInputVariantProps>
>(TagsInput.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, TagsInput.RootProps>, TagsInputVariantProps>
>(TagsInput.Root, 'root')

export const ClearTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, TagsInput.ClearTriggerProps>
>(TagsInput.ClearTrigger, 'clearTrigger')

export const Control = withContext<Assign<HTMLStyledProps<'div'>, TagsInput.ControlProps>>(
  TagsInput.Control,
  'control',
)

export const Input = withContext<Assign<HTMLStyledProps<'input'>, TagsInput.InputProps>>(
  TagsInput.Input,
  'input',
)

export const ItemDeleteTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, TagsInput.ItemDeleteTriggerProps>
>(TagsInput.ItemDeleteTrigger, 'itemDeleteTrigger')

export const ItemInput = withContext<Assign<HTMLStyledProps<'input'>, TagsInput.ItemInputProps>>(
  TagsInput.ItemInput,
  'itemInput',
)

export const ItemPreview = withContext<Assign<HTMLStyledProps<'div'>, TagsInput.ItemPreviewProps>>(
  TagsInput.ItemPreview,
  'itemPreview',
)

export const Item = withContext<Assign<HTMLStyledProps<'div'>, TagsInput.ItemProps>>(
  TagsInput.Item,
  'item',
)

export const ItemText = withContext<Assign<HTMLStyledProps<'span'>, TagsInput.ItemTextProps>>(
  TagsInput.ItemText,
  'itemText',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, TagsInput.LabelProps>>(
  TagsInput.Label,
  'label',
)

export {
  TagsInputContext as Context,
  TagsInputHiddenInput as HiddenInput,
} from '@ark-ui/solid'
