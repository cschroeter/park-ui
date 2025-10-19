'use client'
import { RadioGroup } from '@ark-ui/react/radio-group'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { radioGroup } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(radioGroup)

export type RootProps = ComponentProps<typeof Root>
export type ItemProps = ComponentProps<typeof Item>

export const Root = withProvider(RadioGroup.Root, 'root')
export const RootProvider = withProvider(RadioGroup.RootProvider, 'root')
export const Indicator = withContext(RadioGroup.Indicator, 'indicator')
export const Item = withContext(RadioGroup.Item, 'item')
export const ItemControl = withContext(RadioGroup.ItemControl, 'itemControl')
export const ItemText = withContext(RadioGroup.ItemText, 'itemText')
export const Label = withContext(RadioGroup.Label, 'label')
export const ItemHiddenInput = RadioGroup.ItemHiddenInput

export { RadioGroupContext as Context } from '@ark-ui/react/radio-group'
