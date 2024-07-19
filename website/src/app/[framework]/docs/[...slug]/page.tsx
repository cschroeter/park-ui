import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Box, Container, Stack } from 'styled-system/jsx'
import { DocumentationBadges } from '~/components/docs/documentation-badges'
import { MDXContent } from '~/components/mdx-content'
import { DocsFooter } from '~/components/navigation/docs/docs-footer'
import { TableOfContent } from '~/components/navigation/table-of-content'
import { Heading, Prose, Text } from '~/components/ui'
import { getSidebarGroups } from '~/lib/docs'
import { getServerContext } from '~/lib/server-context'
import { capitalize } from '~/lib/string-utils'

interface Props {
  params: { framework: string; slug: string[] }
}

export default function Page(props: Props) {
  const currentPage = getPageBySlug(props.params.slug, props.params.framework)
  const nextPage = getNextPage(props.params.slug)
  const prevPage = getPrevPage(props.params.slug)

  const serverContext = getServerContext()
  serverContext.framework = props.params.framework
  serverContext.component = props.params.slug[1]

  const framework = capitalize(props.params.framework)

  if (currentPage) {
    return (
      <Container display="flex" py="12" gap="8" justifyContent="center">
        <Stack gap="16" px={{ base: '0', xl: '8' }} width="full">
          <Prose css={{ maxWidth: '45rem', mx: 'auto', width: '100%' }}>
            <Heading as="h1" fontWeight="bold">
              {currentPage.id === 'introduction' ? 'Welcome to Park UI' : currentPage.title}
            </Heading>
            <Text className="lead" color="fg.muted" mb="6">
              {currentPage.id === 'introduction'
                ? `A ${framework} Component Library built on Ark UI and Panda CSS.`
                : currentPage.description}
            </Text>
            <DocumentationBadges framework={props.params.framework} href={currentPage.docs} />
            <MDXContent code={currentPage.code} />
          </Prose>
          <DocsFooter nextPage={nextPage} prevPage={prevPage} />
        </Stack>
        <Box flexGrow="1" width="full" maxW="14rem" display={{ base: 'none', xl: 'block' }}>
          <Box position="fixed">
            <TableOfContent entries={currentPage.toc} />
          </Box>
        </Box>
      </Container>
    )
  }
  return notFound()
}

export const generateMetadata = (props: Props): Metadata => {
  const page = getPageBySlug(props.params.slug)
  const framework = capitalize(props.params.framework)

  if (page) {
    const description =
      page.id === 'introduction'
        ? `A ${framework} Component Library built on Ark UI and Panda CSS.`
        : page.description
    return {
      title: page.title,
      description,
      alternates: {
        canonical: `https://park-ui.com/${props.params.framework}/docs/${props.params.slug.join('/')}`,
      },
    }
  }
  return {}
}

const pages = getSidebarGroups().flat()

export const generateStaticParams = () =>
  ['react', 'solid', 'vue'].flatMap((framework) =>
    pages.map((page) => ({ framework, slug: page.slug.split('/') })),
  )

const getPageBySlug = (slug: string[], framework?: string) => {
  if (framework) {
    return pages.find(
      (page) =>
        page.slug === slug.join('/') && (page.framework === '*' || page.framework === framework),
    )
  }
  return pages.find((page) => page.slug === slug.join('/'))
}

const getNextPage = (slug: string[]) => {
  const index = pages.findIndex((page) => page.slug === slug.join('/'))
  return pages[index + 1]
}

const getPrevPage = (slug: string[]) => {
  const index = pages.findIndex((page) => page.slug === slug.join('/'))
  return pages[index - 1]
}
