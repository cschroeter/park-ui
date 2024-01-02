import type { CheckboxProps } from '@ark-ui/react'
import { Checkbox } from '~/components/ui/checkbox'

export const Demo = (props: CheckboxProps) => (
  <Checkbox defaultChecked {...props}>
    Label
  </Checkbox>
)
