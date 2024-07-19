import type { Metadata } from 'next'
import { Container, Stack } from 'styled-system/jsx'
import { PricingCard } from '~/components/marketing/pricing-card'
import { PageHeader } from '~/components/page-header'

export default async function Page() {
  return (
    <Container py="28" maxW="7xl">
      <Stack gap={{ base: '16', md: '24' }} alignItems="center">
        <PageHeader
          heading=" Get lifetime access"
          subHeading="Pricing"
          description="Get access to all components and free updates. Customize it to your needs, and make it
            yours today!"
        />
        <Stack direction={{ base: 'column', sm: 'row' }} gap="8" align="start" maxW="4xl">
          <PricingCard variant="personal" />
          <PricingCard variant="team" />
        </Stack>
        {/* <Faqs />
        <GetInTouch /> */}
      </Stack>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Get access to all components and free updates. Customize it to your needs, and make it yours today!',
}

export const generateStaticParams = () =>
  ['react', 'solid', 'vue'].map((framework) => ({ framework }))
