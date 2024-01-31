import { Select as ArkSelect } from '@ark-ui/react/select'
import { styled } from 'styled-system/jsx'
import { select } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(select)

const Root = withProvider(styled(ArkSelect.Root), 'root')
const ClearTrigger = withContext(styled(ArkSelect.ClearTrigger), 'clearTrigger')
const Content = withContext(styled(ArkSelect.Content), 'content')
const Control = withContext(styled(ArkSelect.Control), 'control')
const Indicator = withContext(styled(ArkSelect.Indicator), 'indicator')
const Item = withContext(styled(ArkSelect.Item), 'item')
const ItemGroup = withContext(styled(ArkSelect.ItemGroup), 'itemGroup')
const ItemGroupLabel = withContext(styled(ArkSelect.ItemGroupLabel), 'itemGroupLabel')
const ItemIndicator = withContext(styled(ArkSelect.ItemIndicator), 'itemIndicator')
const ItemText = withContext(styled(ArkSelect.ItemText), 'itemText')
const Label = withContext(styled(ArkSelect.Label), 'label')
const Positioner = withContext(styled(ArkSelect.Positioner), 'positioner')
const Trigger = withContext(styled(ArkSelect.Trigger), 'trigger')
const ValueText = withContext(styled(ArkSelect.ValueText), 'valueText')

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
