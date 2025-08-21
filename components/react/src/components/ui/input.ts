import { Field } from '@ark-ui/react/field'
import { styled } from 'styled-system/jsx'
import { input } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'

export type InputProps = ComponentProps<typeof Input>
export const Input = styled(Field.Input, input)
