import { type JSX, splitProps } from 'solid-js'
import * as StyledRatingGroup from '@/components/ui/rating-group'

export interface RatingProps extends StyledRatingGroup.RootProps {
  icon?: JSX.Element
  label?: JSX.Element
}

export const RatingGroup = (props: RatingProps) => {
  const [local, rest] = splitProps(props, ['icon', 'label'])
  const count = () => (props.count as number | undefined) ?? 5

  return (
    <StyledRatingGroup.Root count={count()} {...rest}>
      {local.label && <StyledRatingGroup.Label>{local.label}</StyledRatingGroup.Label>}
      <StyledRatingGroup.HiddenInput />
      <StyledRatingGroup.Control>
        <StyledRatingGroup.Items icon={local.icon} />
      </StyledRatingGroup.Control>
    </StyledRatingGroup.Root>
  )
}
