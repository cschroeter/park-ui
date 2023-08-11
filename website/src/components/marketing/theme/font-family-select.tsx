import { Portal } from '@ark-ui/react'
import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { HStack, Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import {
  Select,
  SelectContent,
  SelectLabel,
  SelectOption,
  SelectPositioner,
  SelectTrigger,
} from '~/components/ui/select'

export const FontFamilySelect = () => {
  const options = [
    {
      label: 'Jakarta',
      value: '--font-body',
    },
    {
      label: 'Inter',
      value: '--font-inter',
    },
    {
      label: 'Outfit',
      value: '--font-outfit',
    },
    {
      label: 'Work Sans',
      value: '--font-work-sans',
    },
  ]

  const handeChange = (details: any) => {
    setOption(details)
    const root = document.querySelector<HTMLBodyElement>('body')
    if (root) {
      root.style.fontFamily = `var(${details.value})`
    }
  }

  const [option, setOption] = useState(options[0])

  return (
    <Select
      selectedOption={option}
      onChange={handeChange}
      positioning={{ sameWidth: true }}
      size="sm"
    >
      {({ selectedOption, isOpen }) => (
        <Stack gap="1.5">
          <SelectLabel>Font Family</SelectLabel>
          <SelectTrigger asChild>
            <Button variant="secondary" size="sm">
              <HStack justify="space-between" flex="1" fontWeight="medium">
                {selectedOption?.label}
                <SelectIcon isOpen={isOpen} />
              </HStack>
            </Button>
          </SelectTrigger>
          <Portal>
            <SelectPositioner>
              <SelectContent>
                {options.map((option) => (
                  <SelectOption key={option.value} value={option.value} label={option.label} />
                ))}
              </SelectContent>
            </SelectPositioner>
          </Portal>
        </Stack>
      )}
    </Select>
  )
}

const SelectIcon = (props: { isOpen: boolean }) => {
  const iconStyles = {
    transform: props.isOpen ? 'rotate(-180deg)' : undefined,
    transition: 'transform 0.2s',
    transformOrigin: 'center',
    fontSize: '18px',
  }
  return <FiChevronDown style={iconStyles} />
}
