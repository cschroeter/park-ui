import { ark, type HTMLArkProps } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'
import { kbd, type KbdVariantProps } from 'styled-system/recipes'

export type KbdProps = KbdVariantProps & HTMLArkProps<'kbd'>
export const Kbd = styled(ark.kbd, kbd)
