import { type Assign, type HTMLArkProps, ark } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { type LinkVariantProps, link } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'

export interface LinkProps extends Assign<JsxStyleProps, HTMLArkProps<'a'>>, LinkVariantProps {}
export const Link = styled(ark.a, link)
