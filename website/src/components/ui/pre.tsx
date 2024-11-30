import type { PropsWithChildren } from 'react'
import { Box } from 'styled-system/jsx'
import { CodePreview } from '~/components/code-preview'
import { highlight } from '~/lib/shiki'
import { LivePreview } from '../live-preview'

export const Pre = async (props: PropsWithChildren) => {
  // @ts-expect-error it exists
  const lang = props.children?.props.className?.replace('language-', '')
  // @ts-expect-error it exists
  const rawCode = props.children?.props.children.toString() as string

  const hasPreview = rawCode.startsWith('// live')
  const code = rawCode.replace('// live', '').trim()
  const html = await highlight(code, lang)

  return (
    <Box borderWidth="1px" borderRadius="l3" overflow="hidden">
      {hasPreview && (
        <Box p={{ base: '4', md: '6' }} borderBottomWidth="1px" className="not-prose">
          <LivePreview code={code} />
        </Box>
      )}
      <CodePreview html={html} code={code} />
    </Box>
  )
}
