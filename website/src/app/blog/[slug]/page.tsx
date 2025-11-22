import { posts } from '.velite'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from 'styled-system/jsx'
import { Heading, Text } from '@/components/ui'
import { MDXContent } from '~/components/docs/mdx-content'
import { Prose } from '~/components/ui/prose'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function Page(props: Props) {
  const { slug } = await props.params
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <Container pt="14" maxW="3xl">
      <header>
        <Heading as="h1" mb="2">
          {post.title}
        </Heading>
        <Text color="fg.muted" mb="8">
          {post.description}
        </Text>
        {post.date && (
          <Text color="fg.subtle" mb="8">
            {post.date}
          </Text>
        )}
      </header>
      <Prose maxW="none">
        <MDXContent mdx={post.mdx} />
      </Prose>
    </Container>
  )
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: post.href,
    },
  }
}
