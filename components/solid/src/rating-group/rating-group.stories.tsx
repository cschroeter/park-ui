import type { Meta } from 'storybook-solidjs'
import { RatingGroup, type RatingGroupProps } from './rating-group'

const meta: Meta<RatingGroupProps> = {
  title: 'RatingGroup',
  component: RatingGroup,
}

export default meta

export const Base = () => <RatingGroup>Label</RatingGroup>
export const ColorPalette = () => <RatingGroup colorPalette="red">Label</RatingGroup>
export const InitialValue = () => <RatingGroup value={3}>Label</RatingGroup>
export const MoreCount = () => <RatingGroup count={10}>Label</RatingGroup>
