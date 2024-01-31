import { Combobox } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { combobox } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(combobox)

const Root = withProvider(styled(Combobox.Root), 'root')
const ClearTrigger = withContext(styled(Combobox.ClearTrigger), 'clearTrigger')
const Content = withContext(styled(Combobox.Content), 'content')
const Control = withContext(styled(Combobox.Control), 'control')
const Input = withContext(styled(Combobox.Input), 'input')
const Item = withContext(styled(Combobox.Item), 'item')
const ItemGroup = withContext(styled(Combobox.ItemGroup), 'itemGroup')
const ItemGroupLabel = withContext(styled(Combobox.ItemGroupLabel), 'itemGroupLabel')
const ItemIndicator = withContext(styled(Combobox.ItemIndicator), 'itemIndicator')
const ItemText = withContext(styled(Combobox.ItemText), 'itemText')
const Label = withContext(styled(Combobox.Label), 'label')
const Positioner = withContext(styled(Combobox.Positioner), 'positioner')
const Trigger = withContext(styled(Combobox.Trigger), 'trigger')

export {
  ClearTrigger,
  Content,
  Control,
  Input,
  Item,
  ItemGroup,
  ItemGroupLabel,
  ItemIndicator,
  ItemText,
  Label,
  Positioner,
  Root,
  Trigger,
}
