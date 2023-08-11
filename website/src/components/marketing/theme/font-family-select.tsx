import { Portal } from '@ark-ui/react'
import { useLayoutEffect } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { HStack, Stack } from 'styled-system/jsx'
import { useLocalStorage } from 'usehooks-ts'
import { fonts } from '~/app/fonts'
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
  const [option, setOption] = useLocalStorage('park-ui-font-family', fonts[0])

  const handeChange = (fontFamily: any) => {
    setOption(fontFamily)
  }

  useLayoutEffect(() => {
    const root = document.querySelector<HTMLBodyElement>('body')
    if (root && option) {
      root.style.fontFamily = option.value
    }
  }, [option])

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
                {fonts.map((font) => (
                  <SelectOption key={font.value} value={font.value} label={font.label} />
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
