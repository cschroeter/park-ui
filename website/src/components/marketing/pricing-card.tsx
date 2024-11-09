import {
  BlocksIcon,
  FigmaIcon,
  HeartHandshakeIcon,
  ShoppingCartIcon,
  UsersIcon,
} from 'lucide-react'
import { Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Icon } from '~/components/ui/icon'
import { Text } from '~/components/ui/text'
import { SignInLink } from '../auth/sign-in-link'

type Props = {
  variant: 'personal' | 'team'
}

export const PricingCard = (props: Props) => {
  const license = licenses[props.variant]

  return (
    <Card.Root flex="1" boxShadow="md">
      <Card.Header>
        <Card.Title textStyle="xl">{license.name}</Card.Title>
        <Card.Description textStyle="md">{license.description}</Card.Description>
      </Card.Header>
      <Card.Body gap="8">
        <Stack direction="row" gap="6" align="start">
          <Text
            textStyle="2xl"
            fontWeight="semibold"
            textDecoration="line-through"
            textDecorationThickness="2px"
            pt="2"
          >
            {license.originalPrice}
          </Text>
          <Text textStyle="5xl" fontWeight="bold">
            {license.price}
          </Text>
        </Stack>
        <Stack gap="3">
          <Button width="full" asChild>
            <a href={license.checkoutUrl}>Buy Now</a>
          </Button>
          <Text color="fg.muted" textStyle="sm">
            Already purchased? <SignInLink />
          </Text>
        </Stack>
        <Stack gap="6">
          {license.features.map((feature, id) => (
            <Stack key={id} direction="row">
              <Icon color="colorPalette.text" size="lg" flexShrink={0}>
                <feature.icon />
              </Icon>
              <Text textStyle="sm" fontWeight="medium">
                {feature.label}
                <Text as="span" color="fg.muted" fontWeight="normal">
                  {feature.description}
                </Text>
              </Text>
            </Stack>
          ))}
        </Stack>
      </Card.Body>
    </Card.Root>
  )
}

const licenses = {
  personal: {
    name: 'Personal',
    description: 'For individuals and freelancers',
    price: '299',
    originalPrice: '$499',
    checkoutUrl:
      'https://chakra-pro.lemonsqueezy.com/buy/65f4c913-5363-4e56-9dc8-7a265ce27c7d?discount=0',
    features: [
      {
        label: 'Access All Blocks',
        description:
          ' — Full access to all Blocks in React and Solid. Includes all future updates.',
        icon: BlocksIcon,
      },
      {
        label: 'Figma Pro Kit',
        description: ' — Access the Pro Figma Kit with all Blocks. Regular updates included.',
        icon: FigmaIcon,
      },
      {
        label: 'One-time Purchase',
        description: ' — Lifetime access with a single payment. No hidden fees or subscriptions.',
        icon: ShoppingCartIcon,
      },
      {
        label: 'Support the Project',
        description: ' — Help us maintain and improve Park UI with quality Blocks and Components.',
        icon: HeartHandshakeIcon,
      },
    ],
  },
  team: {
    name: 'Team',
    description: 'All personal features, extended for team use',
    price: '$899',
    originalPrice: '$1499',
    checkoutUrl:
      'https://chakra-pro.lemonsqueezy.com/buy/61713bb6-709c-4e0e-942f-d05250e22a7e?discount=0&enabled=470194',
    features: [
      {
        label: 'Access for your entire team',
        description: ' — Grants all employees and contractors access to Blocks.',
        icon: UsersIcon,
      },
    ],
  },
}
