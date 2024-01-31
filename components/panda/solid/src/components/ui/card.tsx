import { ark } from '@ark-ui/solid'
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
