import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { prose } from 'styled-system/recipes'

export type ProseProps = ComponentProps<typeof Prose>
export const Prose = styled(ark.article, prose)
