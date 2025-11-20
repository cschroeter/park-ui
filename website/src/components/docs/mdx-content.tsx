import * as runtime from 'react/jsx-runtime'
import { Code } from '@/components/ui'
import { PageLink } from '../navigation/page-link'
import { Pre } from '../ui/pre'
import { Step, Steps } from '../ui/steps'
import { BorderRadiusTokens } from './border-radius-tokens'
import { Callout } from './callout'
import { ColorGrid } from './color-grid'
import { ColorPairings } from './color-pairings'
import { ComponentExample } from './component-example'
import { ComponentSizing } from './component-sizing'
import { FigmaKitPreview } from './figma-kit-preview'
import { InstallationGuide } from './installation-guide'
import { PropsTable } from './props-table'
import { QuickstartGuide } from './quickstart-guide'
import { ShadowTokens } from './shadow-tokens'
import { VariantPreview } from './variant-preview'

const sharedComponents = {
  BorderRadiusTokens,
  ColorGrid,
  ColorPairings,
  ComponentExample,
  ComponentSizing,
  FigmaKitPreview,
  InstallationGuide,
  PropsTable,
  QuickstartGuide,
  ShadowTokens,
  Step,
  Steps,
  VariantPreview,
  a: PageLink,
  code: Code,
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
