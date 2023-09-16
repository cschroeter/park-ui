'use client'
import { ChevronRightIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'
import { HStack, type HstackProps } from 'styled-system/jsx'
import { Typography } from '~/components/ui/typography'
import { Icon } from '../ui/icon'

export const Breadcrumbs = (props: HstackProps) => {
  const pathName = usePathname()
  const crumbs = pathName
    ?.split('/')
    .filter(Boolean)
    .filter((path) => !['docs'].includes(path))
    .map((path) => path.replace(/-/g, ' '))
  return (
    <HStack gap="1" {...props}>
      {crumbs?.map((crumb, index, arr) => (
        <Fragment key={index}>
          <Typography
            as="span"
            textStyle="sm"
            color="fg.subtle"
            fontWeight="medium"
            textTransform="capitalize"
            _last={{ color: 'fg.emphasized' }}
          >
            {crumb}
          </Typography>
          {arr.length - 1 !== index && (
            <Icon color="fg.subtle" alignSelf="center" size="sm">
              <ChevronRightIcon />
            </Icon>
          )}
        </Fragment>
      ))}
    </HStack>
  )
}
