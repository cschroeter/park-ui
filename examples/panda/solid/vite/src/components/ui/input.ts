import { ark, HTMLArkProps } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { input, InputVariantProps } from 'styled-system/recipes'

export type InputProps = InputVariantProps & HTMLArkProps<'input'>
export const Input = styled(ark.input, input)
