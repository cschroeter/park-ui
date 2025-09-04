'use client'
import { Checkbox } from '@ark-ui/react/checkbox'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { checkbox } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(checkbox)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(Checkbox.Root, 'root')
export const RootProvider = withProvider(Checkbox.RootProvider, 'root')
export const Control = withContext(Checkbox.Control, 'control')
export const Group = withProvider(Checkbox.Group, 'group')
export const Indicator = withContext(Checkbox.Indicator, 'indicator')
export const Label = withContext(Checkbox.Label, 'label')
export const HiddenInput = Checkbox.HiddenInput

export { CheckboxGroupProvider as GroupProvider } from '@ark-ui/react/checkbox'
