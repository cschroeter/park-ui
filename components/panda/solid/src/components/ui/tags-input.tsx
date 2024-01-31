import { TagsInput } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { tagsInput } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tagsInput)

const Root = withProvider(styled(TagsInput.Root), 'root')
const ClearTrigger = withContext(styled(TagsInput.ClearTrigger), 'clearTrigger')
const Control = withContext(styled(TagsInput.Control), 'control')
const Input = withContext(styled(TagsInput.Input), 'input')
const Item = withContext(styled(TagsInput.Item), 'item')
const ItemDeleteTrigger = withContext(styled(TagsInput.ItemDeleteTrigger), 'itemDeleteTrigger')
const ItemInput = withContext(styled(TagsInput.ItemInput), 'itemInput')
const ItemPreview = withContext(styled(TagsInput.ItemPreview), 'itemPreview')
const ItemText = withContext(styled(TagsInput.ItemText), 'itemText')
const Label = withContext(styled(TagsInput.Label), 'label')

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
