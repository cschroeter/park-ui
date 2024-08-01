import type { Metadata } from 'next'
import { Container, Stack } from 'styled-system/jsx'
import { Faqs } from '~/components/marketing/faqs'
import { GetInTouch } from '~/components/marketing/get-in-touch'
import { PricingCard } from '~/components/marketing/pricing-card'
import { PageHeader } from '~/components/page-header'

export default async function Page() {
  return (
    <Container py={{ base: '16', md: '24' }} maxW="7xl">
      <Stack gap={{ base: '16', md: '24' }} alignItems="center">
        <PageHeader
          heading="Park UI Plus"
          subHeading="Pricing"
          description="Unlock exclusive blocks and support the development of Park UI."
        />
        <Stack direction={{ base: 'column', sm: 'row' }} gap="8" align="start" maxW="4xl">
          <PricingCard variant="personal" />
          <PricingCard variant="team" />
        </Stack>
        <Faqs />
        <GetInTouch />
      </Stack>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Park UI Plus',
  description: 'Unlock exclusive blocks and support the development of Park UI.',
}

export const generateStaticParams = () =>
  ['react', 'solid', 'vue'].map((framework) => ({ framework }))
