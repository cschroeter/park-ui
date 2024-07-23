import { BlocksIcon, FigmaIcon, HeartHandshakeIcon, UsersIcon } from 'lucide-react'
import { Stack } from 'styled-system/jsx'
import { Button, Card, Icon, Text } from '~/components/ui'
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
              <Icon color="accent.default" size="lg" flexShrink={0}>
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
    price: '$399',
    originalPrice: '$499',
    checkoutUrl:
      'https://park-ui.lemonsqueezy.com/checkout/buy/6debaae6-faa6-43a6-8e48-20e52d017847?desc=0&discount=0',
    features: [
      {
        label: 'Access to all components',
        description:
          ' — Get access to all components and free updates. Customize it to your needs, and make it yours today!',
        icon: BlocksIcon,
      },
      {
        label: 'Pro Figma Kit',
        description:
          ' — Use our Figma Kit to customize the components to your needs. It includes all components and is updated regularly.',
        icon: FigmaIcon,
      },
      {
        label: 'Lifetime access',
        description:
          " — Buy once, use forever. It's that simple. Enjoy unlimited lifetime access to all components, along with continual free updates.",
        icon: HeartHandshakeIcon,
      },
    ],
  },
  team: {
    name: 'Team',
    description: 'For companies and agencies',
    price: '$999',
    originalPrice: '$1199',
    checkoutUrl:
      'https://park-ui.lemonsqueezy.com/checkout/buy/4ed02dde-3c89-486d-9d29-f32c760d65a9?desc=0&discount=0&enabled=179955',
    features: [
      {
        label: 'Access for your entire team',
        description:
          ' — Team licenses grants permission to all employees and contractors of the licensee to access and use the components. ',
        icon: UsersIcon,
      },
    ],
  },
}
