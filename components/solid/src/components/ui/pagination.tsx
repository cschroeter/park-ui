import { Pagination as ArkPagination, type Assign, type PaginationRootProps } from '@ark-ui/solid'
import { For, splitProps } from 'solid-js'
import { css, cx } from 'styled-system/css'
import { splitCssProps } from 'styled-system/jsx'
import { type PaginationVariantProps, pagination } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { IconButton } from '~/components/ui/icon-button'
import { Button } from './button'

export interface PaginationProps
  extends Assign<JsxStyleProps, PaginationRootProps>,
    PaginationVariantProps {}

export const Pagination = (props: PaginationProps) => {
  const [variantProps, numberInputProps] = pagination.splitVariantProps(props)
  const [cssProps, elementProps] = splitCssProps(numberInputProps)
  const [localProps, rootProps] = splitProps(elementProps, ['children', 'class'])
  const styles = pagination(variantProps)

  return (
    <ArkPagination.Root class={cx(styles.root, css(cssProps), localProps.class)} {...rootProps}>
      <ArkPagination.PrevTrigger class={styles.prevTrigger}>
        <IconButton variant="ghost" aria-label="Next Page">
          <ChevronLeftIcon />
        </IconButton>
      </ArkPagination.PrevTrigger>
      <ArkPagination.Context>
        {(pagiation) => (
          <For each={pagiation().pages}>
            {(page, index) =>
              page.type === 'page' ? (
                <ArkPagination.Item
                  {...page}
                  class={styles.item}
                  asChild={(props) => <Button {...props} variant="outline" />}
                >
                  {page.value}
                </ArkPagination.Item>
              ) : (
                <ArkPagination.Ellipsis index={index()} class={styles.ellipsis}>
                  &#8230;
                </ArkPagination.Ellipsis>
              )
            }
          </For>
        )}
      </ArkPagination.Context>
      <ArkPagination.NextTrigger class={styles.nextTrigger}>
        <IconButton variant="ghost" aria-label="Next Page">
          <ChevronRightIcon />
        </IconButton>
      </ArkPagination.NextTrigger>
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
