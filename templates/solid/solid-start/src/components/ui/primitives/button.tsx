import { ark } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { button } from 'styled-system/recipes'

export type ButtonProps = ComponentProps<typeof Button>
export const Button = styled(ark.button, button)
