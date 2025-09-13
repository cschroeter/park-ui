import { RatingGroup } from '@/components/ui'

export const Demo = () => {
  return (
    <RatingGroup.Root count={5} defaultValue={3} size="sm">
      <RatingGroup.HiddenInput />
      <RatingGroup.Control />
    </RatingGroup.Root>
  )
}
