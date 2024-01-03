import {
  RatingGroup as ArkRatingGroup,
  type RatingGroupProps as ArkRatingGroupProps,
} from '@ark-ui/solid'
import { Index, Show, children, splitProps, type JSX } from 'solid-js'
import { css, cx } from 'styled-system/css'
import { ratingGroup, type RatingGroupVariantProps } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'

export interface RatingGroupProps
  extends ArkRatingGroupProps,
    RatingGroupVariantProps,
    Omit<HTMLStyledProps<'div'>, 'defaultValue' | 'content' | 'color' | 'dir' | 'translate'> {
  children?: JSX.Element
}

export const RatingGroup = (props: RatingGroupProps) => {
  const [variantProps, localProps] = ratingGroup.splitVariantProps(props)
  const [local, rootProps] = splitProps(localProps, ['children'])
  const getChildren = children(() => local.children)
  const styles = ratingGroup(variantProps)

  return (
    <ArkRatingGroup.Root class={cx(styles.root, css(rootProps))} {...rootProps}>
      <Show when={getChildren()}>
        <ArkRatingGroup.Label class={styles.label}>{local.children}</ArkRatingGroup.Label>
      </Show>
      <ArkRatingGroup.Control class={styles.control}>
        {(api) => (
          <Index each={api().items}>
            {(index) => (
              <ArkRatingGroup.Item class={styles.item} index={index()}>
                {(api) => <Icon isHalf={api().isHalf} />}
              </ArkRatingGroup.Item>
            )}
          </Index>
        )}
      </ArkRatingGroup.Control>
    </ArkRatingGroup.Root>
  )
}

RatingGroup.displayName = 'RatingGroup'

type IconProps = {
  isHalf: boolean
}

const Icon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="inherit"
    stroke="inherit"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <defs>
      <linearGradient id="half">
        <stop offset="50%" stop-color="var(--color-accent-default)" />
        <stop offset="50%" stop-color="var(--color-bg-emphasized)" />
      </linearGradient>
    </defs>
    <polygon
      fill={props.isHalf ? 'url(#half)' : 'inherit'}
      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
    />
  </svg>
)
