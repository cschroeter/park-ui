import { ark } from '@ark-ui/solid'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { link } from 'styled-system/recipes'

export const Link = styled(ark.a, link)
export interface LinkProps extends HTMLStyledProps<typeof Link> {}
