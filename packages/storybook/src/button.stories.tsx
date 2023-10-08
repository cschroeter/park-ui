import type { Meta } from '@storybook/react'
import { Stack } from 'styled-system/jsx'
import { Button, type ButtonProps } from '~/components/ui/button'

const meta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
}

export default meta

export const Basic = () => {
  return (
    <Stack gap="8" align="start">
      <Button variant="solid" size="2xl">
        Hello
      </Button>
      <Button variant="outline" size="2xl" borderColor="neutral.a7">
        Hello
      </Button>
      <Button variant="outline" size="2xl" borderColor="neutral.7">
        Hello
      </Button>
    </Stack>
  )
}
