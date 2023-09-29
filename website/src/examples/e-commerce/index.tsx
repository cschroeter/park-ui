import { SiFacebook, SiPinterest, SiWhatsapp } from '@icons-pack/react-simple-icons'
import { HeartIcon, HelpCircleIcon, ShieldIcon, ShoppingBagIcon } from 'lucide-react'
import { Box, Divider, Grid, HStack, Stack } from 'styled-system/jsx'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Heading } from '~/components/ui/heading'
import { Icon } from '~/components/ui/icon'
import { Text } from '~/components/ui/text'
import { product } from './data'
import { ImageGallery } from './image-gallery'
import { QuantityPicker } from './quantity-picker'
import { RatingInfo } from './rating-info'
import { SizePicker } from './size-picker'

export const ECommerce = () => {
  return (
    <Stack gap="8" py="8">
      <Text textStyle="sm" color="fg.muted" fontWeight="medium">
        Home / Shoes / Woman
      </Text>
      <Stack direction={{ base: 'column', md: 'row' }} gap={{ base: '10', lg: '24' }}>
        <Box flex="1">
          <ImageGallery />
        </Box>
        <Stack gap="8" maxW={{ base: 'full', md: '410px' }}>
          <Stack gap="4">
            <Stack gap="3" align="start">
              <Badge variant="solid" size="md">
                New in stock
              </Badge>
              <Heading as="h1" textStyle="3xl" fontWeight="semibold">
                {product.name}
              </Heading>
            </Stack>

            <HStack justify="space-between" width="full">
              <Text textStyle="xl" fontWeight="medium" color="fg.emphasized">
                {product.price}
              </Text>
              <RatingInfo />
            </HStack>
            <Text color="fg.muted">{product.description}</Text>
          </Stack>
          <Divider />
          <SizePicker />
          <Grid columns={2} gap="8">
            <QuantityPicker />
            <Button size="xl" variant="outline" alignSelf="end">
              <HeartIcon /> Favourite
            </Button>
          </Grid>
          <Button size="xl">Add to Cart</Button>
          <Box bg="bg.subtle" p="4" borderRadius="l2">
            <Stack gap="4" color="fg.muted" fontWeight="medium">
              <HStack gap="2">
                <Icon size="sm">
                  <ShoppingBagIcon />
                </Icon>
                <Text textStyle="sm"> Free shipping and returns</Text>
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
          <Stack>
            <Text textStyle="sm" color="fg.emphasized" fontWeight="medium">
              Share
            </Text>
            <HStack gap="3" color="fg.subtle">
              <Icon>
                <SiPinterest />
              </Icon>
              <Icon>
                <SiFacebook />
              </Icon>
              <Icon>
                <SiWhatsapp />
              </Icon>
            </HStack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
