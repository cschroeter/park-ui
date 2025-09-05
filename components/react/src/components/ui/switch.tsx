'use client'
import { Switch } from '@ark-ui/react/switch'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { switchRecipe } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(switchRecipe)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(Switch.Root, 'root')
export const RootProvider = withProvider(Switch.RootProvider, 'root')
export const Control = withContext(Switch.Control, 'control')
export const Label = withContext(Switch.Label, 'label')
export const Thumb = withContext(Switch.Thumb, 'thumb')
export const HiddenInput = Switch.HiddenInput

export { SwitchContext as Context } from '@ark-ui/react/switch'
