import type { Meta } from '@storybook/react'
import { Input } from '~/components/ui/input'

const meta: Meta = {
  title: 'Components/Input',
}

export default meta

export const Base = () => {
  return <Input id="name" placeholder="Your Name" />
}
