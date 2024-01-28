import { ark, type HTMLArkProps } from '@ark-ui/react/factory'
import { forwardRef, type ReactNode } from 'react'

export interface SkeletonProps extends HTMLArkProps<'div'> {
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
    return <ark.div className="animate-fade-in" ref={ref} {...rest} />
  }
  return <ark.div ref={ref} {...rest} />
})

Skeleton.displayName = 'Skeleton'
