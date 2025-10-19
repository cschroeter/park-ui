import type { Meta } from '@storybook/react'
import { Container } from 'styled-system/jsx'

const meta: Meta = {
  title: 'Disclosure / Accordion',
  decorators: [(story) => <Container maxW="xl">{story()}</Container>],
}

export default meta

export { App as basic } from './basic'
