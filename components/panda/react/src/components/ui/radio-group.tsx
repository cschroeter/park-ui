import { RadioGroup as ArkRadioGroup } from '@ark-ui/react/radio-group'
import type { ComponentProps } from 'react'
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

export interface RadioGroupRootProps extends ComponentProps<typeof Root> {}
export interface RadioGroupIndicatorProps extends ComponentProps<typeof Indicator> {}
export interface RadioGroupItemProps extends ComponentProps<typeof Item> {}
export interface RadioGroupItemControlProps extends ComponentProps<typeof ItemControl> {}
export interface RadioGroupItemTextProps extends ComponentProps<typeof ItemText> {}
export interface RadioGroupLabelProps extends ComponentProps<typeof Label> {}
