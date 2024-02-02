import { ark, type HTMLArkProps } from '@ark-ui/react/factory'
import { forwardRef, type ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export interface SkeletonProps extends HTMLArkProps<'div'>, SkeletonVariantProps {
  children?: ReactNode
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
  return <ark.div ref={ref} className={styles({ className })} {...rest} />
})

Skeleton.displayName = 'Skeleton'

type SkeletonVariantProps = VariantProps<typeof styles>

const styles = tv({ base: 'skeleton', variants: {} }, { twMerge: false })
