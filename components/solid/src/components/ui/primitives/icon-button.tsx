import { ark } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { iconButton } from 'styled-system/recipes'

export type IconButtonProps = ComponentProps<typeof IconButton>
export const IconButton = styled(ark.button, iconButton)
