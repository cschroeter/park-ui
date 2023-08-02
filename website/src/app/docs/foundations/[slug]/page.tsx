import { notFound } from 'next/navigation'
import { Stack } from 'styled-system/jsx'
import { match } from 'ts-pattern'
import { Code } from '~/components/docs/code'
import { SemanticTokensShowcase } from '~/components/docs/showcase/semantic-tokens-showcase'
import { TextStylesShowcase } from '~/components/docs/showcase/text-styles-showcase'
import { DocsFooter } from '~/components/layout/docs-footer'
import { PageHeader } from '~/components/layout/page-header'
import { TableOfContent } from '~/components/layout/table-of-content'
import { TabContent, TabIndicator, TabList, TabTrigger, Tabs } from '~/components/tabs'
import { findFoundation } from '~/lib/find-foundation'
import { slugify } from '~/lib/slugify'
import { sitemap } from '~/sitemap'

const Page = async (props: any) => {
  const foundation = await findFoundation(props.params.slug)

  if (!foundation) {
    notFound()
  }

  return (
    <>
      <Stack gap="12" width={{ base: 'full', xl: '41rem' }}>
        <PageHeader
          subHeading="Foundation"
          heading={foundation.title}
          supportingText={foundation.description}
        />
        <Tabs defaultValue="preview" size={{ base: 'md', sm: 'sm' }}>
          <TabList>
            <TabTrigger value="preview">Preview</TabTrigger>
            <TabTrigger value="config">Config</TabTrigger>
            <TabIndicator />
          </TabList>
          <TabContent value="preview">
            {match(foundation)
              .with({ title: 'Semantic Tokens' }, () => <SemanticTokensShowcase />)
              .with({ title: 'Text Styles' }, () => <TextStylesShowcase />)
              .otherwise(() => (
                <div>Coming soon...</div>
              ))}
          </TabContent>
          <TabContent value="config">
            <Code code={foundation.files.config} />
          </TabContent>
        </Tabs>
        <DocsFooter currentPageTitle={foundation.title} />
      </Stack>
      <TableOfContent />
    </>
  )
}

export const generateStaticParams = () => {
  const result = sitemap.flatMap((section) =>
    section.entries
      .filter((entry) => entry.href.includes('/docs/foundations'))
      .map((entry) => ({
        slug: slugify(entry.title),
      })),
  )
  return result
}

export const generateMetadata = async (props: any) => {
  const entry = sitemap
    .flatMap((section) => section.entries)
    .find((entry) => entry.href === `/docs/foundations/${props.params?.slug as string}`)

  return {
    title: entry?.title,
    description: entry?.description,
  }
}

export default Page
