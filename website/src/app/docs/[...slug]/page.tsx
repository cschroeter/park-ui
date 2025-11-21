import { docs } from '.velite'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Box, Divider, Grid, GridItem, Stack } from 'styled-system/jsx'
import { Heading, Text } from '@/components/ui'
import { CopyPageWidget } from '~/components/docs/copy-page-widget'
import { MDXContent } from '~/components/docs/mdx-content'
import { PageHeaderLinks } from '~/components/docs/page-links'
import { PageFooter } from '~/components/navigation/page-footer'
import { TableOfContents } from '~/components/navigation/table-of-contents'
import { Prose } from '~/components/ui/prose'
import { getDocumentBySlug, getNextDocument, getPrevDocument } from '~/lib/docs'
import { getServerContext } from '~/server-context'

interface Props {
  params: Promise<{ slug: string[] }>
}

export default async function Page(props: Props) {
  const params = await props.params
  const doc = getDocumentBySlug(params.slug)
  const nextDoc = getNextDocument(params.slug)
  const prevDoc = getPrevDocument(params.slug)

  if (!doc) {
    return notFound()
  }

  if (doc.category !== 'getting-started') {
    const context = getServerContext()
    context.component = doc.id
  }

  return (
    <Grid gridTemplateColumns={{ base: '1fr', xl: 'minmax(0,1fr) 288px' }} gap="8" minH="100%">
      <GridItem mx="auto" maxW="52rem" width="full" px={{ base: '4', sm: '6', md: '8' }}>
        <Stack gap={{ base: '6', md: '8' }} width="full">
          <Stack direction="row" justify="space-between" gap="8">
            <Heading as="h1" textStyle="3xl">
              {doc.title}
            </Heading>
            <CopyPageWidget doc={doc} />
          </Stack>
          <Text color="fg.muted" textStyle="lg" maxW="3xl">
            {doc.description}
          </Text>
          <PageHeaderLinks links={doc.links} />
        </Stack>
        <Divider mt="12" mb="4" />
        <Stack gap={{ base: '12', md: '16' }}>
          <Prose maxW="none">
            <MDXContent mdx={doc.mdx} />
          </Prose>
          <PageFooter nextPage={nextDoc} prevPage={prevDoc} />
        </Stack>
      </GridItem>
      <Box hideBelow="xl" position="sticky" height="calc(100dvh - 192px)" top="36">
        <TableOfContents toc={doc.toc} />
      </Box>
    </Grid>
  )
}

export const generateStaticParams = () => docs.map((doc) => ({ slug: doc.slug.split('/') }))

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const params = await props.params
  const doc = getDocumentBySlug(params.slug)

  if (!doc) {
    return {}
  }

  return {
    title: doc.title,
    description: doc.metaDescription,
    alternates: {
      canonical: `/docs/${params.slug.join('/')}`,
    },
  }
}
