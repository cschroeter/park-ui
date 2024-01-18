import type { Meta } from '@storybook/react'
import { RatingGroup } from '~/components/ui/rating-group'

const meta: Meta = {
  title: 'Components/Rating Group',
}

export default meta

export const Base = () => <RatingGroup>Label</RatingGroup>
export const InitialValue = () => <RatingGroup defaultValue={3.5}>Label</RatingGroup>
export const ColorPalette = () => (
  <RatingGroup defaultValue={3} colorPalette="red">
    Label
  </RatingGroup>
)
export const MoreCount = () => <RatingGroup count={10}>Label</RatingGroup>
