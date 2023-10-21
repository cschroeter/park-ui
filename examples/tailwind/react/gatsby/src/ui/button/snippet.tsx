import { ark, type HTMLArkProps } from '@ark-ui/react'
import { type VariantProps } from 'tailwind-variants'
import { styled } from '../../lib/styled'
import { buttonStyles } from './recipe'

type ButtonVariantProps = VariantProps<typeof buttonStyles>
export type ButtonProps = ButtonVariantProps & HTMLArkProps<'button'>

export const Button = styled<ButtonProps>(ark.button, buttonStyles)
