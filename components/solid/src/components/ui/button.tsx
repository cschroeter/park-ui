import { ark } from '@ark-ui/solid'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { button } from 'styled-system/recipes'

export const Button = styled(ark.button, button)
export interface ButtonProps extends HTMLStyledProps<typeof Button> {}
