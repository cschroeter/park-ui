import { ark } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { kbd } from 'styled-system/recipes'

export const Kbd = styled(ark.kbd, kbd)
export interface KbdProps extends ComponentProps<typeof Kbd> {}
