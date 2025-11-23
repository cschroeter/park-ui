import { type Post, posts } from '.velite'
import type { Metadata } from 'next'
import NextLink from 'next/link'
import { Container, Grid, Stack } from 'styled-system/jsx'
import { Card, Heading, Text } from '@/components/ui'
import { formatBlogDate } from '~/lib/blog'

export default async function Page() {
  return (
    <Container pt="14">
      <Stack gap="8" py={{ base: '12', md: '16' }}>
        <Heading as="h1" textStyle="4xl" fontWeight="bold">
          Blog
        </Heading>
        <Grid gridTemplateColumns="1fr 1fr 1fr">
          {posts.map((post) => (
            <article key={post.title}>
              <BlogPostCard post={post} />
            </article>
          ))}
        </Grid>
      </Stack>
    </Container>
  )
}

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Blog',
    description: 'Read the latest articles and updates from our team.',
    alternates: {
      canonical: '/blog',
    },
  }
}

interface Props {
  post: Post
}

const BlogPostCard = ({ post }: Props) => {
  return (
    <Card.Root>
      <Card.Header>
        <Text as="time" color="fg.subtle" textStyle="sm">
          {formatBlogDate(post.publishedAt)}
        </Text>
        <Stack gap="3">
          <Card.Title textStyle="lg">
            {/* <LinkOverlay asChild> */}
            <NextLink href={`/blog/${post.slug}`}>{post.title}</NextLink>
            {/* </LinkOverlay> */}
          </Card.Title>
          <Card.Description>{post.description}</Card.Description>
        </Stack>
      </Card.Header>
      <Card.Body></Card.Body>
    </Card.Root>
  )
}
