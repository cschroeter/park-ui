import type { Meta } from '@storybook/react'
import { Stack } from 'styled-system/jsx'
import { Heading, type HeadingProps } from '../heading/heading'

const meta: Meta<HeadingProps> = {
  title: 'Heading',
  component: Heading,
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
  </Stack>
)
