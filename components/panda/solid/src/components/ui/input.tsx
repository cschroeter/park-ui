import { ark } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { input } from 'styled-system/recipes'

export const Input = styled(ark.input, input)
export interface InputProps extends ComponentProps<typeof Input> {}
