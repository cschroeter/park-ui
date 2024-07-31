import { For } from 'solid-js'
import { Button } from './button'
import { IconButton } from './icon-button'
import * as StyledPagination from './styled/pagination'

export interface PaginationProps extends StyledPagination.RootProps {}

export const Pagination = (props: PaginationProps) => {
  return (
    <StyledPagination.Root {...props}>
      <StyledPagination.PrevTrigger
        asChild={(props) => (
          <IconButton {...props} variant="ghost" aria-label="Next Page">
            <ChevronLeftIcon />
          </IconButton>
        )}
      />
      <StyledPagination.Context>
        {(pagiation) => (
          <For each={pagiation().pages}>
            {(page, index) =>
              page.type === 'page' ? (
                <StyledPagination.Item
                  {...page}
                  asChild={(props) => <Button {...props} variant="outline" />}
                >
                  {page.value}
                </StyledPagination.Item>
              ) : (
                <StyledPagination.Ellipsis index={index()}>&#8230;</StyledPagination.Ellipsis>
              )
            }
          </For>
        )}
      </StyledPagination.Context>
      <StyledPagination.NextTrigger
        asChild={(props) => (
          <IconButton {...props} variant="ghost" aria-label="Next Page">
            <ChevronRightIcon />
          </IconButton>
        )}
      />
    </StyledPagination.Root>
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
