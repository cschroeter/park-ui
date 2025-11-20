import { forwardRef, type ReactElement, type ReactNode } from 'react'
import { RatingGroup as StyledRatingGroup } from '@/components/ui'

export interface RatingProps extends StyledRatingGroup.RootProps {
  icon?: ReactElement
  count?: number
  label?: ReactNode
}

export const RatingGroup = forwardRef<HTMLDivElement, RatingProps>(function Rating(props, ref) {
  const { icon, count = 5, label, ...rest } = props
  return (
    <StyledRatingGroup.Root ref={ref} count={count} {...rest}>
      {label && <StyledRatingGroup.Label>{label}</StyledRatingGroup.Label>}
      <StyledRatingGroup.HiddenInput />
      <StyledRatingGroup.Control>
        <StyledRatingGroup.Items icon={icon} />
      </StyledRatingGroup.Control>
    </StyledRatingGroup.Root>
  )
})
