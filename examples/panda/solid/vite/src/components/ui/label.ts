import { HTMLArkProps } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { label, type LabelVariantProps } from 'styled-system/recipes'

export type LabelProps = LabelVariantProps & HTMLArkProps<'label'>
export const Label = styled('label', label)
