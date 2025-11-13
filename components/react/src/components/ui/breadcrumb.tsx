'use client'
import { ark } from '@ark-ui/react/factory'
import { ChevronRightIcon } from 'lucide-react'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { breadcrumb } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(breadcrumb)

export type RootProps = ComponentProps<typeof Root>

export const Root = withProvider(ark.nav, 'root', { defaultProps: { 'aria-label': 'breadcrumb' } })
export const List = withContext(ark.ol, 'list')
export const Item = withContext(ark.li, 'item')
export const Link = withContext(ark.a, 'link')
export const Ellipsis = withContext(ark.li, 'ellipsis', {
  defaultProps: {
    role: 'presentation',
    'aria-hidden': true,
    children: '...',
  },
})

export const Separator = withContext(ark.li, 'separator', {
  defaultProps: {
    'aria-hidden': true,
    children: <ChevronRightIcon />,
  },
})
