import { Field } from '@ark-ui/solid/field'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { textarea } from 'styled-system/recipes'

export type TextareaProps = ComponentProps<typeof Textarea>
export const Textarea = styled(Field.Textarea, textarea)
