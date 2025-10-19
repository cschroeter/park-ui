import { CheckCircleIcon } from 'lucide-react'
import { HStack, Stack } from 'styled-system/jsx'
import { Button, Card, Icon, Text } from '@/components/ui'

export const CardPricing = () => {
  const features = [
    'Unlimited Users',
    'Unlimited Secure Cloud Storage',
    '24/7 Dedicated Support',
    'Premium Analytics',
    'Custom Integration',
  ]
  return (
    <Card.Root variant="elevated">
      <Card.Header>
        <Card.Title textStyle="xl">Starter Plan</Card.Title>
        <Card.Description textStyle="md">Kickstart your digital journey.</Card.Description>
      </Card.Header>
      <Card.Body gap="8">
        <Text textStyle="5xl" fontWeight="semibold">
          $19
          <Text as="span" textStyle="xl">
            /month
          </Text>
        </Text>
        <Stack gap="4">
          {features.map((feature) => (
            <HStack gap="4" key={feature}>
              <Icon color="colorPalette.9">
                <CheckCircleIcon />
              </Icon>
              <Text textStyle="sm">{feature}</Text>
            </HStack>
          ))}
        </Stack>
      </Card.Body>
      <Card.Footer>
        <Button width="full">Buy Now</Button>
      </Card.Footer>
    </Card.Root>
  )
}
