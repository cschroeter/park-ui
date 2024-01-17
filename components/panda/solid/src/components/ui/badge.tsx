import { ark } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { badge } from 'styled-system/recipes'

export const Badge = styled(ark.div, badge)
export interface BadgeProps extends ComponentProps<typeof Badge> {}
