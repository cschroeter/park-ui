import { Portal } from '@ark-ui/react'
import { BiExpandVertical } from 'react-icons/bi'
import { Stack } from 'styled-system/jsx'
import {
  Select,
  SelectContent,
  SelectLabel,
  SelectOption,
  SelectPositioner,
  SelectTrigger,
  type SelectProps,
} from '~/components/ui/select'

export const SelectDemo = (props: SelectProps) => {
  return (
    <Select positioning={{ sameWidth: true }} {...props}>
      {({ selectedOption }) => (
        <Stack gap="1.5" width="2xs">
          <SelectLabel>Framework</SelectLabel>
          <SelectTrigger>
            {selectedOption?.label ?? 'Select Framework'}
            <BiExpandVertical />
          </SelectTrigger>
          <Portal>
            <SelectPositioner>
              <SelectContent>
                <SelectOption value="react" label="React" />
                <SelectOption value="solid" label="Solid">
                  Solid
                </SelectOption>
                <SelectOption value="vue" label="Vue">
                  Vue
                </SelectOption>
              </SelectContent>
            </SelectPositioner>
          </Portal>
        </Stack>
      )}
    </Select>
  )
}
