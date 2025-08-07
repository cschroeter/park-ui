import { HStack, type HstackProps } from '@park-ui/styled-system/jsx'
import { Text } from '@park-ui/react/text'
import { PageLink } from './page-link'

const legalLinks = [
  {
    href: '/legal/privacy',
    label: 'Privacy Policy',
    shortLabel: 'Privacy',
  },
  {
    href: '/legal/terms',
    label: 'Terms of Service',
    shortLabel: 'Terms',
  },
  {
    href: '/legal/license',
    label: 'License Agreement',
    shortLabel: 'License',
  },
]

export const LegalFooter = (props: HstackProps) => {
  return (
    <HStack gap="6" colorPalette="gray" py={{ base: '4', md: '0' }} {...props}>
      <Text textStyle="sm" color="fg.muted">
        &copy; {new Date().getFullYear()} Chakra Systems. All rights reserved.
      </Text>
      <HStack gap="3">
        {legalLinks.map((link, idx) => (
          <PageLink key={idx} href={link.href} textStyle="sm" colorPalette="gray">
            {link.shortLabel}
          </PageLink>
        ))}
      </HStack>
    </HStack>
  )
}
