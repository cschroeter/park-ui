import { ark, type HTMLArkProps } from '@ark-ui/react'
import { VariantProps } from 'tailwind-variants'
import { styled } from '~/lib/styled'
import { codeStyles } from './recipe'

type CodeVariantProps = VariantProps<typeof codeStyles>
export type CodeProps = CodeVariantProps & HTMLArkProps<'code'>

export const Code = styled<CodeProps>(ark.code, codeStyles)
