import { ark } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'
import { link } from 'styled-system/recipes'

export type LinkProps = typeof Link
export const Link = styled(ark.a, link)
