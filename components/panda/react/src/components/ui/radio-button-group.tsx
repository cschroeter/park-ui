import { RadioGroup as ArkRadioButtonGroup } from '@ark-ui/react/radio-group'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { radioButtonGroup } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(radioButtonGroup)

export const RadioButtonGroupRoot = withProvider(styled(ArkRadioButtonGroup.Root), 'root')
export const RadioButtonGroupIndicator = withContext(
  styled(ArkRadioButtonGroup.Indicator),
  'indicator',
)
export const RadioButtonGroupItem = withContext(styled(ArkRadioButtonGroup.Item), 'item')
export const RadioButtonGroupItemControl = withContext(
  styled(ArkRadioButtonGroup.ItemControl),
  'itemControl',
)
export const RadioButtonGroupItemText = withContext(
  styled(ArkRadioButtonGroup.ItemText),
  'itemText',
)
export const RadioButtonGroupLabel = withContext(styled(ArkRadioButtonGroup.Label), 'label')

export const RadioButtonGroup = {
  Root: RadioButtonGroupRoot,
  Indicator: RadioButtonGroupIndicator,
  Item: RadioButtonGroupItem,
  ItemControl: RadioButtonGroupItemControl,
  ItemText: RadioButtonGroupItemText,
  Label: RadioButtonGroupLabel,
}

export interface RadioButtonGroupRootProps extends ComponentProps<typeof RadioButtonGroupRoot> {}
export interface RadioButtonGroupIndicatorProps
  extends ComponentProps<typeof RadioButtonGroupIndicator> {}
export interface RadioButtonGroupItemProps extends ComponentProps<typeof RadioButtonGroupItem> {}
export interface RadioButtonGroupItemControlProps
  extends ComponentProps<typeof RadioButtonGroupItemControl> {}
export interface RadioButtonGroupItemTextProps
  extends ComponentProps<typeof RadioButtonGroupItemText> {}
export interface RadioButtonGroupLabelProps extends ComponentProps<typeof RadioButtonGroupLabel> {}
