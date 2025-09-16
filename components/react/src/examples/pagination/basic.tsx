'use client'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { ButtonGroup, IconButton, Pagination } from '@/components/ui'

export const App = () => {
  return (
    <Pagination.Root count={20} pageSize={2} defaultPage={1}>
      <ButtonGroup variant="outline" size="sm">
        <Pagination.PrevTrigger asChild>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
        </Pagination.PrevTrigger>
        <Pagination.Items
          render={(page) => (
            <IconButton variant={{ base: 'outline', _selected: 'solid' }}>{page.value}</IconButton>
          )}
        />
        <Pagination.NextTrigger asChild>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
  )
}
