import { Button, Stack, Text } from '@chakra-ui/react'
import type { Meta } from '@storybook/react'
import { ArrowRightIcon } from 'lucide-react'

const meta: Meta<typeof Button> = {
  component: Button,
}
export default meta

export const Default = () => <Button colorScheme="accent">Button</Button>
export const WithColorScheme = () => <Button colorScheme="red">Button</Button>

export const WithSizes = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
  return (
    <Stack spacing="8" align="start">
      {sizes.map((size) => (
        <Stack key={size}>
          <Text textStyle="xs" color="fg.muted">
            {size}
          </Text>
          <Button size={size} rightIcon={<ArrowRightIcon />}>
            Button
          </Button>
        </Stack>
      ))}
    </Stack>
  )
}
