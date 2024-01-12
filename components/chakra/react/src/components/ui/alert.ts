import { ark } from '@ark-ui/react/factory'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext('Alert')

const Alert = withProvider(chakra(ark.div), 'root')
const AlertContent = withContext(chakra(ark.div), 'content')
const AlertDescription = withContext(chakra(ark.p), 'description')
const AlertIcon = withContext(chakra(ark.svg), 'icon')
const AlertTitle = withContext(chakra(ark.h5), 'title')

const Root = Alert
const Content = AlertContent
const Description = AlertDescription
const Icon = AlertIcon
const Title = AlertTitle

export {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Content,
  Description,
  Icon,
  Root,
  Title,
}

export interface AlertProps extends HTMLChakraProps<typeof Alert> {}
export interface AlertContentProps extends HTMLChakraProps<typeof AlertContent> {}
export interface AlertDescriptionProps extends HTMLChakraProps<typeof AlertDescription> {}
export interface AlertIconProps extends HTMLChakraProps<typeof AlertIcon> {}
export interface AlertTitleProps extends HTMLChakraProps<typeof AlertTitle> {}
