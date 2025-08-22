import * as runtime from 'react/jsx-runtime'
import { ComponentExample } from '~/components/docs/component-example'
import { FigmaKitPreview } from './figma-kit-preview'

const sharedComponents = {
  ComponentExample,
  FigmaKitPreview,
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
