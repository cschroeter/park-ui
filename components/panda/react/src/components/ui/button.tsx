import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { styled } from 'styled-system/jsx'
import { button } from 'styled-system/recipes'
import type { Assign, JsxStyleProps } from 'styled-system/types'

export const Button = styled(ark.button, button)
export interface ButtonProps extends Assign<JsxStyleProps, HTMLArkProps<'button'>> {}
