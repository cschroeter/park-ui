import { Portal } from '@ark-ui/react'
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
import { useThemeGenerator } from '~/lib/use-theme-generator'

export const FontFamilySelect = () => {
  const { currentFontFamily, fontFamilies, updateFontFamily } = useThemeGenerator()

  return (
    <Select
      selectedOption={currentFontFamily}
      onChange={(e: any) => updateFontFamily(e)}
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
            <SelectPositioner zIndex="toast">
              <SelectContent>
                {fontFamilies.map((fontFamily) => (
                  <SelectOption
                    key={fontFamily.value}
                    value={fontFamily.value}
                    label={fontFamily.label}
                  />
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
