import { ImageIcon } from 'lucide-react'
import type { Metadata } from 'next'
import NextLink from 'next/link'
import { Center, Container, Grid, GridItem, HStack, Stack } from 'styled-system/jsx'
import { PageHeader } from '~/components/page-header'
import { Card, Icon, Text } from '~/components/ui'
import { fetchCategories } from '~/lib/blocks'

export default async function Page() {
  const categories = await fetchCategories()

  return (
    <Container py={{ base: '16', md: '24' }}>
      <Stack gap={{ base: '16', md: '24' }}>
        <PageHeader
          heading="Get started with Blocks"
          subHeading="Blocks"
          description="Explore our collection of building blocks to help you design and develop faster."
        />
        <Grid gridTemplateColumns={{ base: '1', sm: '2', md: '3' }} gap="8">
          {categories.map((category) => (
            <NextLink key={category.id} href={`blocks/${category.id}`}>
              <GridItem>
                <Card.Root boxShadow="sm" overflow="hidden">
                  <Card.Header pt="4" p="4">
                    <Center bg="bg.subtle" h="48" borderRadius="l2">
                      <Icon size="2xl" color="fg.disabled">
                        <ImageIcon />
                      </Icon>
                    </Center>
                  </Card.Header>
                  <Card.Body>
                    <HStack gap="2">
                      <Text size="lg" fontWeight="semibold">
                        {category.name}
                      </Text>
                    </HStack>
                    <Text size="sm" color="fg.muted">
                      {category.variantCount} variant{category.variantCount > 1 ? 's' : ''}
                    </Text>
                  </Card.Body>
                </Card.Root>
              </GridItem>
            </NextLink>
          ))}
        </Grid>
      </Stack>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Examples',
}
