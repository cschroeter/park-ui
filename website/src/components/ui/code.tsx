import { ark } from '@ark-ui/react/factory'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { code } from 'styled-system/recipes'

export const Code = styled(ark.code, code)
export interface CodeProps extends HTMLStyledProps<typeof Code> {}
