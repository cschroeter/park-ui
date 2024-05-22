import { type JSX, Show, splitProps } from 'solid-js'
import { type HTMLStyledProps, styled } from 'styled-system/jsx'
import { skeleton } from 'styled-system/recipes'

const StyledSkeleton = styled('div', skeleton)

export interface SkeletonProps extends HTMLStyledProps<'div'> {
  children?: JSX.Element
  /**
   * @default false
   */
  isLoaded?: boolean
}

export const Skeleton = (props: SkeletonProps) => {
  const [localProps, skeletonProps] = splitProps(props, ['isLoaded'])

  return (
    <Show when={localProps.isLoaded} fallback={<StyledSkeleton {...skeletonProps} />}>
      <styled.div animation="fade-in" {...skeletonProps} />
    </Show>
  )
}
