import { ark } from '@ark-ui/solid'
import { children, mergeProps, splitProps, type JSX } from 'solid-js'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { skeleton } from 'styled-system/recipes'

const StyledSkeleton = styled(ark.div, skeleton)
export interface SkeletonProps extends HTMLStyledProps<'div'> {
  children?: JSX.Element
  /**
   * Show loading animation.
   * @default true
   */
  loading?: boolean
}

export const Skeleton = (props: SkeletonProps) => {
  props = mergeProps({ loading: true }, props)
  const [localProps, restProps] = splitProps(props, ['children', 'loading'])
  const getChildren = children(() => localProps.children)

  return localProps.loading ? <StyledSkeleton {...restProps} /> : getChildren()
}
