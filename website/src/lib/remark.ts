import type { Properties } from 'hast'
import { h } from 'hastscript'
import type { Code, Node, Paragraph, Root, Strong } from 'mdast'
import type { ContainerDirective, ContainerDirectiveData } from 'mdast-util-directive'
import { visit } from 'unist-util-visit'

interface CalloutData extends ContainerDirectiveData {
  hName?: string
  hProperties?: Properties
  directiveLabel?: boolean
}

interface CalloutNode extends ContainerDirective {
  name: 'callout' | 'info' | 'warning' | 'danger' | 'tip' | 'success' | 'note'
  data?: CalloutData
}

export function remarkCallout() {
  return (tree: Root) => {
    visit(tree, 'containerDirective', (node: ContainerDirective) => {
      if (
        node.name !== 'callout' &&
        node.name !== 'info' &&
        node.name !== 'warning' &&
        node.name !== 'danger' &&
        node.name !== 'tip' &&
        node.name !== 'success' &&
        node.name !== 'note'
      )
        return

      const calloutNode = node as CalloutNode

      // Find the directive label child node
      const labelChild = calloutNode.children.find((child) => {
        return 'data' in child && (child.data as CalloutData)?.directiveLabel === true
      })

      // Extract label text from the first child's value
      const label =
        labelChild && 'children' in labelChild
          ? (labelChild.children as Array<{ value?: string }>)?.[0]?.value
          : undefined

      const data: CalloutData = calloutNode.data || {}
      calloutNode.data = data
      const tagName = 'callout'

      if (label) {
        calloutNode.children = calloutNode.children.filter(
          (child: Node) => !('data' in child) || !(child.data as CalloutData)?.directiveLabel,
        )

        const titleParagraph: Paragraph = {
          type: 'paragraph',
          data: { hProperties: { 'data-callout-title': true } },
          children: [
            {
              type: 'strong',
              children: [{ type: 'text', value: label }],
            } as Strong,
          ],
        }

        calloutNode.children.unshift(titleParagraph)
      }

      data.hName = tagName
      data.hProperties = {
        ...h(tagName, calloutNode.attributes || {}).properties,
        type: calloutNode.name !== 'callout' ? calloutNode.name : true,
      }
    })
  }
}

export function remarkCodeMeta() {
  return (tree: Root) => {
    visit(tree, 'code', (node: Code) => {
      const meta = node.meta || ''
      if (meta) {
        node.data = node.data || {}
        node.data.hProperties = node.data.hProperties || {}
        const hProperties = node.data.hProperties
        hProperties['data-meta'] = meta

        // Parse meta string and add individual properties
        const metaParts = meta.split(/\s+/)
        metaParts.forEach((part: string) => {
          const [key, value] = part.split('=')
          if (value) {
            hProperties[`data-${key}`] = value.replace(/['"]/g, '')
          } else {
            // For flags without values (like "multi")
            hProperties[`data-${part}`] = true
          }
        })
      }
    })
  }
}
