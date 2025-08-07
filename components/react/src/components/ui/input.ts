import { Field } from '@ark-ui/react/field'
import { styled } from '@park-ui/styled-system/jsx'
import { input } from '@park-ui/styled-system/recipes'
import type { ComponentProps } from '@park-ui/styled-system/types'

export type InputProps = ComponentProps<typeof Input>
export const Input = styled(Field.Input, input)
