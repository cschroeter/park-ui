import { ark, type HTMLArkProps } from '@ark-ui/react'
import { type VariantProps } from 'tailwind-variants'
import { styled } from '~/lib/styled'
import { textareaStyles } from './recipe'

type TextareaVariantProps = VariantProps<typeof textareaStyles>
export type TextareaProps = TextareaVariantProps & HTMLArkProps<'textarea'>

export const Textarea = styled<TextareaProps>(ark.textarea, textareaStyles)
