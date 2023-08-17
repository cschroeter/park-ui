'use client'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Stack } from 'styled-system/jsx'
import {
  Segment,
  SegmentControl,
  SegmentGroup,
  SegmentGroupIndicator,
  SegmentLabel,
} from '~/components/ui/segment-group'
import { Typography } from '~/components/ui/typography'
import { sitemap } from '../../sitemap'
import { Badge } from '../ui/badge'

export const Sidebar = () => {
  const pathname = usePathname()
  const [currentPath, setCurrentPath] = useState(pathname)

  useEffect(() => {
    setCurrentPath(pathname)
  }, [pathname])

  return (
    <Stack gap="8" alignItems="stretch">
      {sitemap.map((group) => (
        <Stack gap="3" key={group.name}>
          <Typography textStyle={{ base: 'md', md: 'sm' }} fontWeight="bold">
            {group.name}
          </Typography>
          <SegmentGroup value={currentPath} orientation="vertical" size={{ base: 'md', md: 'sm' }}>
            {group.entries.map((option, id) => (
              <Segment key={id} value={option.href} data-orientation="vertical" asChild>
                <NextLink href={option.href}>
                  <SegmentControl />
                  <SegmentLabel display="inline-flex" gap="2">
                    {/* @ts-expect-error */}
                    {option.title} {option?.isNew && <Badge size="sm">New</Badge>}
                  </SegmentLabel>
                </NextLink>
              </Segment>
            ))}
            <SegmentGroupIndicator
              hidden={!group.entries.some((entry) => entry.href === currentPath)}
            />
          </SegmentGroup>
        </Stack>
      ))}
    </Stack>
  )
}
