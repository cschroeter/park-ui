import type { Meta } from 'storybook-solidjs'
import { Text } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Text',
}

export default meta

export const Base = () => <Text>Sphinx of black quartz, judge my vow.</Text>

export const HTMLTags = () => (
  <div class="flex flex-col gap-2.5">
    <Text as="p">This is a p element.</Text>
    <Text as="label">This is a label element.</Text>
    <Text as="div">This is a div element.</Text>
    <Text as="span">This is a span element</Text>
  </div>
)

export const Sizes = () => (
  <div class="flex flex-col gap-2.5">
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
  </div>
)
