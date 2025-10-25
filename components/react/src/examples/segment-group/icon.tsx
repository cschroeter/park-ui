import { Grid2X2Icon, ListIcon, TableIcon } from 'lucide-react'
import { HStack } from 'styled-system/jsx'
import { SegmentGroup } from '@/components/ui'

export const App = () => {
  return (
    <SegmentGroup.Root defaultValue="table">
      <SegmentGroup.Indicator />
      <SegmentGroup.Items
        items={[
          {
            value: 'table',
            label: (
              <HStack>
                <TableIcon />
                Table
              </HStack>
            ),
          },
          {
            value: 'board',
            label: (
              <HStack>
                <Grid2X2Icon />
                Board
              </HStack>
            ),
          },
          {
            value: 'list',
            label: (
              <HStack>
                <ListIcon />
                List
              </HStack>
            ),
          },
        ]}
      />
    </SegmentGroup.Root>
  )
}
