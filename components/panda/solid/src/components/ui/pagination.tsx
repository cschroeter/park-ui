import { Pagination as ArkPagination, type PaginationRootProps } from '@ark-ui/solid'
import { For, splitProps } from 'solid-js'
import { css, cx } from 'styled-system/css'
import { splitCssProps } from 'styled-system/jsx'
import { pagination, type PaginationVariantProps } from 'styled-system/recipes'
import type { Assign, JsxStyleProps } from 'styled-system/types'
import { Button } from '~/components/ui/button'
import { IconButton } from '~/components/ui/icon-button'

export interface PaginationProps
  extends Assign<JsxStyleProps, PaginationRootProps>,
    PaginationVariantProps {}

export const Pagination = (props: PaginationProps) => {
  const [variantProps, numberInputProps] = pagination.splitVariantProps(props)
  const [cssProps, elementProps] = splitCssProps(numberInputProps)
  const [localProps, rootProps] = splitProps(elementProps, ['children', 'class'])
  const styles = pagination(variantProps)

  return (
    // @ts-expect-error TODO cssProps is to complex to be typed
    <ArkPagination.Root class={cx(styles.root, css(cssProps), localProps.class)} {...rootProps}>
      {(api) => (
        <>
          <ArkPagination.PrevTrigger class={styles.prevTrigger}>
            <IconButton variant="ghost" aria-label="Next Page">
              <ChevronLeftIcon />
            </IconButton>
          </ArkPagination.PrevTrigger>
          <For each={api().pages}>
            {(page, index) =>
              page.type === 'page' ? (
                <ArkPagination.Item {...page} class={styles.item} as={Button} variant="outline">
                  {page.value}
                </ArkPagination.Item>
              ) : (
                <ArkPagination.Ellipsis index={index()} class={styles.ellipsis}>
                  &#8230;
                </ArkPagination.Ellipsis>
              )
            }
          </For>
          <ArkPagination.NextTrigger class={styles.nextTrigger}>
            <IconButton variant="ghost" aria-label="Next Page">
              <ChevronRightIcon />
            </IconButton>
          </ArkPagination.NextTrigger>
        </>
      )}
    </ArkPagination.Root>
  )
}

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>Chevron Left Icon</title>
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m15 18l-6-6l6-6"
    />
  </svg>
)

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>Chevron Right Icon</title>
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m9 18l6-6l-6-6"
    />
  </svg>
)
