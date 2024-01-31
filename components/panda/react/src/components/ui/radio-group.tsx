import { RadioGroup } from '@ark-ui/react/radio-group'
import { styled } from 'styled-system/jsx'
import { radioGroup } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(radioGroup)

const Root = withProvider(styled(RadioGroup.Root), 'root')
const Indicator = withContext(styled(RadioGroup.Indicator), 'indicator')
const Item = withContext(styled(RadioGroup.Item), 'item')
const ItemControl = withContext(styled(RadioGroup.ItemControl), 'itemControl')
const ItemText = withContext(styled(RadioGroup.ItemText), 'itemText')
const Label = withContext(styled(RadioGroup.Label), 'label')

export { Indicator, Item, ItemControl, ItemText, Label, Root }
