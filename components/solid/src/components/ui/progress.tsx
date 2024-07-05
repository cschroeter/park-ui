import { Show, children, splitProps } from 'solid-js'
import { Progress as ArkProgress } from '~/components/ui/primitives'

export interface ProgressProps extends ArkProgress.RootProps {
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
    <ArkProgress.Root {...rootProps}>
      <Show when={getChildren()}>
        <ArkProgress.Label>{getChildren()}</ArkProgress.Label>
      </Show>
      <Show
        when={localProps.type === 'circular'}
        fallback={
          <ArkProgress.Track>
            <ArkProgress.Range />
          </ArkProgress.Track>
        }
      >
        <ArkProgress.Circle>
          <ArkProgress.CircleTrack />
          <ArkProgress.CircleRange />
          <ArkProgress.ValueText />
        </ArkProgress.Circle>
      </Show>
      <ArkProgress.ValueText />
    </ArkProgress.Root>
  )
}
