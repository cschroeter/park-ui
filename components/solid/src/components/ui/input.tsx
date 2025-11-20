import { Field } from '@ark-ui/solid/field'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { input } from 'styled-system/recipes'

export type InputProps = ComponentProps<typeof Input>
export const Input = styled(Field.Input, input)
