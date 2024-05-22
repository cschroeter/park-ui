import { type Assign, type HTMLArkProps, ark } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { type IconButtonVariantProps, iconButton } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'

export interface IconButtonProps
  extends Assign<JsxStyleProps, HTMLArkProps<'button'>>,
    IconButtonVariantProps {}
export const IconButton = styled(ark.button, iconButton)
