'use client'
import { createStyleContext } from '@park-ui/styled-system/jsx'
import { card } from '@park-ui/styled-system/recipes'
import type { ComponentProps } from '@park-ui/styled-system/types'

const { withProvider, withContext } = createStyleContext(card)

export const Root = withProvider('div', 'root')
export const Header = withContext('div', 'header')
export const Body = withContext('div', 'body')
export const Footer = withContext('div', 'footer')
export const Title = withContext('h3', 'title')
export const Description = withContext('div', 'description')

export type RootProps = ComponentProps<typeof Root>
