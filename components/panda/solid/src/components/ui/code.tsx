import { ark } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { code } from 'styled-system/recipes'

export const Code = styled(ark.code, code)
export interface CodeProps extends ComponentProps<typeof Code> {}
