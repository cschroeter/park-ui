import { ark } from '@ark-ui/react/factory'
import { styled } from '@park-ui/styled-system/jsx'
import { badge } from '@park-ui/styled-system/recipes'
import type { ComponentProps } from '@park-ui/styled-system/types'

export type BadgeProps = ComponentProps<typeof Badge>
export const Badge = styled(ark.div, badge)
