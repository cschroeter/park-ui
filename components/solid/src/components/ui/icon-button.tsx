import { ark, type HTMLArkProps } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { iconButton, type IconButtonVariantProps } from 'styled-system/recipes'

export type IconButtonProps = IconButtonVariantProps & HTMLArkProps<'button'>
export const IconButton = styled(ark.button, iconButton)
