'use client'
import { forwardRef } from 'react'
import { Button } from './button'
import { IconButton } from './icon-button'
import * as StyledPagination from './styled/pagination'

export interface PaginationProps extends StyledPagination.RootProps {}

export const Pagination = forwardRef<HTMLElement, PaginationProps>((props, ref) => {
  return (
    <StyledPagination.Root ref={ref} {...props}>
      <StyledPagination.PrevTrigger asChild>
        <IconButton variant="ghost" aria-label="Next Page">
          <ChevronLeftIcon />
        </IconButton>
      </StyledPagination.PrevTrigger>
      <StyledPagination.Context>
        {(pagination) =>
          pagination.pages.map((page, index) =>
            page.type === 'page' ? (
              <StyledPagination.Item key={index} {...page} asChild>
                <Button variant="outline">{page.value}</Button>
              </StyledPagination.Item>
            ) : (
              <StyledPagination.Ellipsis key={index} index={index}>
                &#8230;
              </StyledPagination.Ellipsis>
            ),
          )
        }
      </StyledPagination.Context>
      <StyledPagination.NextTrigger asChild>
        <IconButton variant="ghost" aria-label="Next Page">
          <ChevronRightIcon />
        </IconButton>
      </StyledPagination.NextTrigger>
    </StyledPagination.Root>
  )
})

Pagination.displayName = 'Pagination'

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>Chevron Left Icon</title>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m9 18l6-6l-6-6"
    />
  </svg>
)
