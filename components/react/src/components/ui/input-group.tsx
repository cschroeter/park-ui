'use client'
import { ark } from '@ark-ui/react/factory'
import { type ComponentProps, forwardRef, type ReactNode } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { inputGroup } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(inputGroup)

type RootProps = ComponentProps<typeof Root>
const Root = withProvider(ark.div, 'root')
const Element = withContext(ark.div, 'element')

export interface InputGroupProps extends RootProps {
  startElement?: ReactNode | undefined
  endElement?: ReactNode | undefined
}

export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  function InputGroup(props, ref) {
    const { startElement, endElement, children, ...rest } = props

    return (
      <Root ref={ref} {...rest}>
        {startElement && (
          <Element insetInlineStart="0" top="0">
            {startElement}
          </Element>
        )}
        {children}
        {endElement && (
          <Element insetInlineEnd="0" top="0">
            {endElement}
          </Element>
        )}
      </Root>
    )
  },
)
