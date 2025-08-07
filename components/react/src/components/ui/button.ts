import { ark } from '@ark-ui/react/factory'
import { styled } from '@park-ui/styled-system/jsx'
import { button } from '@park-ui/styled-system/recipes'
import type { ComponentProps } from '@park-ui/styled-system/types'

export type ButtonProps = ComponentProps<typeof Button>
export const Button = styled(ark.button, button)
