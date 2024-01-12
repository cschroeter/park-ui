import { ark } from '@ark-ui/solid'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { kbd } from 'styled-system/recipes'

export const Kbd = styled(ark.kbd, kbd)
export interface KbdProps extends HTMLStyledProps<typeof Kbd> {}
