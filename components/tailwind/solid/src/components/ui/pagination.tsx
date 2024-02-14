import { Pagination as ArkPagination, type PaginationRootProps } from '@ark-ui/solid'
import { For, splitProps } from 'solid-js'
import { type VariantProps, tv } from 'tailwind-variants'
import { Button } from '~/components/ui/button'
import { IconButton } from '~/components/ui/icon-button'

export interface PaginationProps extends PaginationRootProps, PaginationVariantProps {}

export const Pagination = (props: PaginationProps) => {
  const [variantProps, rootProps] = splitProps(props, ['class'])
  const { root, ellipsis, item, prevTrigger, nextTrigger } = styles(variantProps)

  return (
    <ArkPagination.Root class={root()} {...rootProps}>
      {(api) => (
        <>
          <ArkPagination.PrevTrigger class={prevTrigger()}>
            <IconButton variant="ghost" aria-label="Next Page">
              <ChevronLeftIcon />
            </IconButton>
          </ArkPagination.PrevTrigger>
          <For each={api().pages}>
            {(page, index) =>
              page.type === 'page' ? (
                <ArkPagination.Item {...page} as={Button} variant="outline" class={item()}>
                  {page.value}
                </ArkPagination.Item>
              ) : (
                <ArkPagination.Ellipsis index={index()} class={ellipsis()}>
                  &#8230;
                </ArkPagination.Ellipsis>
              )
            }
          </For>
          <ArkPagination.NextTrigger class={nextTrigger()}>
            <IconButton variant="ghost" aria-label="Next Page">
              <ChevronRightIcon />
            </IconButton>
          </ArkPagination.NextTrigger>
        </>
      )}
    </ArkPagination.Root>
  )
}

type PaginationVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    base: 'pagination',
    slots: {
      root: 'pagination__root',
      item: 'pagination__item',
      ellipsis: 'pagination__ellipsis',
      prevTrigger: 'pagination__prevTrigger',
      nextTrigger: 'pagination__nextTrigger',
    },
    variants: {},
  },
  { twMerge: false },
)

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>Chevron Left</title>
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
    <title>Chevron Right</title>
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
