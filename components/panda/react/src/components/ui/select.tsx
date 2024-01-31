import { Select } from '@ark-ui/react/select'
import { styled } from 'styled-system/jsx'
import { select } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(select)

const Root = withProvider(styled(Select.Root), 'root')
const ClearTrigger = withContext(styled(Select.ClearTrigger), 'clearTrigger')
const Content = withContext(styled(Select.Content), 'content')
const Control = withContext(styled(Select.Control), 'control')
const Indicator = withContext(styled(Select.Indicator), 'indicator')
const Item = withContext(styled(Select.Item), 'item')
const ItemGroup = withContext(styled(Select.ItemGroup), 'itemGroup')
const ItemGroupLabel = withContext(styled(Select.ItemGroupLabel), 'itemGroupLabel')
const ItemIndicator = withContext(styled(Select.ItemIndicator), 'itemIndicator')
const ItemText = withContext(styled(Select.ItemText), 'itemText')
const Label = withContext(styled(Select.Label), 'label')
const Positioner = withContext(styled(Select.Positioner), 'positioner')
const Trigger = withContext(styled(Select.Trigger), 'trigger')
const ValueText = withContext(styled(Select.ValueText), 'valueText')

export {
  ClearTrigger,
  Content,
  Control,
  Indicator,
  Item,
  ItemGroup,
  ItemGroupLabel,
  ItemIndicator,
  ItemText,
  Label,
  Positioner,
  Root,
  Trigger,
  ValueText,
}
