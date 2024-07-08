'use client'

import { RadioGroup as ArkRadioButtonGroup } from '@ark-ui/react/radio-group'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { radioButtonGroup } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(radioButtonGroup)

export const Root = withProvider(styled(ArkRadioButtonGroup.Root), 'root')
export const Indicator = withContext(styled(ArkRadioButtonGroup.Indicator), 'indicator')
export const Item = withContext(styled(ArkRadioButtonGroup.Item), 'item')
export const ItemControl = withContext(styled(ArkRadioButtonGroup.ItemControl), 'itemControl')
export const ItemText = withContext(styled(ArkRadioButtonGroup.ItemText), 'itemText')
export const Label = withContext(styled(ArkRadioButtonGroup.Label), 'label')

export interface RootProps extends ComponentProps<typeof Root> {}
export interface IndicatorProps extends ComponentProps<typeof Indicator> {}
export interface ItemProps extends ComponentProps<typeof Item> {}
export interface ItemControlProps extends ComponentProps<typeof ItemControl> {}
export interface ItemTextProps extends ComponentProps<typeof ItemText> {}
export interface LabelProps extends ComponentProps<typeof Label> {}
