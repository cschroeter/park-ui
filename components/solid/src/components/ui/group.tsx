import { ark } from '@ark-ui/solid/factory'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { group } from 'styled-system/recipes'

export type GroupProps = ComponentProps<typeof Group>
export const Group = styled(ark.div, group)
