import { TagsInput as ArkTagsInput } from '@ark-ui/react/tags-input'
import { styled } from 'styled-system/jsx'
import { tagsInput } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tagsInput)

const Root = withProvider(styled(ArkTagsInput.Root), 'root')
const ClearTrigger = withContext(styled(ArkTagsInput.ClearTrigger), 'clearTrigger')
const Control = withContext(styled(ArkTagsInput.Control), 'control')
const Input = withContext(styled(ArkTagsInput.Input), 'input')
const Item = withContext(styled(ArkTagsInput.Item), 'item')
const ItemDeleteTrigger = withContext(styled(ArkTagsInput.ItemDeleteTrigger), 'itemDeleteTrigger')
const ItemInput = withContext(styled(ArkTagsInput.ItemInput), 'itemInput')
const ItemPreview = withContext(styled(ArkTagsInput.ItemPreview), 'itemPreview')
const ItemText = withContext(styled(ArkTagsInput.ItemText), 'itemText')
const Label = withContext(styled(ArkTagsInput.Label), 'label')

export {
  ClearTrigger,
  Control,
  Input,
  Item,
  ItemDeleteTrigger,
  ItemInput,
  ItemPreview,
  ItemText,
  Label,
  Root,
}
