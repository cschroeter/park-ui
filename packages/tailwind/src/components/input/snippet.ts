import { ark, type HTMLArkProps } from '@ark-ui/react'
import { VariantProps } from 'tailwind-variants'
import { styled } from '~/lib/styled'
import { inputStyles } from './recipe'

type InputVariantProps = VariantProps<typeof inputStyles>
export type InputProps = InputVariantProps & HTMLArkProps<'input'>

export const Input = styled<InputProps>(ark.input, inputStyles)
