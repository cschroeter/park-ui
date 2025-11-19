import { ark } from '@ark-ui/solid/factory'
import { type JSX, Show, splitProps } from 'solid-js'
import { createStyleContext, type HTMLStyledProps } from 'styled-system/jsx'
import { type InputGroupVariantProps, inputGroup } from 'styled-system/recipes'
import { Group } from './group'

const { withProvider, withContext } = createStyleContext(inputGroup)

export const Addon = withContext(ark.div, 'addon')
export const Element = withContext(ark.div, 'element')

export type RootProps = HTMLStyledProps<'div'> & InputGroupVariantProps
const StyledRoot = withProvider(ark.div, 'root')

export const Root = (props: RootProps) => {
  return <StyledRoot {...props} asChild={(props) => <Group attached {...props()} />}></StyledRoot>
}

export interface ControlProps extends HTMLStyledProps<'div'> {
  startElement?: JSX.Element
  endElement?: JSX.Element
}
const StyledControl = withContext(ark.div, 'control')

export const Control = (props: ControlProps) => {
  const [local, rest] = splitProps(props, ['startElement', 'endElement', 'children'])
  return (
    <StyledControl {...rest}>
      <Show when={local.startElement}>
        <Element insetInlineStart="0" top="0">
          {local.startElement}
        </Element>
      </Show>
      {local.children}
      <Show when={local.endElement}>
        <Element insetInlineEnd="0" top="0">
          {local.endElement}
        </Element>
      </Show>
    </StyledControl>
  )
}
