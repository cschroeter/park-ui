import { type Assign, type HTMLArkProps, ark } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { type IconVariantProps, icon } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'

export interface IconProps extends Assign<JsxStyleProps, HTMLArkProps<'div'>>, IconVariantProps {}
export const Icon = styled(ark.div, icon)
