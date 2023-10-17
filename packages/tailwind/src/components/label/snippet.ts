import { ark, type HTMLArkProps } from '@ark-ui/react'
import { VariantProps } from 'tailwind-variants'
import { styled } from '~/lib/styled'
import { labelStyles } from './recipe'

type LabelVariantProps = VariantProps<typeof labelStyles>
export type LabelProps = LabelVariantProps & HTMLArkProps<'label'>

export const Label = styled<LabelProps>(ark.label, labelStyles)
