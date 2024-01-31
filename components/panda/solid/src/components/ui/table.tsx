import { ark } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { table } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(table)

const Root = withProvider(styled(ark.table), 'root')
const Body = withContext(styled(ark.tbody), 'body')
const Caption = withContext(styled(ark.caption), 'caption')
const Cell = withContext(styled(ark.td), 'cell')
const Footer = withContext(styled(ark.tfoot), 'footer')
const Head = withContext(styled(ark.thead), 'head')
const Header = withContext(styled(ark.th), 'header')
const Row = withContext(styled(ark.tr), 'row')

export { Body, Caption, Cell, Footer, Head, Header, Root, Row }
