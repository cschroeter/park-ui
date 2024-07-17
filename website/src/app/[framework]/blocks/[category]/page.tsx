import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container, Stack } from 'styled-system/jsx'
import { Showcase } from '~/components/examples/showcase'
import { PageHeader } from '~/components/page-header'
import { fetchCategory } from '~/lib/blocks'

interface Props {
  params: {
    category: string
  }
}

export default async function Page(props: Props) {
  const { params } = props
  const category = await fetchCategory(params.category)

  if (!category) {
    return notFound()
  }

  return (
    <Container py={{ base: '16', md: '24' }}>
      <Stack gap={{ base: '16', md: '24' }}>
        <PageHeader
          heading={category.name}
          description={category.description}
          subHeading="Blocks"
        />
        {category.variants.map((variant) => (
          <Showcase
            key={variant.id}
            categoryId={category.id}
            figmaNodeId={category.figmaNodeId}
            variantId={variant.id}
            name={variant.name}
          />
        ))}
      </Stack>
    </Container>
  )
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { params } = props
  const category = await fetchCategory(params.category)

  return category ? { title: category.name, description: category.description } : {}
}
