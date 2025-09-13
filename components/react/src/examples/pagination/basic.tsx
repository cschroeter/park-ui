import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { IconButton, Pagination } from '@/components/ui'

export const App = () => {
  return (
    <Pagination.Root count={20} pageSize={2} defaultPage={1}>
      <Pagination.PrevTrigger asChild>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </Pagination.PrevTrigger>

      {/* <Pagination.Items
        render={(page) => (
          <IconButton variant={{ base: 'ghost', _selected: 'outline' }}>{page.value}</IconButton>
        )}
      /> */}

      <Pagination.NextTrigger asChild>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </Pagination.NextTrigger>
    </Pagination.Root>
  )
}
