import type { PropsWithChildren } from 'react'
import * as runtime from 'react/jsx-runtime'
import type { SourceCode } from '~/types'
import { PageLink } from '../navigation/page-link'
import { Step, Steps } from '../ui/steps'
import { BorderRadiusTokens } from './border-radius-tokens'
import { Callout } from './callout'
import { CodeSnippet } from './code-snippet'
import { ColorGrid } from './color-grid'
import { ColorPairings } from './color-pairings'
import { ComponentExample } from './component-example'
import { FigmaKitPreview } from './figma-kit-preview'
import { InstallationGuide } from './installation-guide'
import { QuickstartGuide } from './quickstart-guide'
import { ShadowTokens } from './shadow-tokens'

// TODO this needs to be more capable
const Pre = async (props: PropsWithChildren) => {
  // @ts-expect-error it exists
  const lang = props.children?.props.className?.replace('language-', '')
  // @ts-expect-error it exists
  const code = props.children?.props.children.toString() as string

  const sourceCode: SourceCode = { code, lang }

  return <CodeSnippet sourceCode={sourceCode} />
}

const sharedComponents = {
  BorderRadiusTokens,
  ColorGrid,
  ColorPairings,
  ComponentExample,
  FigmaKitPreview,
  InstallationGuide,
  QuickstartGuide,
  ShadowTokens,
  Step,
  Steps,
  a: PageLink,
  callout: Callout,
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
