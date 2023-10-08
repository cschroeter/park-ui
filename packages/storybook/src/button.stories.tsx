import type { Meta, StoryObj } from '@storybook/react'
import { button } from 'styled-system/recipes'

const Button = () => {
  return <button className={button()}>Hello</button>
}

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Hello 🐼!',
  },
}
