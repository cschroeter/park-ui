import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import NextLink from 'next/link'
import { HStack, Stack } from 'styled-system/jsx'
import { button } from 'styled-system/recipes'
import { Typography } from '~/components/ui/typography'
import { getNextPage, getPrevPage } from '~/lib/page-control'

type FooterProps = {
  currentPageTitle: string
}

export const DocsFooter = (props: FooterProps) => {
  const { currentPageTitle } = props

  const prevPage = getPrevPage(currentPageTitle)
  const nextPage = getNextPage(currentPageTitle)

  return (
    <Stack width="full" gap="6">
      <HStack justify="space-between" width="full">
        {prevPage && (
          <Stack gap="3">
            <Typography color="fg.subtle" fontWeight="semibold" textStyle="sm">
              Previous
            </Typography>
            <NextLink href={prevPage.href} className={button({ variant: 'link', size: 'lg' })}>
              <ArrowLeftIcon />
              {prevPage.title}
            </NextLink>
          </Stack>
        )}

        {nextPage && (
          <Stack gap="3" style={{ marginLeft: 'auto' }}>
            <Typography color="fg.subtle" fontWeight="semibold" textStyle="sm">
              Next
            </Typography>
            <NextLink href={nextPage.href} className={button({ variant: 'link', size: 'lg' })}>
              {nextPage.title}
              <ArrowRightIcon />
            </NextLink>
          </Stack>
        )}
      </HStack>
    </Stack>
  )
}
