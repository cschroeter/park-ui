import { CheckCircleIcon } from 'lucide-react'
import { HStack, styled } from 'styled-system/jsx'
import { stack } from 'styled-system/patterns'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Icon } from '~/components/ui/icon'
import { Text } from '~/components/ui/text'

export const PricingCard = () => {
  const features = [
    'Unlimited Users',
    'Unlimited Secure Cloud Storage',
    '24/7 Dedicated Support',
    'Premium Analytics',
    'Custom Integration',
  ]
  return (
    <Card.Root>
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
        <styled.ul className={stack({ gap: '4' })}>
          {features.map((feature) => (
            <styled.li key={feature}>
              <HStack gap="4">
                <Icon color="colorPalette.default">
                  <CheckCircleIcon />
                </Icon>
                <Text textStyle="sm">{feature}</Text>
              </HStack>
            </styled.li>
          ))}
        </styled.ul>
      </Card.Body>
      <Card.Footer>
        <Button width="full">Buy Now</Button>
      </Card.Footer>
    </Card.Root>
  )
}
