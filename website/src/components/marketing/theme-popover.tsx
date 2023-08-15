'use client'
import { Portal } from '@ark-ui/react'
import { FiChevronDown } from 'react-icons/fi'
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
    <Popover portalled {...props} positioning={{ offset: { mainAxis: 8 } }}>
      {(api) => (
        <>
          <PopoverTrigger className={link({ variant: 'navbar' })}>
            Theme <PopoverIcon isOpen={api.isOpen} />
          </PopoverTrigger>
          <Portal>
            <PopoverPositioner>
              <PopoverContent p="0" borderWidth="0" boxShadow="none">
                <ThemeGenerator />
              </PopoverContent>
            </PopoverPositioner>
          </Portal>
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
    fontSize: '18px',
  }
  return <FiChevronDown style={iconStyles} />
}
