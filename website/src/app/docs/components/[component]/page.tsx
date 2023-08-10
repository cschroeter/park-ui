import { notFound } from 'next/navigation'
import { Stack } from 'styled-system/jsx'
import { Code } from '~/components/docs/code'
import { ArkDocumentationLinks } from '~/components/docs/components/ark-documentation-links'
import { EarlyAccesWarning } from '~/components/docs/components/early-access-warning'
import { Playground } from '~/components/docs/components/playground'
import { DocsFooter } from '~/components/layout/docs-footer'
import { PageHeader } from '~/components/layout/page-header'
import { TableOfContent } from '~/components/layout/table-of-content'
import { TabContent, TabIndicator, TabList, TabTrigger, Tabs } from '~/components/ui/tabs'
import { findComponent } from '~/lib/find-component'
import { slugify } from '~/lib/slugify'
import { sitemap } from '~/sitemap'

const Page = async (props: any) => {
  const component = await findComponent(props.params.component)

  if (!component) {
    notFound()
  }

  return (
    <>
      <Stack gap="12" width={{ base: 'full', xl: '2xl' }}>
        <EarlyAccesWarning />
        <PageHeader
          subHeading="Component"
          heading={component.title}
          supportingText={component.description}
        >
          {!component.isPrimitive && <ArkDocumentationLinks name={component.title} />}
        </PageHeader>
        <Tabs defaultValue="preview">
          <TabList>
            <TabTrigger value="preview">Preview</TabTrigger>
            <TabTrigger value="code">Code</TabTrigger>
            <TabTrigger value="snippet">Snippet</TabTrigger>
            <TabTrigger value="recipe">Recipe</TabTrigger>
            <TabIndicator />
          </TabList>
          <TabContent value="preview">
            <Playground component={component.title} defaultProps={component.defaultProps} />
          </TabContent>
          <TabContent value="code">
            <Code code={component.files.code} h="md" />
          </TabContent>
          <TabContent value="snippet">
            <Code code={component.files.snippet} h="md" />
          </TabContent>
          <TabContent value="recipe">
            <Code code={component.files.recipe} h="md" />
          </TabContent>
        </Tabs>
        <DocsFooter currentPageTitle={component.title} />
      </Stack>
      <TableOfContent />
    </>
  )
}

export const generateStaticParams = () => {
  const result = sitemap.flatMap((section) =>
    section.entries
      .filter((entry) => entry.href.includes('/docs/components'))
      .map((entry) => ({
        component: slugify(entry.title),
      })),
  )
  return result
}

export const generateMetadata = async (props: any) => {
  const entry = sitemap
    .flatMap((section) => section.entries)
    .find((entry) => entry.href === `/docs/components/${props.params?.component as string}`)

  return {
    title: entry?.title,
    description: entry?.description,
  }
}

export default Page
