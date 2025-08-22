import { docs } from '.velite'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Box, Grid, GridItem } from 'styled-system/jsx'
import { MDXContent } from '~/components/docs/mdx-content'
import { Prose } from '~/components/ui/prose'
import { getDocumentBySlug } from '~/lib/docs'
import { getServerContext } from '~/server-context'

interface Props {
  params: Promise<{ slug: string[] }>
}

export default async function Page(props: Props) {
  const params = await props.params
  const doc = docs.find((doc) => doc.slug === params.slug.join('/'))

  if (!doc) {
    return notFound()
  }

  if (doc.category === 'components') {
    const context = getServerContext()
    context.component = doc.title
  }
  return (
    <Grid gridTemplateColumns={{ base: '1fr', xl: 'minmax(0,1fr) 288px' }} gap="8" pt="12">
      <GridItem mx="auto" maxW="52rem" width="full" px={{ base: '4', sm: '6', md: '8' }}>
        <Prose>
          <MDXContent mdx={doc.mdx} />
        </Prose>
      </GridItem>
      <Box hideBelow="xl">Sidebar</Box>
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
    description: doc.description,
  }
}
