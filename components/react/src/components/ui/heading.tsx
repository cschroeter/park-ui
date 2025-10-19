import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { type HeadingVariantProps, heading } from 'styled-system/recipes'
import type { StyledComponent } from 'styled-system/types'

type Props = HeadingVariantProps & { as?: React.ElementType }

export type HeadingProps = ComponentProps<typeof Heading>
export const Heading = styled('h2', heading) as StyledComponent<'h2', Props>
