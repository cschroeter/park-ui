import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { inputElement } from 'styled-system/recipes'

export type InputElementProps = ComponentProps<typeof InputElement>
export const InputElement = styled(ark.div, inputElement)
