import { ark } from '@ark-ui/react'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { iconButton } from 'styled-system/recipes'

export const IconButton = styled(ark.button, iconButton)
export interface IconButtonProps extends HTMLStyledProps<typeof IconButton> {}
