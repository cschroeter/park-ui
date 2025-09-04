'use client'
import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { card } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(card)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(ark.div, 'root')
export const Header = withContext(ark.div, 'header')
export const Body = withContext(ark.div, 'body')
export const Footer = withContext(ark.h3, 'footer')
export const Title = withContext(ark.h3, 'title')
export const Description = withContext(ark.div, 'description')
