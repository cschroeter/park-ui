import type { Doc } from '.velite'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import NextLink from 'next/link'
import { css, cva, cx } from 'styled-system/css'
import { HStack, Stack } from 'styled-system/jsx'
import { Icon, Text } from '@/components/ui'

interface Props {
  prevPage?: Doc
  nextPage?: Doc
}

export const PageFooter = (props: Props) => {
  const { prevPage, nextPage } = props

  return (
    <Stack justify="space-between" gap="3" direction={{ base: 'column-reverse', sm: 'row' }}>
      {prevPage && (
        <NextLink href={prevPage.href} className={link}>
          <Text textStyle="header">Previous page</Text>
          <HStack gap="1">
            <Icon size="sm" mt="0.5">
              <ChevronLeftIcon />
            </Icon>
            <Text fontWeight="medium">{prevPage.title}</Text>
          </HStack>
        </NextLink>
      )}
      {nextPage && (
        <NextLink
          href={nextPage.href}
          className={cx(link, css({ marginLeft: 'auto', alignItems: 'flex-end' }))}
        >
          <Text textStyle="header">Next page</Text>
          <HStack gap="1">
            <Text fontWeight="medium">{nextPage.title}</Text>
            <Icon size="sm" mt="0.5">
              <ChevronRightIcon />
            </Icon>
          </HStack>
        </NextLink>
      )}
    </Stack>
  )
}

const link = cva({
  base: {
    borderRadius: 'lg',
    borderWidth: '1px',
    display: 'flex',
    width: { base: 'full', sm: '50%' },
    flexDirection: 'column',
    gap: '1.5',
    p: '4',
    transitionDuration: 'normal',
    transitionProperty: 'border-color, box-shadow',
    transitionTimingFunction: 'default',
    _hover: {
      borderColor: 'colorPalette.9',
      shadowColor: 'colorPalette.9',
      boxShadow: '0 0 0 1px var(--shadow-color)',
    },
    _focusVisible: {
      outline: 'none',
      borderColor: 'colorPalette.9',
      shadowColor: 'colorPalette.9',
      boxShadow: '0 0 0 1px var(--shadow-color)',
    },
  },
})()
