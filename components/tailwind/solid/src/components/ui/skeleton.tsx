import { ark, type HTMLArkProps } from '@ark-ui/solid'
import { Show, splitProps, type JSX } from 'solid-js'
import { tv, type VariantProps } from 'tailwind-variants'

export interface SkeletonProps extends HTMLArkProps<'div'>, SkeletonVariantProps {
  children?: JSX.Element
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
      fallback={<ark.div class={styles({ class: localProps.class })} {...skeletonProps} />}
    >
      <ark.div class="animate-fade-in" {...skeletonProps} />
    </Show>
  )
}

type SkeletonVariantProps = VariantProps<typeof styles>

const styles = tv({ base: 'skeleton', variants: {} }, { twMerge: false })
