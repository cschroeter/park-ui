import { ark } from '@ark-ui/react'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { card } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(card)

const Card = withProvider(styled(ark.div), 'root')
const CardBody = withContext(styled(ark.div), 'body')
const CardDescription = withContext(styled(ark.p), 'description')
const CardFooter = withContext(styled(ark.div), 'footer')
const CardHeader = withContext(styled(ark.div), 'header')
const CardTitle = withContext(styled(ark.h3), 'title')

const Root = Card
const Body = CardBody
const Description = CardDescription
const Footer = CardFooter
const Header = CardHeader
const Title = CardTitle

export {
  Body,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Description,
  Footer,
  Header,
  Root,
  Title,
}

export interface CardProps extends HTMLStyledProps<typeof Card> {}
export interface CardBodyProps extends HTMLStyledProps<typeof CardBody> {}
export interface CardDescriptionProps extends HTMLStyledProps<typeof CardDescription> {}
export interface CardFooterProps extends HTMLStyledProps<typeof CardFooter> {}
export interface CardHeaderProps extends HTMLStyledProps<typeof CardHeader> {}
export interface CardTitleProps extends HTMLStyledProps<typeof CardTitle> {}
