import type { Meta } from '@storybook/react'
import { Stack } from 'styled-system/jsx'
import { Text } from '~/components/ui/text'

const meta: Meta = {
  title: 'Components/Text',
}

export default meta

export const Base = () => <Text>Sphinx of black quartz, judge my vow.</Text>

export const HTMLTags = () => (
  <Stack>
    <Text as="p">This is a p element.</Text>
    <Text as="label">This is a label element.</Text>
    <Text as="div">This is a div element.</Text>
    <Text as="span">This is a span element</Text>
  </Stack>
)

export const Sizes = () => (
  <Stack>
    <Text size="xs">Ag</Text>
    <Text size="sm">Ag</Text>
    <Text size="md">Ag</Text>
    <Text size="lg">Ag</Text>
    <Text size="xl">Ag</Text>
    <Text size="2xl">Ag</Text>
    <Text size="3xl">Ag</Text>
    <Text size="4xl">Ag</Text>
    <Text size="5xl">Ag</Text>
    <Text size="6xl">Ag</Text>
    <Text size="7xl">Ag</Text>
  </Stack>
)
