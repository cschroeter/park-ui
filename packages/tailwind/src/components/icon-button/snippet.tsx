import { ark, type HTMLArkProps } from '@ark-ui/react'
import { type VariantProps } from 'tailwind-variants'
import { styled } from '~/lib/styled'
import { iconButtonStyles } from './recipe'

type IconButtonVariantProps = VariantProps<typeof iconButtonStyles>
export interface IconButtonProps extends IconButtonVariantProps, HTMLArkProps<'button'> {}

export const IconButton = styled<IconButtonProps>(ark.button, iconButtonStyles)
