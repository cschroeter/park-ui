import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { forwardRef } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

export interface SkeletonProps extends HTMLArkProps<'div'>, SkeletonVariantProps {
  /**
   *
   * @default false
   */
  isLoaded?: boolean
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>((props, ref) => {
  const { isLoaded, className, ...rest } = props

  if (isLoaded) {
    return <ark.div className="animate-fade-in" ref={ref} {...rest} />
  }
  return <ark.div ref={ref} className={skeleton({ className })} {...rest} />
})

Skeleton.displayName = 'Skeleton'

type SkeletonVariantProps = VariantProps<typeof skeleton>

const skeleton = tv({ base: 'skeleton', variants: {} }, { twMerge: false })
