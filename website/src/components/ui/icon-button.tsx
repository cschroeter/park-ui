import { ark, type HTMLArkProps } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'
import { iconButton, type IconButtonVariantProps } from 'styled-system/recipes'

export interface IconButtonProps extends HTMLArkProps<'button'>, IconButtonVariantProps {}
export const IconButton = styled(ark.button, iconButton)
