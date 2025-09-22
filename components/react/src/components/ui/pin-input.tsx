'use client'
import { PinInput } from '@ark-ui/react/pin-input'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { pinInput } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(pinInput)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(PinInput.Root, 'root', {
  forwardProps: ['mask'],
})
export const RootProvider = withProvider(PinInput.RootProvider, 'root')
export const Control = withContext(PinInput.Control, 'control')
export const HiddenInput = PinInput.HiddenInput
export const Input = withContext(PinInput.Input, 'input')
export const Label = withContext(PinInput.Label, 'label')

export { PinInputContext as Context } from '@ark-ui/react/pin-input'
