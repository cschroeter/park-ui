import type { Meta } from '@storybook/react'
import { Slider } from '~/components/ui/slider'

const meta: Meta = {
  title: 'Components/Slider',
}

export default meta

export const Base = () => <Slider defaultValue={[33]}>Label</Slider>
export const Marks = () => (
  <Slider
    defaultValue={[0]}
    marks={[
      { value: 25, label: '25' },
      { value: 50, label: '50' },
      { value: 75, label: '75' },
    ]}
  />
)
export const Range = () => <Slider defaultValue={[33, 66]}>Label</Slider>
