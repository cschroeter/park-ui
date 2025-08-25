'use client'
import { Clipboard } from '@ark-ui/react/clipboard'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { clipboard } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(clipboard)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(Clipboard.Root, 'root')
export const RootProvider = withProvider(Clipboard.RootProvider, 'root')
export const Control = withContext(Clipboard.Control, 'control')
export const Indicator = withContext(Clipboard.Indicator, 'indicator')
export const Input = withContext(Clipboard.Input, 'input')
export const Label = withContext(Clipboard.Label, 'label')
export const Trigger = withContext(Clipboard.Trigger, 'trigger')
