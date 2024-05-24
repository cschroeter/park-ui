import { Progress as ArkProgress, type ProgressRootProps } from '@ark-ui/react/progress'
import { forwardRef } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

export interface ProgressProps extends ProgressRootProps, ProgressVariantProps {
  /**
   * The type of progress to render.
   * @default linear
   */
  type?: 'linear' | 'circular'
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {
  const { children, className, size, type = 'linear', ...rootProps } = props
  const { root, label, track, range, circle, circleRange, circleTrack, valueText } = progress({
    size,
  })

  return (
    <ArkProgress.Root ref={ref} className={root({ className })} {...rootProps}>
      {children && <ArkProgress.Label className={label()}>{children}</ArkProgress.Label>}
      {type === 'linear' && (
        <ArkProgress.Track className={track()}>
          <ArkProgress.Range className={range()} />
        </ArkProgress.Track>
      )}
      {type === 'circular' && (
        <ArkProgress.Circle className={circle()}>
          <ArkProgress.CircleTrack className={circleTrack()} />
          <ArkProgress.CircleRange className={circleRange()} />
          <ArkProgress.ValueText className={valueText()} />
        </ArkProgress.Circle>
      )}
      <ArkProgress.ValueText className={valueText()} />
    </ArkProgress.Root>
  )
})

Progress.displayName = 'Progress'

type ProgressVariantProps = VariantProps<typeof progress>

const progress = tv(
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
