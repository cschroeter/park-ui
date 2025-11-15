import { ark } from '@ark-ui/solid'
import { Switch, useSwitchContext } from '@ark-ui/solid/switch'
import { type ComponentProps, type JSX, Show, splitProps } from 'solid-js'
import { createStyleContext, styled } from 'styled-system/jsx'
import { switchRecipe } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(switchRecipe)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(Switch.Root, 'root')
export const RootProvider = withProvider(Switch.RootProvider, 'root')
export const Label = withContext(Switch.Label, 'label')
export const Thumb = withContext(Switch.Thumb, 'thumb')
export const HiddenInput = Switch.HiddenInput

export const Control = withContext(Switch.Control, 'control', {
  defaultProps: () => ({ children: <Thumb /> }),
})

export { SwitchContext as Context } from '@ark-ui/solid/switch'

interface IndicatorProps extends ComponentProps<typeof StyledIndicator> {
  fallback?: JSX.Element | undefined
}

const StyledIndicator = withContext(ark.span, 'indicator')
export const Indicator = (props: IndicatorProps) => {
  const [local, rest] = splitProps(props, ['fallback', 'children'])
  const api = useSwitchContext()

  return (
    <StyledIndicator data-checked={api().checked ? '' : undefined} {...rest}>
      <Show when={api().checked} fallback={local.fallback}>
        {local.children}
      </Show>
    </StyledIndicator>
  )
}

interface ThumbIndicatorProps extends ComponentProps<typeof StyledThumbIndicator> {
  fallback?: JSX.Element | undefined
}

const StyledThumbIndicator = styled(ark.span)
export const ThumbIndicator = (props: ThumbIndicatorProps) => {
  const [local, rest] = splitProps(props, ['fallback', 'children'])
  const api = useSwitchContext()

  return (
    <StyledThumbIndicator data-checked={api().checked ? '' : undefined} {...rest}>
      <Show when={api().checked} fallback={local.fallback}>
        {local.children}
      </Show>
    </StyledThumbIndicator>
  )
}
