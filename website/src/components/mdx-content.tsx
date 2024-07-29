import * as runtime from 'react/jsx-runtime'
import { Faq } from '~/components/docs/faq'
import { Code } from '~/components/ui/code'
import { Kbd } from '~/components/ui/kbd'
import { Link } from '~/components/ui/link'
import { Pre } from '~/components/ui/pre'
import { ComponentPlayground } from './docs/component-playground'
import { ComponentPreview } from './docs/component-preview'
import { FigmaKitPreview } from './docs/figma-kit-preview'
import { InstallationGuide } from './docs/installation-guide'
import { Quickstart } from './docs/quickstart'
import { ColorGrid } from './theming/color-grid'
import { ColorPairings } from './theming/color-pairings'
import { ColorPalette } from './theming/color-palette'
import { ColorTokens } from './theming/color-tokens'
import { RadiusTokens } from './theming/radius-tokens'
import { ShadowTokens } from './theming/shadow-tokens'
import { Step, Steps } from './ui/stepper'

const sharedComponents = {
  a: Link,
  code: Code,
  ColorPalette,
  ColorGrid,
  ColorPairings,
  ColorTokens,
  ComponentPreview,
  ComponentPlayground,
  Faq,
  FigmaKitPreview,
  InstallationGuide,
  kbd: Kbd,
  pre: Pre,
  Quickstart,
  RadiusTokens,
  ShadowTokens,
  Step,
  Steps,
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

interface MDXProps {
  code: string
  components?: Record<string, React.ComponentType>
}

export const MDXContent = ({ code, components }: MDXProps) => {
  const Component = useMDXComponent(code)
  return <Component components={{ ...sharedComponents, ...components }} />
}
