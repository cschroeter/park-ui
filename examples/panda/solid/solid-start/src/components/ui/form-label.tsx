import { ark } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { formLabel } from 'styled-system/recipes'

export const FormLabel = styled(ark.label, formLabel)
export interface FormLabelProps extends ComponentProps<typeof FormLabel> {}
