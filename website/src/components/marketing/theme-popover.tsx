'use client'
import { ChevronDownIcon } from 'lucide-react'
import { link } from 'styled-system/recipes'
import {
  Popover,
  PopoverContent,
  PopoverPositioner,
  PopoverTrigger,
  type PopoverProps,
} from '~/components/ui/popover'
import { ThemeGenerator } from './theme-generator'

export const ThemePopover = (props: PopoverProps) => {
  return (
    <Popover {...props} positioning={{ offset: { mainAxis: 8 } }}>
      {(api) => (
        <>
          <PopoverTrigger className={link({ variant: 'navbar' })}>
            Theme <PopoverIcon isOpen={api.isOpen} />
          </PopoverTrigger>
          <PopoverPositioner>
            <PopoverContent p="0" borderWidth="0" lazyMount unmountOnExit>
              <ThemeGenerator onCopy={() => api.close()} />
            </PopoverContent>
          </PopoverPositioner>
        </>
      )}
    </Popover>
  )
}

const PopoverIcon = (props: { isOpen: boolean }) => {
  const iconStyles = {
    transform: props.isOpen ? 'rotate(-180deg)' : undefined,
    transition: 'transform 0.2s',
    transformOrigin: 'center',
    width: '18px',
    height: '18px',
  }
  return <ChevronDownIcon style={iconStyles} />
}
