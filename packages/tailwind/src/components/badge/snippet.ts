import { ark, type HTMLArkProps } from '@ark-ui/react'
import { type VariantProps } from 'tailwind-variants'
import { styled } from '~/lib/styled'
import { badgeStyles } from './recipe'

type BadgeVariantProps = VariantProps<typeof badgeStyles>
export type BadgeProps = BadgeVariantProps & HTMLArkProps<'div'>

export const Badge = styled<BadgeProps>(ark.div, badgeStyles)
