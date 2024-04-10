import { ark } from '@ark-ui/react/factory'
import { type ReactNode, forwardRef } from 'react'
import { type HTMLStyledProps, styled } from 'styled-system/jsx'
import { skeleton } from 'styled-system/recipes'

const StyledSkeleton = styled(ark.div, skeleton)

export interface SkeletonProps extends HTMLStyledProps<'div'> {
  children?: ReactNode
  /**
   *
   * @default false
   */
  isLoaded?: boolean
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>((props, ref) => {
  const { isLoaded, ...rest } = props

  if (isLoaded) {
    return <styled.div animation="fade-in" ref={ref} {...rest} />
  }
  return <StyledSkeleton ref={ref} {...rest} />
})

Skeleton.displayName = 'Skeleton'
