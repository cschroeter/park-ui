import type { PropsWithChildren } from 'react'
import * as runtime from 'react/jsx-runtime'
import { Step, Steps } from '../ui/steps'
import { CodeSnippet } from './code-snippet'
import { ComponentExample } from './component-example'
import { FigmaKitPreview } from './figma-kit-preview'
import { QuickstartGuide } from './quickstart-guide'

// TODO this needs to be more capable
const Pre = async (props: PropsWithChildren) => {
  // @ts-expect-error it exists
  const lang = props.children?.props.className?.replace('language-', '')
  // @ts-expect-error it exists
  const code = props.children?.props.children.toString() as string

  return <CodeSnippet lang={lang} code={code} />
}

const sharedComponents = {
  ComponentExample,
  FigmaKitPreview,
  QuickstartGuide,
  Step,
  Steps,
  pre: Pre,
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

interface MDXProps {
  mdx: string
  components?: Record<string, React.ComponentType>
}

export const MDXContent = ({ mdx, components }: MDXProps) => {
  const Component = useMDXComponent(mdx)

  return <Component components={{ ...sharedComponents, ...components }} />
}
