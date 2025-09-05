'use client'
import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { alert } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(alert)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(ark.div, 'root')
export const Title = withContext(ark.h3, 'title')
export const Description = withContext(ark.div, 'description')
export const Icon = withContext(ark.svg, 'icon')
export const Content = withContext(ark.div, 'content')
