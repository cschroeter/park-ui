'use client'
import { Clipboard } from '@ark-ui/react/clipboard'
import { type ComponentProps, forwardRef, type SVGProps } from 'react'
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
      <CopiedIcon />
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

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <title>Checkmark</title>
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const CopiedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <title>Copy Icon</title>
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
)
