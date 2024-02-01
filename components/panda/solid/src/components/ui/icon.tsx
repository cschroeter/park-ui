import { ark } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { icon } from 'styled-system/recipes'

export const Icon = styled(ark.div, icon)
export interface IconProps extends ComponentProps<typeof Icon> {}
