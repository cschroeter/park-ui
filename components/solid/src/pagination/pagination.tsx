import {
  Pagination as ArkPagination,
  ark,
  type PaginationProps as ArkPaginationProps,
} from '@ark-ui/solid'
import { For } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { button, iconButton, pagination, type PaginationVariantProps } from 'styled-system/recipes'

const IconButton = styled(ark.button, iconButton)
const Button = styled(ark.button, button)

export interface PaginationProps extends ArkPaginationProps, PaginationVariantProps {}

export const Pagination = (props: PaginationProps) => {
  const [variantProps, localProps] = pagination.splitVariantProps(props)
  const styles = pagination(variantProps)

  return (
    <ArkPagination.Root class={styles.root} {...localProps}>
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
                <ArkPagination.Item class={styles.item} {...page}>
                  <Button variant="outline">{page.value}</Button>
                </ArkPagination.Item>
              ) : (
                <ArkPagination.Ellipsis class={styles.ellipsis} index={index()}>
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

Pagination.displayName = 'Pagination'

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
