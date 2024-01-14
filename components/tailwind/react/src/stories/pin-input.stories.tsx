import type { Meta } from '@storybook/react'
import { PinInput, type PinInputProps } from '~/components/ui/pin-input'

const meta: Meta<PinInputProps> = {
  title: 'Components/PinInput',
  component: PinInput,
}

export default meta

export const Base = () => <PinInput>Label</PinInput>

export const Sizes = () => (
  <div className="flex gap-3">
    <PinInput size="xs">xs</PinInput>
    <PinInput size="sm">sm</PinInput>
    <PinInput size="md">md</PinInput>
    <PinInput size="lg">lg</PinInput>
    <PinInput size="xl">xl</PinInput>
    <PinInput size="2xl">2xl</PinInput>
  </div>
)

export const Length = () => <PinInput length={6}>Label</PinInput>
