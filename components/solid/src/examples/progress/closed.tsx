import { type JSX, Show, splitProps } from 'solid-js'
import * as StyledProgress from '@/components/ui/progress'

export interface ProgressProps extends StyledProgress.RootProps {
  showValueText?: boolean
  valueText?: JSX.Element
  label?: JSX.Element
}

export const Progress = (props: ProgressProps) => {
  const [local, rest] = splitProps(props, ['showValueText', 'valueText', 'label'])

  return (
    <StyledProgress.Root {...rest}>
      <Show when={local.label}>
        <StyledProgress.Label>{local.label}</StyledProgress.Label>
      </Show>
      <StyledProgress.Track>
        <StyledProgress.Range />
      </StyledProgress.Track>
      <Show when={local.showValueText}>
        <StyledProgress.ValueText>{local.valueText}</StyledProgress.ValueText>
      </Show>
    </StyledProgress.Root>
  )
}
