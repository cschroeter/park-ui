import { ark } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { textarea } from 'styled-system/recipes'

export type TextareaProps = ComponentProps<typeof Textarea>
export const Textarea = styled(ark.textarea, textarea)
