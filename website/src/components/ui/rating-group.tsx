'use client'
import { forwardRef } from 'react'
import * as StyledRatingGroup from './styled/rating-group'

export interface RatingGroupProps extends StyledRatingGroup.RootProps {}

export const RatingGroup = forwardRef<HTMLDivElement, RatingGroupProps>((props, ref) => {
  const { children, ...rootProps } = props
  return (
    <StyledRatingGroup.Root ref={ref} {...rootProps}>
      {children && <StyledRatingGroup.Label>{children}</StyledRatingGroup.Label>}
      <StyledRatingGroup.Control>
        <StyledRatingGroup.Context>
          {({ items }) =>
            items.map((index) => (
              <StyledRatingGroup.Item key={index} index={index}>
                <StyledRatingGroup.ItemContext>
                  {(item) => <StarIcon isHalf={item.half} />}
                </StyledRatingGroup.ItemContext>
              </StyledRatingGroup.Item>
            ))
          }
        </StyledRatingGroup.Context>
      </StyledRatingGroup.Control>
      <StyledRatingGroup.HiddenInput />
    </StyledRatingGroup.Root>
  )
})

RatingGroup.displayName = 'RatingGroup'

type IconProps = {
  isHalf: boolean
}

const StarIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="inherit"
    stroke="inherit"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Star Icon</title>
    <defs>
      <linearGradient id="half">
        <stop offset="50%" stopColor="var(--colors-color-palette-default)" />
        <stop offset="50%" stopColor="var(--colors-bg-emphasized)" />
      </linearGradient>
    </defs>
    <polygon
      fill={props.isHalf ? 'url(#half)' : 'inherit'}
      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
    />
  </svg>
)
