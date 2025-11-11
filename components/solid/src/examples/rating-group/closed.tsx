import { type JSX, Show, splitProps } from 'solid-js'
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
      <Show when={local.label}>
        <StyledRatingGroup.Label>{local.label}</StyledRatingGroup.Label>
      </Show>
      <StyledRatingGroup.HiddenInput />
      <StyledRatingGroup.Control>
        <StyledRatingGroup.Items icon={local.icon} />
      </StyledRatingGroup.Control>
    </StyledRatingGroup.Root>
  )
}
