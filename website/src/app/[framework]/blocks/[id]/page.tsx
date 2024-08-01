import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container, Stack } from 'styled-system/jsx'
import { BlockPlayground } from '~/components/examples/block-playground'
import { PageHeader } from '~/components/page-header'
import { blocks } from '.velite'

interface Props {
  params: {
    id: string
  }
}

export default async function Page(props: Props) {
  const { params } = props
  const block = blocks.find((block) => block.id === params.id)

  if (!block) {
    return notFound()
  }

  return (
    <Container py={{ base: '16', md: '24' }}>
      <Stack gap={{ base: '16', md: '24' }}>
        <PageHeader heading={block.name} description={block.description} subHeading="Blocks" />
        {block.variants.map((variant) => (
          <BlockPlayground key={variant.id} block={block} variant={variant} />
        ))}
      </Stack>
    </Container>
  )
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { params } = props
  const block = blocks.find((block) => block.id === params.id)

  return block
    ? {
        title: block.name,
        description: block.description,
        alternates: {
          canonical: `https://park-ui.com/react/blocks/${block.id}`,
        },
      }
    : {}
}

export const generateStaticParams = () =>
  ['react', 'solid', 'vue'].flatMap((framework) =>
    blocks.map((block) => ({ framework, id: block.id })),
  )
