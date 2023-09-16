import { SiFacebook, SiPinterest, SiWhatsapp } from '@icons-pack/react-simple-icons'
import { HeartIcon, HelpCircleIcon, ShieldIcon, ShoppingBagIcon } from 'lucide-react'
import { Box, Divider, Grid, HStack, Stack } from 'styled-system/jsx'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Icon } from '~/components/ui/icon'
import { Heading, Typography } from '~/components/ui/typography'
import { product } from './data'
import { ImageGallery } from './image-gallery'
import { QuantityPicker } from './quantity-picker'
import { RatingInfo } from './rating-info'
import { SizePicker } from './size-picker'

export const ECommerce = () => {
  return (
    <Stack gap="8" py="8">
      <Typography textStyle="sm" color="fg.muted" fontWeight="medium">
        Home / Shoes / Woman
      </Typography>
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
              <Typography textStyle="xl" fontWeight="medium" color="fg.emphasized">
                {product.price}
              </Typography>
              <RatingInfo />
            </HStack>
            <Typography color="fg.muted">{product.description}</Typography>
          </Stack>
          <Divider />
          <SizePicker />
          <Grid columns={2} gap="8">
            <QuantityPicker />
            <Button size="xl" variant="secondary" alignSelf="end">
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
                <Typography textStyle="sm"> Free shipping and returns</Typography>
              </HStack>
              <HStack gap="2">
                <Icon size="sm">
                  <ShieldIcon />
                </Icon>
                <Typography textStyle="sm">2 year extended warranty</Typography>
              </HStack>
              <HStack gap="2">
                <Icon size="sm">
                  <HelpCircleIcon />
                </Icon>
                <Typography textStyle="sm">We're here for you 24/7</Typography>
              </HStack>
            </Stack>
          </Box>
          <Stack>
            <Typography textStyle="sm" color="fg.emphasized" fontWeight="medium">
              Share
            </Typography>
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
