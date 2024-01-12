import { ark } from '@ark-ui/react/factory'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext('Card')

const Card = withProvider(chakra(ark.div), 'root')
const CardBody = withContext(chakra(ark.div), 'body')
const CardDescription = withContext(chakra(ark.p), 'description')
const CardFooter = withContext(chakra(ark.div), 'footer')
const CardHeader = withContext(chakra(ark.div), 'header')
const CardTitle = withContext(chakra(ark.h3), 'title')

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

export interface CardProps extends HTMLChakraProps<typeof Card> {}
export interface CardBodyProps extends HTMLChakraProps<typeof CardBody> {}
export interface CardDescriptionProps extends HTMLChakraProps<typeof CardDescription> {}
export interface CardFooterProps extends HTMLChakraProps<typeof CardFooter> {}
export interface CardHeaderProps extends HTMLChakraProps<typeof CardHeader> {}
export interface CardTitleProps extends HTMLChakraProps<typeof CardTitle> {}
