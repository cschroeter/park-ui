import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-solid'
import { ButtonGroup, IconButton, Pagination } from '@/components/ui'

export const App = () => {
  return (
    <Pagination.Root count={20} pageSize={2} defaultPage={1}>
      <ButtonGroup variant="outline" size="sm">
        <Pagination.PrevTrigger
          asChild={(triggerProps) => (
            <IconButton colorPalette="gray" {...triggerProps()}>
              <ChevronLeftIcon />
            </IconButton>
          )}
        />
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
        <Pagination.NextTrigger
          asChild={(triggerProps) => (
            <IconButton colorPalette="gray" {...triggerProps()}>
              <ChevronRightIcon />
            </IconButton>
          )}
        />
      </ButtonGroup>
    </Pagination.Root>
  )
}
