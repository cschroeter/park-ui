import { For } from 'solid-js'
import { Pagination as ArkPagination, Button, IconButton } from '~/components/ui/primitives'

export interface PaginationProps extends ArkPagination.RootProps {}

export const Pagination = (props: PaginationProps) => {
  return (
    <ArkPagination.Root {...props}>
      <ArkPagination.PrevTrigger
        asChild={(props) => (
          <IconButton {...props} variant="ghost" aria-label="Next Page">
            <ChevronLeftIcon />
          </IconButton>
        )}
      />
      <ArkPagination.Context>
        {(pagiation) => (
          <For each={pagiation().pages}>
            {(page, index) =>
              page.type === 'page' ? (
                <ArkPagination.Item
                  {...page}
                  asChild={(props) => <Button {...props} variant="outline" />}
                >
                  {page.value}
                </ArkPagination.Item>
              ) : (
                <ArkPagination.Ellipsis index={index()}>&#8230;</ArkPagination.Ellipsis>
              )
            }
          </For>
        )}
      </ArkPagination.Context>
      <ArkPagination.NextTrigger
        asChild={(props) => (
          <IconButton {...props} variant="ghost" aria-label="Next Page">
            <ChevronRightIcon />
          </IconButton>
        )}
      />
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
