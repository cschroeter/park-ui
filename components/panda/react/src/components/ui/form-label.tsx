import { ark } from '@ark-ui/react/factory'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { formLabel } from 'styled-system/recipes'

export const FormLabel = styled(ark.label, formLabel)
export interface FormLabelProps extends HTMLStyledProps<typeof FormLabel> {}
