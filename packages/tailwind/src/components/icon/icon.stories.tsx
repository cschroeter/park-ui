import { DiamondIcon } from 'lucide-react'
import { Icon, type IconProps } from './snippet'

export const Demo = (props: IconProps) => {
  return (
    <Icon {...props}>
      <DiamondIcon />
    </Icon>
  )
}
