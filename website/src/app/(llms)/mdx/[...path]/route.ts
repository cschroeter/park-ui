import { getDocumentBySlug } from '~/lib/docs'

export const dynamic = 'force-static'

type Params = Promise<{ path: string[] }>

export async function GET(_: Request, segmentData: { params: Params }) {
  const params = await segmentData.params
  const doc = getDocumentBySlug(params.path)

  if (doc) {
    return new Response(doc.llm, {
      headers: {
        'Content-Type': 'text/mdx; charset=utf-8',
      },
    })
  }

  return new Response('Not Found', { status: 404 })
}
