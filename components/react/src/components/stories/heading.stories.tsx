import type { Meta } from '@storybook/react'
import { Stack } from 'styled-system/jsx'
import { Heading } from '~/components/ui/heading'

const meta: Meta = {
  title: 'Components/Heading',
}

export default meta

export const Base = () => <Heading>Sphinx of black quartz, judge my vow.</Heading>

export const HTMLTags = () => (
  <Stack>
    <Heading as="h1">Level 1</Heading>
    <Heading as="h2">Level 2</Heading>
    <Heading as="h3">Level 3</Heading>
  </Stack>
)

export const Sizes = () => (
  <Stack>
    <Heading size="xs">Ag</Heading>
    <Heading size="sm">Ag</Heading>
    <Heading size="md">Ag</Heading>
    <Heading size="lg">Ag</Heading>
    <Heading size="xl">Ag</Heading>
    <Heading size="2xl">Ag</Heading>
    <Heading size="3xl">Ag</Heading>
    <Heading size="4xl">Ag</Heading>
    <Heading size="5xl">Ag</Heading>
    <Heading size="6xl">Ag</Heading>
    <Heading size="7xl">Ag</Heading>
  </Stack>
)
