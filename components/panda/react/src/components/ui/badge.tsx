import { ark } from '@ark-ui/react/factory'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { badge } from 'styled-system/recipes'

export const Badge = styled(ark.div, badge)
export interface BadgeProps extends HTMLStyledProps<typeof Badge> {}
