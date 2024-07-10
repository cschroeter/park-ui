import { getServerContext } from '~/lib/server-context'
import { ComponentPreview } from './component-preview'
import { controls } from '.velite'

export const ComponentPlayground = () => {
  const { component } = getServerContext()
  const defaultControls = { component, props: {} }

  const componentControls =
    controls.filter((control) => control.component === component)[0] || defaultControls

  return <ComponentPreview controls={componentControls} />
}
