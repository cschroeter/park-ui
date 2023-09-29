import { notFound } from 'next/navigation'
import { Stack } from 'styled-system/jsx'
import { match } from 'ts-pattern'
import { About } from '~/components/docs/overview/about'
import { Changelog } from '~/components/docs/overview/changelog'
import { FigmaLibrary } from '~/components/docs/overview/figma-library'
import { GettingStarted } from '~/components/docs/overview/getting-started'
import { Introduction } from '~/components/docs/overview/introduction'
import { DocsFooter } from '~/components/layout/docs-footer'
import { PageHeader } from '~/components/layout/page-header'
import { TableOfContent } from '~/components/layout/table-of-content'
import { slugify } from '~/lib/slugify'
import { sitemap } from '~/sitemap'

const Page = async (props: any) => {
  const page = sitemap
    .flatMap((section) => section.entries)
    .find((entry) => entry.href === `/docs/overview/${props.params?.slug as string}`)

  if (!page) {
    notFound()
  }

  return (
    <>
      <Stack gap="12" width={{ base: 'full', xl: '2xl' }}>
        <PageHeader subHeading="Component" heading={page.title} supportingText={page.description} />
        {match(page)
          .with({ title: 'Introduction' }, () => <Introduction />)
          .with({ title: 'Getting Started' }, () => <GettingStarted />)
          .with({ title: 'Figma Library' }, () => <FigmaLibrary />)
          .with({ title: 'Changelog' }, () => <Changelog />)
          .with({ title: 'About' }, () => <About />)
          .otherwise(() => {
            throw new Error('Page not found')
          })}
        <DocsFooter currentPageTitle={page.title} />
      </Stack>
      <TableOfContent />
    </>
  )
}

export const generateStaticParams = () => {
  const result = sitemap.flatMap((section) =>
    section.entries
      .filter((entry) => entry.href.includes('/docs/overview'))
      .map((entry) => ({
        slug: slugify(entry.title),
      })),
  )
  return result
}

export const generateMetadata = async (props: any) => {
  const entry = sitemap
    .flatMap((section) => section.entries)
    .find((entry) => entry.href === `/docs/overview/${props.params?.slug as string}`)

  return {
    title: entry?.title,
    description: entry?.description,
  }
}

export default Page
