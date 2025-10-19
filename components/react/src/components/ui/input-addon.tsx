import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { inputAddon } from 'styled-system/recipes'

export type InputAddonProps = ComponentProps<typeof InputAddon>
export const InputAddon = styled(ark.div, inputAddon)
