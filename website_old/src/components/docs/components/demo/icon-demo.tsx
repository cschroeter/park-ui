import { DiamondIcon } from 'lucide-react'
import { Icon, type IconProps } from '~/components/ui/icon'

export const IconDemo = (props: IconProps) => {
  return (
    <Icon {...props}>
      <DiamondIcon />
    </Icon>
  )
}
