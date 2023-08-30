import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { alert, type AlertVariantProps } from 'styled-system/recipes'

export type AlertProps = AlertVariantProps & ComponentProps<'div'>
export const Alert = styled('div', alert)
