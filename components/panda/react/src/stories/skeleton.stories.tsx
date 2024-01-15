import type { Meta } from '@storybook/react'
import { Skeleton, type SkeletonProps } from '~/components/ui/skeleton'

const meta: Meta<SkeletonProps> = {
  title: 'Components/Skeleton',
  component: Skeleton,
}

export default meta

export const Base = () => (
  <Skeleton width={'100px'} height={'20px'}>
    Label
  </Skeleton>
)
export const DontShow = () => <Skeleton loading={false}>Label</Skeleton>
