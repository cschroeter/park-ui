import type { Meta } from '@storybook/react'
import { Stack } from 'styled-system/jsx'
import { Text, type TextProps } from 'text'

const meta: Meta<TextProps> = {
  title: 'Text',
  component: Text,
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
    <Text textStyle="xs">Ag</Text>
    <Text textStyle="sm">Ag</Text>
    <Text textStyle="md">Ag</Text>
    <Text textStyle="lg">Ag</Text>
    <Text textStyle="xl">Ag</Text>
    <Text textStyle="2xl">Ag</Text>
    <Text textStyle="3xl">Ag</Text>
    <Text textStyle="4xl">Ag</Text>
    <Text textStyle="5xl">Ag</Text>
    <Text textStyle="6xl">Ag</Text>
    <Text textStyle="7xl">Ag</Text>
  </Stack>
)
