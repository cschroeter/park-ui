import { Show, children, splitProps } from 'solid-js'
import * as StyledProgress from './styled/progress'

export interface ProgressProps extends StyledProgress.RootProps {
  /**
   * The type of progress to render.
   * @default linear
   */
  type?: 'linear' | 'circular'
}

export const Progress = (props: ProgressProps) => {
  const [localProps, rootProps] = splitProps(props, ['children', 'type'])
  const getChildren = children(() => localProps.children)

  return (
    <StyledProgress.Root {...rootProps}>
      <Show when={getChildren()}>
        <StyledProgress.Label>{getChildren()}</StyledProgress.Label>
      </Show>
      <Show
        when={localProps.type === 'circular'}
        fallback={
          <StyledProgress.Track>
            <StyledProgress.Range />
          </StyledProgress.Track>
        }
      >
        <StyledProgress.Circle>
          <StyledProgress.CircleTrack />
          <StyledProgress.CircleRange />
          <StyledProgress.ValueText />
        </StyledProgress.Circle>
      </Show>
      <StyledProgress.ValueText />
    </StyledProgress.Root>
  )
}
