import { TagsInput as ArkTagsInput } from '@ark-ui/solid'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { tagsInput } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tagsInput)

const TagsInput = withProvider(styled(ArkTagsInput.Root), 'root')
const TagsInputClearTrigger = withContext(styled(ArkTagsInput.ClearTrigger), 'clearTrigger')
const TagsInputControl = withContext(styled(ArkTagsInput.Control), 'control')
const TagsInputInput = withContext(styled(ArkTagsInput.Input), 'input')
const TagsInputItem = withContext(styled(ArkTagsInput.Item), 'item')
const TagsInputItemDeleteTrigger = withContext(
  styled(ArkTagsInput.ItemDeleteTrigger),
  'itemDeleteTrigger',
)
const TagsInputItemInput = withContext(styled(ArkTagsInput.ItemInput), 'itemInput')
const TagsInputItemText = withContext(styled(ArkTagsInput.ItemText), 'itemText')
const TagsInputLabel = withContext(styled(ArkTagsInput.Label), 'label')

const Root = TagsInput
const ClearTrigger = TagsInputClearTrigger
const Control = TagsInputControl
const Input = TagsInputInput
const Item = TagsInputItem
const ItemDeleteTrigger = TagsInputItemDeleteTrigger
const ItemInput = TagsInputItemInput
const ItemText = TagsInputItemText
const Label = TagsInputLabel

export {
  ClearTrigger,
  Control,
  Input,
  Item,
  ItemDeleteTrigger,
  ItemInput,
  ItemText,
  Label,
  Root,
  TagsInput,
  TagsInputClearTrigger,
  TagsInputControl,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDeleteTrigger,
  TagsInputItemInput,
  TagsInputItemText,
  TagsInputLabel,
}

export interface TagsInputProps extends HTMLStyledProps<typeof TagsInput> {}
export interface TagsInputClearTriggerProps extends HTMLStyledProps<typeof TagsInputClearTrigger> {}
export interface TagsInputControlProps extends HTMLStyledProps<typeof TagsInputControl> {}
export interface TagsInputInputProps extends HTMLStyledProps<typeof TagsInputInput> {}
export interface TagsInputItemProps extends HTMLStyledProps<typeof TagsInputItem> {}
export interface TagsInputItemDeleteTriggerProps
  extends HTMLStyledProps<typeof TagsInputItemDeleteTrigger> {}
export interface TagsInputItemInputProps extends HTMLStyledProps<typeof TagsInputItemInput> {}
export interface TagsInputItemTextProps extends HTMLStyledProps<typeof TagsInputItemText> {}
export interface TagsInputLabelProps extends HTMLStyledProps<typeof TagsInputLabel> {}
