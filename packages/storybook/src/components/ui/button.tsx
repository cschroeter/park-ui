import { ark, type HTMLArkProps } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'
import { button, type ButtonVariantProps } from 'styled-system/recipes'

export type ButtonProps = ButtonVariantProps & HTMLArkProps<'button'>
export const Button = styled(ark.button, button)
