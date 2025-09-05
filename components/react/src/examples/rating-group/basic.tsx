import { StarIcon } from 'lucide-react'
import { RatingGroup } from '@/components/ui'

export const Demo = () => {
  return (
    <RatingGroup.Root count={5} defaultValue={3}>
      <RatingGroup.Label>Label</RatingGroup.Label>
      <RatingGroup.Control>
        <RatingGroup.Context>
          {({ items }) =>
            items.map((item) => (
              <RatingGroup.Item key={item} index={item}>
                <RatingGroup.ItemContext>
                  {({ highlighted }) => (highlighted ? <StarIcon fill="current" /> : <StarIcon />)}
                </RatingGroup.ItemContext>
              </RatingGroup.Item>
            ))
          }
        </RatingGroup.Context>
      </RatingGroup.Control>
      <RatingGroup.HiddenInput />
    </RatingGroup.Root>
  )
}
