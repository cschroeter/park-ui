'use client'
import { ark } from '@ark-ui/react/factory'
import { forwardRef, type ReactNode } from 'react'
import { createStyleContext, type HTMLStyledProps } from 'styled-system/jsx'
import { type InputGroupVariantProps, inputGroup } from 'styled-system/recipes'
import { Group } from './group'

const { withProvider, withContext } = createStyleContext(inputGroup)

export const Addon = withContext(ark.div, 'addon')
export const Element = withContext(ark.div, 'element')

export type RootProps = HTMLStyledProps<'div'> & InputGroupVariantProps
const StyledRoot = withProvider(ark.div, 'root')

export const Root = forwardRef<HTMLDivElement, RootProps>(function Root(props, ref) {
  const { variant, size, ...rest } = props
  return (
    <StyledRoot ref={ref} variant={variant} size={size} asChild>
      <Group attached {...rest} />
    </StyledRoot>
  )
})

export interface ControlProps extends HTMLStyledProps<'div'> {
  startElement?: ReactNode
  endElement?: ReactNode
}
const StyledControl = withContext(ark.div, 'control')

export const Control = forwardRef<HTMLDivElement, ControlProps>(function Control(props, ref) {
  return (
    <StyledControl ref={ref}>
      {props.startElement && (
        <Element insetInlineStart="0" top="0">
          {props.startElement}
        </Element>
      )}
      {props.children}
      {props.endElement && (
        <Element insetInlineEnd="0" top="0">
          {props.endElement}
        </Element>
      )}
    </StyledControl>
  )
})
