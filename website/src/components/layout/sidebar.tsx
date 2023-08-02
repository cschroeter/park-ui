'use client'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Stack } from 'styled-system/jsx'
import { sitemap } from '../../sitemap'
import {
  Segment,
  SegmentControl,
  SegmentGroup,
  SegmentIndicator,
  SegmentInput,
  SegmentLabel,
} from '../segment-group'
import { Typography } from '../typography'

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
                  <SegmentInput />
                  <SegmentControl />
                  <SegmentLabel>{option.title}</SegmentLabel>
                </NextLink>
              </Segment>
            ))}
            <SegmentIndicator hidden={!group.entries.some((entry) => entry.href === currentPath)} />
          </SegmentGroup>
        </Stack>
      ))}
    </Stack>
  )
}
