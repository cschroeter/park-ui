import { CheckCircleIcon } from 'lucide-react'
import { Grid, HStack, styled } from 'styled-system/jsx'
import { stack } from 'styled-system/patterns/stack'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Icon } from '~/components/ui/icon'
import { Text } from '~/components/ui/text'
import { plans } from './data'

export const PricingSection = () => {
  return (
    <Grid gap="8" columns={{ base: 1, md: 2, lg: 3 }}>
      {plans.map((plan, id) => (
        <Card key={id}>
          <CardHeader>
            <CardTitle textStyle="xl">{plan.name}</CardTitle>
            <CardDescription textStyle="md">{plan.description}</CardDescription>
          </CardHeader>
          <CardContent gap="8">
            <Text textStyle="5xl" fontWeight="semibold">
              {plan.price}
              <Text as="span" textStyle="xl">
                /month
              </Text>
            </Text>
            <styled.ul className={stack({ gap: '4' })}>
              {plan.features.map((feature) => (
                <styled.li key={feature} color="fg.muted">
                  <HStack gap="4">
                    <Icon color="accent.default">
                      <CheckCircleIcon />
                    </Icon>
                    <Text>{feature}</Text>
                  </HStack>
                </styled.li>
              ))}
            </styled.ul>
          </CardContent>
          <CardFooter>
            <Button size="xl" width="full">
              Buy Now
            </Button>
          </CardFooter>
        </Card>
      ))}
    </Grid>
  )
}
