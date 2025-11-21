import { posts } from '.velite'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Container, Stack } from 'styled-system/jsx'
import { Heading, Text } from '@/components/ui'

export default async function Page() {
  return (
    <Container pt="14">
      <Heading as="h1" mb="8">
        Blog
      </Heading>
      <Stack gap="8">
        {posts.map((post) => (
          <article key={post.title}>
            <Link href={post.href}>
              <Heading>{post.title}</Heading>
            </Link>
            <Text color="fg.muted">{post.description}</Text>
            {post.date && (
              <Text color="fg.subtle" mt="1">
                {post.date}
              </Text>
            )}
          </article>
        ))}
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
