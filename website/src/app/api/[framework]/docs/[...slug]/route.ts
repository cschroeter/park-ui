import { docs } from '.velite'
import { getDocumentBySlug } from '~/lib/docs'
import { type Framework, frameworks } from '~/lib/frameworks'
import { replaceComponentExamples, replaceInstallationGuide, replacePropsTables } from '~/lib/mdx'

export const dynamic = 'force-static'

type Params = Promise<{ slug: string[]; framework: string }>

export async function GET(_: Request, segmentData: { params: Params }) {
  const params = await segmentData.params

  const doc = getDocumentBySlug(params.slug)
  if (!doc) {
    return new Response('Not Found', { status: 404 })
  }

  const title = doc.title
  const description = doc.description

  let content = await replaceComponentExamples({
    component: doc.id,
    framework: params.framework as Framework,
    content: doc.content,
  })

  content = await replacePropsTables({
    component: doc.id,
    framework: params.framework as Framework,
    content,
  })

  content = await replaceInstallationGuide({
    component: doc.id,
    framework: params.framework as Framework,
    content,
  })

  const contentWithHeader = `# ${title}\n\n${description}\n\n${content}`

  return new Response(contentWithHeader, {
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
