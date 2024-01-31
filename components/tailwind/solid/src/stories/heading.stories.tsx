import type { Meta } from 'storybook-solidjs'
import { Heading } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Heading',
}

export default meta

export const Base = () => <Heading>Sphinx of black quartz, judge my vow.</Heading>

export const HTMLTags = () => (
  <div class="flex flex-col gap-2.5">
    <Heading as="h1">Level 1</Heading>
    <Heading as="h2">Level 2</Heading>
    <Heading as="h3">Level 3</Heading>
  </div>
)

export const Sizes = () => (
  <div class="flex flex-col gap-2.5">
    <Heading textStyle="xs">Ag</Heading>
    <Heading textStyle="sm">Ag</Heading>
    <Heading textStyle="md">Ag</Heading>
    <Heading textStyle="lg">Ag</Heading>
    <Heading textStyle="xl">Ag</Heading>
    <Heading textStyle="2xl">Ag</Heading>
    <Heading textStyle="3xl">Ag</Heading>
    <Heading textStyle="4xl">Ag</Heading>
    <Heading textStyle="5xl">Ag</Heading>
    <Heading textStyle="6xl">Ag</Heading>
    <Heading textStyle="7xl">Ag</Heading>
  </div>
)
