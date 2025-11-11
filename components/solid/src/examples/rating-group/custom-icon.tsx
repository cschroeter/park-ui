import { HeartIcon } from 'lucide-solid'
import { RatingGroup } from '@/components/ui'

export const App = () => {
  return (
    <RatingGroup.Root count={5} defaultValue={3}>
      <RatingGroup.HiddenInput />
      <RatingGroup.Control>
        <RatingGroup.Items icon={<HeartIcon />} />
      </RatingGroup.Control>
    </RatingGroup.Root>
  )
}
