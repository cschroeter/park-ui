import { ImageIcon } from 'lucide-react'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import NextLink from 'next/link'
import { Center, Container, Grid, GridItem, HStack, Stack } from 'styled-system/jsx'
import { PageHeader } from '~/components/page-header'
import { Card } from '~/components/ui/card'
import { Icon } from '~/components/ui/icon'
import { Text } from '~/components/ui/text'
import { blocks } from '.velite'

export default async function Page() {
  return (
    <Container py={{ base: '16', md: '24' }}>
      <Stack gap={{ base: '16', md: '24' }}>
        <PageHeader
          heading="Get started with Blocks"
          subHeading="Blocks"
          description="Explore our collection of building blocks to help you design and develop faster."
        />
        <Grid gridTemplateColumns={{ base: '1', sm: '2', md: '3', xl: '4' }} gap="8">
          {blocks.map((block) => {
            const Icon = dynamic(() =>
              import(`~/components/icons/blocks/${block.id}`).catch(() => NotFoundIcon),
            )
            return (
              <NextLink key={block.id} href={`blocks/${block.id}`}>
                <GridItem>
                  <Card.Root boxShadow="sm" overflow="hidden">
                    <Card.Header pt="4" p="4">
                      <Center bg="bg.subtle" h="48" borderRadius="l2" px="4">
                        <Icon />
                      </Center>
                    </Card.Header>
                    <Card.Body>
                      <HStack gap="2">
                        <Text size="lg" fontWeight="semibold">
                          {block.name}
                        </Text>
                      </HStack>
                      <Text size="sm" color="fg.muted">
                        {block.variantCount} variant{block.variantCount > 1 ? 's' : ''}
                      </Text>
                    </Card.Body>
                  </Card.Root>
                </GridItem>
              </NextLink>
            )
          })}
        </Grid>
      </Stack>
    </Container>
  )
}

const NotFoundIcon = () => (
  <Icon size="2xl" color="fg.disabled">
    <ImageIcon />
  </Icon>
)

export const metadata: Metadata = {
  title: 'Blocks',
  description: 'Explore our collection of building blocks to help you design and develop faster.',
}
