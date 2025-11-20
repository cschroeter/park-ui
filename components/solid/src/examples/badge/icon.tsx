import { StarIcon } from 'lucide-solid'
import { Wrap } from 'styled-system/jsx'
import { Badge } from '@/components/ui'

export const App = () => {
  return (
    <Wrap gap="4">
      <Badge variant="solid" colorPalette="blue">
        <StarIcon /> New
      </Badge>
      <Badge variant="solid" colorPalette="green">
        New <StarIcon />
      </Badge>
    </Wrap>
  )
}
