import { ark, type HTMLArkProps } from '@ark-ui/react'
import { type VariantProps } from 'tailwind-variants'
import { styled } from '~/lib/styled'
import { kbdStyles } from './recipe'

type KbdVariantProps = VariantProps<typeof kbdStyles>
export type KbdProps = KbdVariantProps & HTMLArkProps<'kbd'>

export const Kbd = styled<KbdProps>(ark.kbd, kbdStyles)
