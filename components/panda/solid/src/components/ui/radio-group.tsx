import { RadioGroup as ArkRadioGroup } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { radioGroup } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(radioGroup)

const Root = withProvider(styled(ArkRadioGroup.Root), 'root')
const Indicator = withContext(styled(ArkRadioGroup.Indicator), 'indicator')
const Item = withContext(styled(ArkRadioGroup.Item), 'item')
const ItemControl = withContext(styled(ArkRadioGroup.ItemControl), 'itemControl')
const ItemText = withContext(styled(ArkRadioGroup.ItemText), 'itemText')
const Label = withContext(styled(ArkRadioGroup.Label), 'label')

export { Indicator, Item, ItemControl, ItemText, Label, Root }
