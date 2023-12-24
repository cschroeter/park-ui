import { ark } from '@ark-ui/react/factory'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { label } from 'styled-system/recipes'

export const FormLabel = styled(ark.label, label)
export interface FormLabelProps extends HTMLStyledProps<typeof FormLabel> {}
