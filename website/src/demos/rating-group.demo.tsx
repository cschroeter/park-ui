import { RatingGroup, type RatingGroupProps } from '~/components/ui'

export const Demo = (props: RatingGroupProps) => {
  return (
    <RatingGroup defaultValue={3} {...props}>
      Label
    </RatingGroup>
  )
}
