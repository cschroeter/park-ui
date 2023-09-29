import { Stack } from 'styled-system/jsx'
import { ContactCard } from './contact-card'
import { FaqSection } from './faq-section'
import { PageHeader } from './page-header'
import { PricingSection } from './pricing-section'

export const Marketing = () => {
  return (
    <Stack py={{ base: '16', md: '20' }} gap={{ base: '16', md: '24' }}>
      <PageHeader />
      <PricingSection />
      <Stack gap={{ base: '12', md: '16' }}>
        <FaqSection />
        <ContactCard />
      </Stack>
    </Stack>
  )
}
