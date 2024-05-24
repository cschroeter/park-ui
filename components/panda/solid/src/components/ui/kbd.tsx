import { type Assign, type HTMLArkProps, ark } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { type KbdVariantProps, kbd } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'

export interface KbdProps extends Assign<JsxStyleProps, HTMLArkProps<'kbd'>>, KbdVariantProps {}
export const Kbd = styled(ark.kbd, kbd)
