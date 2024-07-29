import type { Meta } from 'storybook-solidjs'
import { Stack } from 'styled-system/jsx'
import { Spinner } from '~/components/ui/spinner'

const meta: Meta = {
  title: 'Components/Spinner',
}

export default meta

export const Base = () => <Spinner />

export const Sizes = () => (
  <Stack>
    <Spinner size="xs" />
    <Spinner size="sm" />
    <Spinner size="md" />
    <Spinner size="lg" />
    <Spinner size="xl" />
  </Stack>
)

export const ColorPalette = () => <Spinner colorPalette="red" />

export const EmptyColor = () => <Spinner borderLeftColor="bg." borderBottomColor="bg.emphasized" />

export const Thickness = () => <Spinner borderWidth="4px" />
