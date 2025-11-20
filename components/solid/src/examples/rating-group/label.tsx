import { RatingGroup } from '@/components/ui'

export const App = () => {
  return (
    <RatingGroup.Root count={5} defaultValue={3}>
      <RatingGroup.HiddenInput />
      <RatingGroup.Label>Rating</RatingGroup.Label>
      <RatingGroup.Control />
    </RatingGroup.Root>
  )
}
