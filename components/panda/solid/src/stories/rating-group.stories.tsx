import type { Meta } from 'storybook-solidjs'
import { RatingGroup, type RatingGroupProps } from '~/components/ui/rating-group'

const meta: Meta<RatingGroupProps> = {
  title: 'RatingGroup',
  component: RatingGroup,
}

export default meta

export const Base = () => <RatingGroup>Label</RatingGroup>
export const InitialValue = () => <RatingGroup value={3.5}>Label</RatingGroup>
export const ColorPalette = () => (
  <RatingGroup value={3} colorPalette="red">
    Label
  </RatingGroup>
)
export const MoreCount = () => <RatingGroup count={10}>Label</RatingGroup>
