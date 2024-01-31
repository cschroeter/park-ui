import { RadioGroup as ArkRadioButtonGroup } from '@ark-ui/react/radio-group'
import { styled } from 'styled-system/jsx'
import { radioButtonGroup } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(radioButtonGroup)

const Root = withProvider(styled(ArkRadioButtonGroup.Root), 'root')
const Indicator = withContext(styled(ArkRadioButtonGroup.Indicator), 'indicator')
const Item = withContext(styled(ArkRadioButtonGroup.Item), 'item')
const ItemControl = withContext(styled(ArkRadioButtonGroup.ItemControl), 'itemControl')
const ItemText = withContext(styled(ArkRadioButtonGroup.ItemText), 'itemText')
const Label = withContext(styled(ArkRadioButtonGroup.Label), 'label')

export { Indicator, Item, ItemControl, ItemText, Label, Root }
