import { ark } from '@ark-ui/react/factory'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { skeleton } from 'styled-system/recipes'

export const Skeleton = styled(ark.div, skeleton)
export interface SkeletonProps extends HTMLStyledProps<'div'> {}
