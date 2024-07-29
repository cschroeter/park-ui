import { HeartIcon, HelpCircleIcon, ShieldIcon, ShoppingBagIcon } from 'lucide-react'
import { Box, Divider, Grid, HStack, Stack } from 'styled-system/jsx'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Heading } from '~/components/ui/heading'
import { Icon } from '~/components/ui/icon'
import { NumberInput } from '~/components/ui/number-input'
import { Text } from '~/components/ui/text'
import { RatingInfo } from './rating-info'
import { SizePicker } from './size-picker'

export const ECommerceCard = () => {
  return (
    <Card.Root>
      <Card.Header>
        <Stack gap="4">
          <Stack gap="3" align="start">
            <Badge variant="solid" size="md">
              New in stock
            </Badge>
            <Heading as="h1" textStyle="2xl" fontWeight="semibold">
              New Balance 574
            </Heading>
          </Stack>
          <HStack justify="space-between" width="full">
            <Text textStyle="xl" fontWeight="medium">
              $79.99
            </Text>
            <RatingInfo />
          </HStack>
          <Text color="fg.muted">
            With a sleek design and a captivating essence, this is a modern Classic made for every
            occasion.
          </Text>
        </Stack>
      </Card.Header>
      <Card.Body gap="4">
        <Divider />
        <SizePicker />
        <Grid columns={2} gap="4">
          <NumberInput min={1} max={5} defaultValue="1">
            Quantity
          </NumberInput>
          <Button variant="outline" alignSelf="end">
            <HeartIcon /> Favourite
          </Button>
        </Grid>
        <Button>Add to Cart</Button>
        <Box bg="bg.subtle" p="4" borderRadius="l2">
          <Stack gap="4" color="fg.muted" fontWeight="medium">
            <HStack gap="2">
              <Icon size="sm">
                <ShoppingBagIcon />
              </Icon>
              <Text textStyle="sm">Free shipping and returns</Text>
            </HStack>
            <HStack gap="2">
              <Icon size="sm">
                <ShieldIcon />
              </Icon>
              <Text textStyle="sm">2 year extended warranty</Text>
            </HStack>
            <HStack gap="2">
              <Icon size="sm">
                <HelpCircleIcon />
              </Icon>
              <Text textStyle="sm">We're here for you 24/7</Text>
            </HStack>
          </Stack>
        </Box>
      </Card.Body>
    </Card.Root>
  )
}
