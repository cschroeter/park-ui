import { ark } from '@ark-ui/react/factory'
import { forwardRef, type ReactNode } from 'react'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { skeleton } from 'styled-system/recipes'

const StyledSkeleton = styled(ark.div, skeleton)
export interface SkeletonProps extends HTMLStyledProps<'div'> {
  children?: ReactNode
  /**
   * Show loading animation.
   * @default true
   */
  loading?: boolean
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>((props, ref) => {
  const { children, loading = true, ...rest } = props

  return loading ? <StyledSkeleton ref={ref} {...rest} /> : children
})
