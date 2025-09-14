import type { Meta } from '@storybook/react'
import { Container } from 'styled-system/jsx'

const meta: Meta = {
  title: 'Forms / Select',
  decorators: [
    (Story) => (
      <Container maxW="md">
        <Story />
      </Container>
    ),
  ],
}

export default meta

export { App as basic } from './basic'
export { App as optionGroup } from './option-group'
export { App as sizes } from './sizes'
