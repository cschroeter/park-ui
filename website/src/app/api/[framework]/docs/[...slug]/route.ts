import { docs } from '.velite'
import { getDocumentBySlug } from '~/lib/docs'
import { type Framework, frameworks } from '~/lib/frameworks'
import { transformMdxContent } from '~/lib/mdx'

type Params = Promise<{ slug: string[]; framework: string }>

export async function GET(_: Request, segmentData: { params: Params }) {
  const params = await segmentData.params

  const doc = getDocumentBySlug(params.slug)
  if (!doc) {
    return new Response('Not Found', { status: 404 })
  }

  const content = await transformMdxContent(doc, params.framework as Framework)

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  })
}

export async function generateStaticParams() {
  return frameworks.flatMap((framework) =>
    docs.map((doc) => ({ slug: doc.slug.split('/'), framework })),
  )
}
