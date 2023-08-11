'use client'
import { Portal } from '@ark-ui/react'
import { FiChevronDown } from 'react-icons/fi'
import { Stack } from 'styled-system/jsx'
import {
  Popover,
  PopoverContent,
  PopoverPositioner,
  PopoverTrigger,
  type PopoverProps,
} from '~/components/ui/popover'
import { Button } from '../ui/button'
import { Typography } from '../ui/typography'

export const ThemePopover = (props: PopoverProps) => {
  return (
    <Popover portalled {...props} positioning={{ offset: { mainAxis: 12 } }}>
      <PopoverTrigger asChild>
        <Button variant="link">
          Theme <FiChevronDown />
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverPositioner>
          <PopoverContent>
            <Stack>
              <Typography minW="sm">Change Theme</Typography>
            </Stack>
          </PopoverContent>
        </PopoverPositioner>
      </Portal>
    </Popover>
  )
}
