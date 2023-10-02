import { CheckCircleIcon } from 'lucide-react'
import { HStack, styled } from 'styled-system/jsx'
import { stack } from 'styled-system/patterns'
import { Button, Icon, Text } from '~/components/ui'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'

export const PricingCard = () => {
  const features = [
    'Unlimited Users',
    'Unlimited Secure Cloud Storage',
    '24/7 Dedicated Support',
    'Premium Analytics',
    'Custom Integration',
  ]
  return (
    <Card>
      <CardHeader>
        <CardTitle textStyle="xl">Starter Plan</CardTitle>
        <CardDescription textStyle="md">Kickstart your digital journey.</CardDescription>
      </CardHeader>
      <CardContent gap="8">
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
                <Icon color="accent.default">
                  <CheckCircleIcon />
                </Icon>
                <Text textStyle="sm">{feature}</Text>
              </HStack>
            </styled.li>
          ))}
        </styled.ul>
      </CardContent>
      <CardFooter>
        <Button width="full">Buy Now</Button>
      </CardFooter>
    </Card>
  )
}
