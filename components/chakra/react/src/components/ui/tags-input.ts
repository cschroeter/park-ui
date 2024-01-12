import { TagsInput as ArkTagsInput } from '@ark-ui/react/tags-input'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext('TagsInput')

const TagsInput = withProvider(chakra(ArkTagsInput.Root), 'root')
const TagsInputClearTrigger = withContext(chakra(ArkTagsInput.ClearTrigger), 'clearTrigger')
const TagsInputControl = withContext(chakra(ArkTagsInput.Control), 'control')
const TagsInputInput = withContext(chakra(ArkTagsInput.Input), 'input')
const TagsInputItem = withContext(chakra(ArkTagsInput.Item), 'item')
const TagsInputItemDeleteTrigger = withContext(
  chakra(ArkTagsInput.ItemDeleteTrigger),
  'itemDeleteTrigger',
)
const TagsInputItemInput = withContext(chakra(ArkTagsInput.ItemInput), 'itemInput')
const TagsInputItemText = withContext(chakra(ArkTagsInput.ItemText), 'itemText')
const TagsInputLabel = withContext(chakra(ArkTagsInput.Label), 'label')

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

export interface TagsInputProps extends HTMLChakraProps<typeof TagsInput> {}
export interface TagsInputClearTriggerProps extends HTMLChakraProps<typeof TagsInputClearTrigger> {}
export interface TagsInputControlProps extends HTMLChakraProps<typeof TagsInputControl> {}
export interface TagsInputInputProps extends HTMLChakraProps<typeof TagsInputInput> {}
export interface TagsInputItemProps extends HTMLChakraProps<typeof TagsInputItem> {}
export interface TagsInputItemDeleteTriggerProps
  extends HTMLChakraProps<typeof TagsInputItemDeleteTrigger> {}
export interface TagsInputItemInputProps extends HTMLChakraProps<typeof TagsInputItemInput> {}
export interface TagsInputItemTextProps extends HTMLChakraProps<typeof TagsInputItemText> {}
export interface TagsInputLabelProps extends HTMLChakraProps<typeof TagsInputLabel> {}
