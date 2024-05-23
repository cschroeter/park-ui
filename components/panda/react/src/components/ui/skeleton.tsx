import type { Assign, HTMLArkProps } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'
import { type ReactNode, forwardRef } from 'react'
import { styled } from 'styled-system/jsx'
import { type SkeletonVariantProps, skeleton } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'

const StyledSkeleton = styled(ark.div, skeleton)

export interface SkeletonProps
  extends Assign<JsxStyleProps, HTMLArkProps<'div'>>,
    SkeletonVariantProps {
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
