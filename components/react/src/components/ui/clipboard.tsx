'use client'
import { Clipboard } from '@ark-ui/react/clipboard'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { type ComponentProps, forwardRef } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { clipboard } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(clipboard)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(Clipboard.Root, 'root')
export const RootProvider = withProvider(Clipboard.RootProvider, 'root')
export const Control = withContext(Clipboard.Control, 'control')
export const Input = withContext(Clipboard.Input, 'input')
export const Label = withContext(Clipboard.Label, 'label')
export const Trigger = withContext(Clipboard.Trigger, 'trigger')

export { ClipboardContext as Context } from '@ark-ui/react/clipboard'

type IndicatorProps = ComponentProps<typeof StyledIndicator>

const StyledIndicator = withContext(Clipboard.Indicator, 'indicator')

export const Indicator = forwardRef<HTMLDivElement, IndicatorProps>(function Indicator(props, ref) {
  return (
    <StyledIndicator ref={ref} copied={<CheckIcon />} {...props}>
      <CopyIcon />
    </StyledIndicator>
  )
})

export const CopyText = forwardRef<HTMLDivElement, IndicatorProps>(function CopyText(props, ref) {
  return (
    <StyledIndicator ref={ref} copied="Copied" {...props}>
      Copy
    </StyledIndicator>
  )
})
