import { type Assign, type HTMLArkProps, ark } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { type BadgeVariantProps, badge } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'

export interface BadgeProps extends Assign<JsxStyleProps, HTMLArkProps<'div'>>, BadgeVariantProps {}
export const Badge = styled(ark.div, badge)
