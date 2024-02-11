import { Progress as ArkProgress, type ProgressRootProps } from '@ark-ui/solid'
import { type JSX, Show, children, splitProps } from 'solid-js'
import { type VariantProps, tv } from 'tailwind-variants'

export interface ProgressProps extends ProgressRootProps, ProgressVariantProps {
  children?: JSX.Element
  /**
   * The type of progress to render.
   * @default linear
   */
  type?: 'linear' | 'circular'
}

export const Progress = (props: ProgressProps) => {
  const [variantProps, progressProps] = splitProps(props, ['class', 'size'])
  const [localProps, rootProps] = splitProps(progressProps, ['children', 'type'])
  const getChildren = children(() => localProps.children)
  const { root, label, track, range, circle, circleRange, circleTrack, valueText } =
    styles(variantProps)

  return (
    <ArkProgress.Root class={root({ class: variantProps.class })} {...rootProps}>
      <Show when={getChildren()}>
        <ArkProgress.Label class={label()}>{getChildren()}</ArkProgress.Label>
      </Show>
      <Show
        when={localProps.type === 'circular'}
        fallback={
          <ArkProgress.Track class={track()}>
            <ArkProgress.Range class={range()} />
          </ArkProgress.Track>
        }
      >
        <ArkProgress.Circle class={circle()}>
          <ArkProgress.CircleTrack class={circleTrack()} />
          <ArkProgress.CircleRange class={circleRange()} />
          <ArkProgress.ValueText class={valueText()} />
        </ArkProgress.Circle>
      </Show>
      <ArkProgress.ValueText class={valueText()} />
    </ArkProgress.Root>
  )
}

type ProgressVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    base: 'progress',
    defaultVariants: { size: 'md' },
    slots: {
      root: 'progress__root',
      label: 'progress__label',
      track: 'progress__track',
      range: 'progress__range',
      valueText: 'progress__valueText',
      view: 'progress__view',
      circle: 'progress__circle',
      circleTrack: 'progress__circleTrack',
      circleRange: 'progress__circleRange',
    },
    variants: {
      size: {
        sm: {
          root: 'progress__root--size_sm',
          label: 'progress__label--size_sm',
          track: 'progress__track--size_sm',
          range: 'progress__range--size_sm',
          valueText: 'progress__valueText--size_sm',
          view: 'progress__view--size_sm',
          circle: 'progress__circle--size_sm',
          circleTrack: 'progress__circleTrack--size_sm',
          circleRange: 'progress__circleRange--size_sm',
        },
        md: {
          root: 'progress__root--size_md',
          label: 'progress__label--size_md',
          track: 'progress__track--size_md',
          range: 'progress__range--size_md',
          valueText: 'progress__valueText--size_md',
          view: 'progress__view--size_md',
          circle: 'progress__circle--size_md',
          circleTrack: 'progress__circleTrack--size_md',
          circleRange: 'progress__circleRange--size_md',
        },
        lg: {
          root: 'progress__root--size_lg',
          label: 'progress__label--size_lg',
          track: 'progress__track--size_lg',
          range: 'progress__range--size_lg',
          valueText: 'progress__valueText--size_lg',
          view: 'progress__view--size_lg',
          circle: 'progress__circle--size_lg',
          circleTrack: 'progress__circleTrack--size_lg',
          circleRange: 'progress__circleRange--size_lg',
        },
      },
    },
  },
  { twMerge: false },
)
