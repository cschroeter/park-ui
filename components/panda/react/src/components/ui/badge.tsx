import type { Assign } from '@ark-ui/react'
import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { styled } from 'styled-system/jsx'
import { badge } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'

export const Badge = styled(ark.div, badge)
export interface BadgeProps extends Assign<JsxStyleProps, HTMLArkProps<'div'>> {}
