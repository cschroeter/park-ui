'use client'
import { forwardRef } from 'react'
import { type HTMLStyledProps, styled } from 'styled-system/jsx'
import { AbsoluteCenter } from './absolute-center'
import { Spinner } from './spinner'

export interface LoaderProps extends HTMLStyledProps<'span'> {
  /**
   * Whether the loader is visible
   * @default true
   */
  visible?: boolean | undefined
  /**
   * The spinner to display when loading
   */
  spinner?: React.ReactNode | undefined
  /**
   * The placement of the spinner
   * @default "start"
   */
  spinnerPlacement?: 'start' | 'end' | undefined
  /**
   * The text to display when loading
   */
  text?: React.ReactNode | undefined

  children?: React.ReactNode
}

const Span = styled('span')

export const Loader = forwardRef<HTMLSpanElement, LoaderProps>(function Loader(props, ref) {
  const {
    spinner = <Spinner size="inherit" borderWidth="0.125em" color="inherit" />,
    spinnerPlacement = 'start',
    children,
    text,
    visible = true,
    ...rest
  } = props

  if (!visible) return children

  if (text) {
    return (
      <Span ref={ref} display="contents" {...rest}>
        {spinnerPlacement === 'start' && spinner}
        {text}
        {spinnerPlacement === 'end' && spinner}
      </Span>
    )
  }

  if (spinner) {
    return (
      <Span ref={ref} display="contents" {...rest}>
        <AbsoluteCenter display="inline-flex">{spinner}</AbsoluteCenter>
        <Span visibility="hidden" display="contents">
          {children}
        </Span>
      </Span>
    )
  }

  return (
    <Span ref={ref} display="contents" {...rest}>
      {children}
    </Span>
  )
})
