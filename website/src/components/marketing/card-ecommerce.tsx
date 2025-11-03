import { HeartIcon, HelpCircleIcon, RulerIcon, ShieldIcon, ShoppingBagIcon } from 'lucide-react'
import { Box, Divider, Grid, HStack, Stack } from 'styled-system/jsx'
import { Badge, Button, Card, Heading, Icon, Link, RadioCardGroup, Text } from '@/components/ui'
import { NumberInput } from '~/components/ui/number-input'
import { RatingGroup } from '~/components/ui/rating-group'

export const CardECommerce = () => {
  return (
    <Card.Root variant="elevated">
      <Card.Header>
        <Stack gap="4">
          <Stack gap="3" align="start">
            <Badge variant="subtle" size="lg">
              New in stock
            </Badge>
            <Heading textStyle="2xl" fontWeight="semibold">
              New Balance 574
            </Heading>
          </Stack>
          <HStack justify="space-between" width="full">
            <Text textStyle="xl" fontWeight="medium">
              $79.99
            </Text>
            <HStack gap="1.5">
              <RatingGroup count={5} defaultValue={4} readOnly size="xs" />
              <Link href="#" textStyle="sm" color="fg.muted" colorPalette="gray">
                12 Reviews
              </Link>
            </HStack>
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
          <Button variant="outline" colorPalette="gray" alignSelf="end">
            <HeartIcon /> Favourite
          </Button>
        </Grid>
        <Button>Add to Cart</Button>
        <Box bg="gray.subtle.bg" p="4" borderRadius="l2">
          <Stack gap="4" color="gray.subtle.fg" fontWeight="medium">
            <HStack>
              <Icon size="sm">
                <ShoppingBagIcon />
              </Icon>
              <Text textStyle="sm">Free shipping and returns</Text>
            </HStack>
            <HStack>
              <Icon size="sm">
                <ShieldIcon />
              </Icon>
              <Text textStyle="sm">2 year extended warranty</Text>
            </HStack>
            <HStack>
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

const SizePicker = () => {
  const sizes = [
    { size: '38' },
    { size: '39', disabled: true },
    { size: '40' },
    { size: '41' },
    { size: '42', disabled: true },
    { size: '43' },
  ]
  return (
    <Stack gap="3">
      <Stack gap="1.5">
        <Text textStyle="sm" fontWeight="medium">
          Size
        </Text>
        <RadioCardGroup.Root flexDirection="row" variant="solid">
          {sizes.map((option, id) => (
            <RadioCardGroup.Item
              key={id}
              value={option.size}
              disabled={option.disabled}
              p="0"
              alignItems="center"
              justifyContent="center"
              boxSize="10"
              _disabled={{
                backgroundImage:
                  'linear-gradient(315deg, transparent 49%, var(--colors-gray-6) 49%, var(--colors-gray-6) 51%, transparent 51%)',
              }}
            >
              <RadioCardGroup.ItemText>{option.size}</RadioCardGroup.ItemText>
              <RadioCardGroup.ItemHiddenInput />
            </RadioCardGroup.Item>
          ))}
        </RadioCardGroup.Root>
      </Stack>

      <HStack color="fg.muted">
        <Icon size="sm">
          <RulerIcon />
        </Icon>
        <Link textStyle="sm" href="#" colorPalette="gray">
          View size guide
        </Link>
      </HStack>
    </Stack>
  )
}
