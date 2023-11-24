import { ark, type HTMLArkProps } from '@ark-ui/react'
import { type VariantProps } from 'tailwind-variants'
import { styled } from '~/lib/styled'
import { inputStyles } from './recipe'

type InputVariantProps = VariantProps<typeof inputStyles>
export type InputProps = Omit<HTMLArkProps<'input'>, keyof InputVariantProps> & InputVariantProps

// @ts-ignore
export const Input = styled<InputProps>(ark.input, inputStyles)
