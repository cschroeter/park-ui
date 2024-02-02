import {
  RatingGroup as ArkRatingGroup,
  type RatingGroupRootProps,
} from '@ark-ui/react/rating-group'
import { forwardRef, type ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export interface RatingGroupProps extends RatingGroupRootProps, RatingGroupVariantProps {
  children?: ReactNode
}

export const RatingGroup = forwardRef<HTMLDivElement, RatingGroupProps>((props, ref) => {
  const { children, className, size, ...rootProps } = props
  const { root, label, control, item } = styles({ size })

  return (
    <ArkRatingGroup.Root ref={ref} className={root({ className })} {...rootProps}>
      {children && <ArkRatingGroup.Label className={label()}>{children}</ArkRatingGroup.Label>}
      <ArkRatingGroup.Control className={control()}>
        {({ items }) =>
          items.map((index) => (
            <ArkRatingGroup.Item className={item()} key={index} index={index}>
              {({ isHalf }) => <Icon isHalf={isHalf} />}
            </ArkRatingGroup.Item>
          ))
        }
      </ArkRatingGroup.Control>
    </ArkRatingGroup.Root>
  )
})

RatingGroup.displayName = 'RatingGroup'

type RatingGroupVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    base: 'ratingGroup',
    defaultVariants: { size: 'md' },
    slots: {
      root: 'ratingGroup__root',
      label: 'ratingGroup__label',
      item: 'ratingGroup__item',
      control: 'ratingGroup__control',
    },
    variants: {
      size: {
        sm: {
          root: 'ratingGroup__root--size_sm',
          label: 'ratingGroup__label--size_sm',
          item: 'ratingGroup__item--size_sm',
          control: 'ratingGroup__control--size_sm',
        },
        md: {
          root: 'ratingGroup__root--size_md',
          label: 'ratingGroup__label--size_md',
          item: 'ratingGroup__item--size_md',
          control: 'ratingGroup__control--size_md',
        },
        lg: {
          root: 'ratingGroup__root--size_lg',
          label: 'ratingGroup__label--size_lg',
          item: 'ratingGroup__item--size_lg',
          control: 'ratingGroup__control--size_lg',
        },
      },
    },
  },
  { twMerge: false },
)

type IconProps = {
  isHalf: boolean
}

const Icon = (props: IconProps) => (
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
    <title>Star</title>
    <defs>
      <linearGradient id="half">
        <stop offset="50%" stop-color="var(--colors-color-palette-default)" />
        <stop offset="50%" stop-color="var(--colors-bg-emphasized)" />
      </linearGradient>
    </defs>
    <polygon
      fill={props.isHalf ? 'url(#half)' : 'inherit'}
      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
    />
  </svg>
)
