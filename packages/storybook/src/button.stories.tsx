import type { Meta } from '@storybook/react'
import { ArrowRightIcon } from 'lucide-react'
import { HStack, Stack } from 'styled-system/jsx'
import { Button, type ButtonProps } from '~/components/ui/button'

const meta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
}

export default meta

export const Basic = () => {
  return (
    <Stack gap="8" align="start">
      {(['solid', 'outline', 'ghost'] as const).map((variant) => (
        <HStack gap="4">
          <Button variant={variant} size="2xl">
            Default <ArrowRightIcon />
          </Button>
          <Button variant={variant} size="2xl" disabled>
            Default <ArrowRightIcon />
          </Button>
        </HStack>
      ))}
    </Stack>
  )
}
