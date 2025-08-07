import { ark } from '@ark-ui/react/factory'
import { styled } from '@park-ui/styled-system/jsx'
import { link } from '@park-ui/styled-system/recipes'
import type { ComponentProps } from '@park-ui/styled-system/types'

export type LinkProps = ComponentProps<typeof Link>
export const Link = styled(ark.a, link)
