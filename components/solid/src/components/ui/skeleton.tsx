import { ark } from '@ark-ui/solid/factory'
import { type ComponentProps, For, splitProps } from 'solid-js'
import { Stack, type StackProps, styled } from 'styled-system/jsx'
import { skeleton } from 'styled-system/recipes'

export type SkeletonProps = ComponentProps<typeof Skeleton>
export const Skeleton = styled(ark.div, skeleton)

export type SkeletonCircleProps = ComponentProps<typeof SkeletonCircle>
export const SkeletonCircle = styled(ark.div, skeleton, { defaultProps: () => ({ circle: true }) })

export interface SkeletonTextProps extends SkeletonProps {
  /**
   * Number of lines to display
   * @default 3
   */
  noOfLines?: number | undefined
  rootProps?: StackProps | undefined
}

export const SkeletonText = (props: SkeletonTextProps) => {
  const [local, skeletonProps] = splitProps(props, ['noOfLines', 'gap', 'rootProps'])
  const noOfLines = () => local.noOfLines ?? 3

  return (
    <Stack gap={local.gap} width="full" {...local.rootProps}>
      <For each={[...Array(noOfLines()).keys()]}>
        {() => (
          <Skeleton
            height="4"
            _last={{ maxW: noOfLines() === 1 ? '100%' : '80%' }}
            {...skeletonProps}
          />
        )}
      </For>
    </Stack>
  )
}
