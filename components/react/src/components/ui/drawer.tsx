'use client'
import { Dialog } from '@ark-ui/react/dialog'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { drawer } from 'styled-system/recipes'

const { withRootProvider, withContext } = createStyleContext(drawer)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider(Dialog.Root)

export const Backdrop = withContext(Dialog.Backdrop, 'backdrop')
export const Body = withContext('div', 'body')
export const Positioner = withContext(Dialog.Positioner, 'positioner')
export const CloseTrigger = withContext(Dialog.CloseTrigger, 'closeTrigger')
export const Content = withContext(Dialog.Content, 'content')
export const Description = withContext(Dialog.Description, 'description')
export const Footer = withContext('footer', 'footer')
export const Header = withContext('header', 'header')
export const Title = withContext(Dialog.Title, 'title')
export const Trigger = withContext(Dialog.Trigger, 'trigger')
