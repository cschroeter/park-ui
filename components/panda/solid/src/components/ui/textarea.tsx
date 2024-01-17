import { ark } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { textarea } from 'styled-system/recipes'

export const Textarea = styled(ark.textarea, textarea)
export interface TextareaProps extends ComponentProps<typeof Textarea> {}
