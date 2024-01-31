import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { card } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(card)

const Root = withProvider(styled(ark.div), 'root')
const Body = withContext(styled(ark.div), 'body')
const Description = withContext(styled(ark.p), 'description')
const Footer = withContext(styled(ark.div), 'footer')
const Header = withContext(styled(ark.div), 'header')
const Title = withContext(styled(ark.h3), 'title')

export { Body, Description, Footer, Header, Root, Title }

export interface CardRootProps extends ComponentProps<typeof Root> {}
export interface CardBodyProps extends ComponentProps<typeof Body> {}
export interface CardDescriptionProps extends ComponentProps<typeof Description> {}
export interface CardFooterProps extends ComponentProps<typeof Footer> {}
export interface CardHeaderProps extends ComponentProps<typeof Header> {}
export interface CardTitleProps extends ComponentProps<typeof Title> {}
