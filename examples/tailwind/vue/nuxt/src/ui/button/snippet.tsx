import type { VariantProps } from 'tailwind-variants'
import { styled } from '../../lib/styled'
import NativeButton from './native.vue'
import { buttonStyles } from './recipe'

type ButtonVariantProps = VariantProps<typeof buttonStyles>
export type ButtonProps = ButtonVariantProps //& HTMLArkProps<'button'>;

export const Button = styled<ButtonProps>(NativeButton, buttonStyles)
