import type { Assign } from '@ark-ui/react'
import { type ElementType, forwardRef } from 'react'
import { type HTMLStyledProps, styled } from 'styled-system/jsx'
import { type TextVariantProps, text } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'

const StyledHeading = styled('h2', text)

export type Headingprops = ComponentProps<typeof Heading>
export const Heading = forwardRef<
  HTMLHeadingElement,
  Assign<Assign<HTMLStyledProps<'h2'>, TextVariantProps>, { as?: ElementType }>
>((props, ref) => <StyledHeading ref={ref} variant="heading" {...props} />)

Heading.displayName = 'Heading'
