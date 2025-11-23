import { type Post, posts } from '.velite'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container, Stack } from 'styled-system/jsx'
import { Heading, Text } from '@/components/ui'
import { MDXContent } from '~/components/docs/mdx-content'
import { Prose } from '~/components/ui/prose'
import { formatBlogDate } from '~/lib/blog'

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
      <Stack py={{ base: '12', md: '16' }}>
        <BlogPostHeader post={post} />
        <Prose maxW="none">
          <MDXContent mdx={post.mdx} />
        </Prose>
      </Stack>
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

interface BlogPostHeaderProps {
  post: Post
}

const BlogPostHeader = ({ post }: BlogPostHeaderProps) => {
  return (
    <Stack as="header" gap="3">
      <Text color="fg.subtle">{formatBlogDate(post.publishedAt)}</Text>
      <Stack gap="8">
        <Heading as="h1" textStyle="3xl" fontWeight="bold">
          {post.title}
        </Heading>
        <Text color="fg.muted" textStyle="lg">
          {post.description}
        </Text>
      </Stack>
    </Stack>
  )
}
