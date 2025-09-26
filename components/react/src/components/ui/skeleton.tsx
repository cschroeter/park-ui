import { ark } from '@ark-ui/react/factory'
import { type ComponentProps, forwardRef } from 'react'
import { Stack, type StackProps, styled } from 'styled-system/jsx'
import { skeleton } from 'styled-system/recipes'

export type SkeletonProps = ComponentProps<typeof Skeleton>
export const Skeleton = styled(ark.div, skeleton)

export type SkeletonCircleProps = ComponentProps<typeof SkeletonCircle>
export const SkeletonCircle = styled(ark.div, skeleton, { defaultProps: { circle: true } })

export interface SkeletonTextProps extends SkeletonProps {
  /**
   * Number of lines to display
   * @default 3
   */
  noOfLines?: number | undefined
  rootProps?: StackProps | undefined
}

export const SkeletonText = forwardRef<HTMLDivElement, SkeletonTextProps>(
  function SkeletonText(props, ref) {
    const { noOfLines = 3, gap, rootProps, ...skeletonProps } = props
    return (
      <Stack ref={ref} gap={gap} width="full" {...rootProps}>
        {[...Array(noOfLines).keys()].map((index) => (
          <Skeleton
            key={index}
            height="4"
            _last={{ maxW: noOfLines === 1 ? '100%' : '80%' }}
            {...skeletonProps}
          />
        ))}
      </Stack>
    )
  },
)
