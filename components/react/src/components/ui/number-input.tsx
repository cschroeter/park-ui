'use client'
import { NumberInput } from '@ark-ui/react/number-input'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { numberInput } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(numberInput)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(NumberInput.Root, 'root')
export const RootProvider = withProvider(NumberInput.RootProvider, 'root')
export const DecrementTrigger = withContext(NumberInput.DecrementTrigger, 'decrementTrigger', {
  defaultProps: { children: <ChevronDownIcon /> },
})
export const IncrementTrigger = withContext(NumberInput.IncrementTrigger, 'incrementTrigger', {
  defaultProps: { children: <ChevronUpIcon /> },
})
export const Input = withContext(NumberInput.Input, 'input')
export const Label = withContext(NumberInput.Label, 'label')
export const Scrubber = withContext(NumberInput.Scrubber, 'scrubber')
export const ValueText = withContext(NumberInput.ValueText, 'valueText')
export const Control = withContext(NumberInput.Control, 'control', {
  defaultProps: {
    children: (
      <>
        <IncrementTrigger />
        <DecrementTrigger />
      </>
    ),
  },
})

export { NumberInputContext as Context } from '@ark-ui/react/number-input'
