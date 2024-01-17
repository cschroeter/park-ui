import { ark } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { iconButton } from 'styled-system/recipes'

export const IconButton = styled(ark.button, iconButton)
export interface IconButtonProps extends ComponentProps<typeof IconButton> {}
