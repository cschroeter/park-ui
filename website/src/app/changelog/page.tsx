import { type Changelog, changelog } from '.velite'
import { Format } from '@ark-ui/react/format'
import { MinusIcon } from 'lucide-react'
import type { Metadata } from 'next'
import { Box, Container, Grid, GridItem, HStack, Stack } from 'styled-system/jsx'
import { Heading, Icon, Text } from '@/components/ui'
import { MDXContent } from '~/components/docs/mdx-content'
import { Prose } from '~/components/ui/prose'

export default async function Page() {
  return (
    <Grid
      gridTemplateColumns={{ base: '1fr', lg: 'repeat(2,minmax(0,1fr))' }}
      minHeight="dvh"
      pt="14"
      gap="0"
    >
      <GridItem
        display="flex"
        flexDirection="column"
        justifyContent="center"
        lg={{ top: 0, left: 0, width: '50%', height: 'dvh', position: 'fixed' }}
        lgDown={{ bg: 'gray.surface.bg' }}
      >
        <Container
          lgDown={{ width: 'full' }}
          py={{ base: '16', lg: '24' }}
          pe={{ base: '0', lg: '40' }}
        >
          <Stack gap={{ base: '5', md: '6' }}>
            <Heading as="h1" textStyle={{ base: '4xl', md: '5xl' }}>
              Changelog
            </Heading>
            <Text color="fg.muted" fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl">
              All notable changes will be documented in this file.
            </Text>
          </Stack>
        </Container>
      </GridItem>
      <GridItem />
      <GridItem position="relative" bg="gray.surface.bg">
        <TimeLineDivider />
        <Stack gap="6" lg={{ ps: '2', maxW: '3xl', py: '24' }}>
          <Container>
            <Stack gap="12">
              {changelog
                .sort((a, b) => (a.date > b.date ? -1 : 1))
                .map((entry) => (
                  <TimelineItem key={entry.date} entry={entry} />
                ))}
            </Stack>
          </Container>
        </Stack>
      </GridItem>
    </Grid>
  )
}

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Changelog',
    description: 'All notable changes will be documented in this file.',
    alternates: {
      canonical: '/changelog',
    },
  }
}

interface Props {
  entry: Changelog
}

const TimelineItem = ({ entry }: Props) => {
  return (
    <Stack position="relative">
      <Box
        position="absolute"
        top="1"
        right="calc(100% + 3rem)"
        display={{ base: 'none', lg: 'block' }}
      >
        <HStack color="fg.muted" justifyContent="flex-end">
          <Text textAlign="right" whiteSpace="nowrap">
            <Format.RelativeTime value={new Date(entry.date)} style="long" />
          </Text>
          <Icon flexShrink="0">
            <MinusIcon strokeWidth="1.5" />
          </Icon>
        </HStack>
      </Box>
      <Prose maxW="none" css={{ '& *:first-child': { marginTop: '0!' } }}>
        <MDXContent mdx={entry.mdx} />
      </Prose>
    </Stack>
  )
}

const TimeLineDivider = () => (
  <Box
    position="absolute"
    top="0"
    left="0"
    w="2"
    h="full"
    bgLinear="to-b"
    gradientFrom="gray.outline.border"
    gradientFromPosition="50%"
    gradientTo="transparent"
    gradientToPosition="50%"
    bgSize="100% 4px"
    backgroundRepeat="repeat-y"
    hideBelow="lg"
  />
)
