import { Stack, type StackProps } from 'styled-system/jsx'
import { Text } from '@/components/ui'

export const legalLinks = [
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

export const LegalFooter = (props: StackProps) => {
  return (
    <Stack
      colorPalette="gray"
      direction={{ base: 'column-reverse', sm: 'row' }}
      pb="4"
      gap={{ base: '1', sm: '6' }}
      {...props}
    >
      <Text textStyle="sm" color="text.muted">
        &copy; {new Date().getFullYear()} Chakra Systems. All rights reserved.
      </Text>
      {/* <HStack gap="3">
        {legalLinks.map((link, idx) => (
          <PageLink key={idx} href={link.href} textStyle="sm" colorPalette="gray">
            {link.shortLabel}
          </PageLink>
        ))}
      </HStack> */}
    </Stack>
  )
}
