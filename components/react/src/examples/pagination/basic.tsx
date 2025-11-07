'use client'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { ButtonGroup, IconButton, Pagination } from '@/components/ui'

export const App = () => {
  return (
    <Pagination.Root count={20} pageSize={2} defaultPage={1}>
      <ButtonGroup variant="outline" size="sm">
        <Pagination.PrevTrigger asChild>
          <IconButton colorPalette="gray">
            <ChevronLeftIcon />
          </IconButton>
        </Pagination.PrevTrigger>
        <Pagination.Items
          render={(page) =>
            page.selected ? (
              <IconButton variant="solid">{page.value}</IconButton>
            ) : (
              <IconButton variant="outline" colorPalette="gray">
                {page.value}
              </IconButton>
            )
          }
        />
        <Pagination.NextTrigger asChild>
          <IconButton colorPalette="gray">
            <ChevronRightIcon />
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
  )
}
