import { RatingGroup as ArkRatingGroup, type RatingGroupRootProps } from '@ark-ui/solid'
import { Index, Show, children, splitProps } from 'solid-js'
import { type VariantProps, tv } from 'tailwind-variants'

export interface RatingGroupProps extends RatingGroupRootProps, RatingGroupVariantProps {}

export const RatingGroup = (props: RatingGroupProps) => {
  const [variantProps, ratingGroupProps] = splitProps(props, ['size', 'class'])
  const [localProps, rootProps] = splitProps(ratingGroupProps, ['children'])
  const getChildren = children(() => localProps.children)
  const { root, control, label, item } = ratingGroup(variantProps)

  return (
    <ArkRatingGroup.Root class={root()} {...rootProps}>
      <Show when={getChildren()}>
        <ArkRatingGroup.Label class={label()}>{getChildren()}</ArkRatingGroup.Label>
      </Show>
      <ArkRatingGroup.Control class={control()}>
        <ArkRatingGroup.Context>
          {(context) => (
            <Index each={context().items}>
              {(index) => (
                <ArkRatingGroup.Item class={item()} index={index()}>
                  <ArkRatingGroup.ItemContext>
                    {(item) => (
                      <Show when={item().highlighted} fallback={<StarIcon />}>
                        <StarIcon half={item().half} />
                      </Show>
                    )}
                  </ArkRatingGroup.ItemContext>
                </ArkRatingGroup.Item>
              )}
            </Index>
          )}
        </ArkRatingGroup.Context>
      </ArkRatingGroup.Control>
    </ArkRatingGroup.Root>
  )
}

type RatingGroupVariantProps = VariantProps<typeof ratingGroup>

const ratingGroup = tv(
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

interface Props {
  half?: boolean
}

const StarIcon = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="inherit"
    stroke="inherit"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <title>Star</title>
    <defs>
      <linearGradient id="half">
        <stop offset="50%" stop-color="var(--colors-color-palette-default)" />
        <stop offset="50%" stop-color="var(--colors-bg-emphasized)" />
      </linearGradient>
    </defs>
    <polygon
      fill={props.half ? 'url(#half)' : 'inherit'}
      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
    />
  </svg>
)
