import { ark } from '@ark-ui/react/factory'
import { styled } from '@park-ui/styled-system/jsx'
import type { ComponentProps } from 'react'

export type ProseProps = ComponentProps<typeof Prose>
export const Prose = styled(ark.article)
