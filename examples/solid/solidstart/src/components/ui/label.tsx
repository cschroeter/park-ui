import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { label, type LabelVariantProps } from 'styled-system/recipes'

export type LabelProps = LabelVariantProps & ComponentProps<'label'>
export const Label = styled('label', label)
