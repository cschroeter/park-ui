'use client'
import { Pagination, usePaginationContext } from '@ark-ui/react/pagination'
import { EllipsisIcon } from 'lucide-react'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { pagination } from 'styled-system/recipes'
import { IconButton } from './icon-button'

const { withProvider, withContext } = createStyleContext(pagination)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(Pagination.Root, 'root')
export const RootProvider = withProvider(Pagination.RootProvider, 'root')
export const Item = withContext(Pagination.Item, 'item')
export const Ellipsis = withContext(Pagination.Ellipsis, 'ellipsis')
export const PrevTrigger = withContext(Pagination.PrevTrigger, 'prevTrigger')
export const NextTrigger = withContext(Pagination.NextTrigger, 'nextTrigger')

export { PaginationContext as Context } from '@ark-ui/react/pagination'

export interface PaginationItemsProps extends React.HTMLAttributes<HTMLElement> {
  render: (page: { type: 'page'; value: number }) => React.ReactNode
  ellipsis?: React.ReactElement | undefined
}

export const Items = (props: PaginationItemsProps) => {
  const { pages } = usePaginationContext()
  const { render, ellipsis, ...rest } = props

  return pages.map((page, index) => {
    if (page.type === 'ellipsis') {
      return (
        <Ellipsis asChild key={index} index={index} {...rest}>
          {ellipsis || (
            <IconButton as="span">
              <EllipsisIcon />
            </IconButton>
          )}
        </Ellipsis>
      )
    }

    return (
      <Item asChild key={index} type="page" value={page.value} {...rest}>
        {render(page)}
      </Item>
    )
  })
}
