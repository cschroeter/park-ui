import type { Meta } from '@storybook/react'
import { Text } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Text',
}

export default meta

export const Base = () => <Text>Sphinx of black quartz, judge my vow.</Text>

export const HTMLTags = () => (
  <div className="flex flex-col gap-2.5">
    <Text as="p">This is a p element.</Text>
    <Text as="label">This is a label element.</Text>
    <Text as="div">This is a div element.</Text>
    <Text as="span">This is a span element</Text>
  </div>
)

export const Sizes = () => (
  <div className="flex flex-col gap-2.5">
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
  </div>
)
