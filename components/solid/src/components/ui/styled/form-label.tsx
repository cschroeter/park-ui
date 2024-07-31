import { ark } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { formLabel } from 'styled-system/recipes'

export type FormLabelProps = ComponentProps<typeof FormLabel>
export const FormLabel = styled(ark.label, formLabel)
