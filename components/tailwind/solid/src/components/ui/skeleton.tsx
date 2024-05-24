import { type HTMLArkProps, ark } from '@ark-ui/solid'
import { Show, splitProps } from 'solid-js'
import { type VariantProps, tv } from 'tailwind-variants'

export interface SkeletonProps extends HTMLArkProps<'div'>, SkeletonVariantProps {
  /**
   * @default false
   */
  isLoaded?: boolean
}

export const Skeleton = (props: SkeletonProps) => {
  const [localProps, skeletonProps] = splitProps(props, ['class', 'isLoaded'])

  return (
    <Show
      when={localProps.isLoaded}
      fallback={<ark.div class={skeleton({ class: localProps.class })} {...skeletonProps} />}
    >
      <ark.div class="animate-fade-in" {...skeletonProps} />
    </Show>
  )
}

type SkeletonVariantProps = VariantProps<typeof skeleton>

const skeleton = tv({ base: 'skeleton', variants: {} }, { twMerge: false })
