import { Index, Show, children } from 'solid-js'
import * as StyledRatingGroup from './styled/rating-group'

export interface RatingGroupProps extends StyledRatingGroup.RootProps {}

export const RatingGroup = (props: RatingGroupProps) => {
  const getChildren = children(() => props.children)

  return (
    <StyledRatingGroup.Root {...props}>
      <Show when={getChildren()}>
        <StyledRatingGroup.Label>{getChildren()}</StyledRatingGroup.Label>
      </Show>
      <StyledRatingGroup.Control>
        <StyledRatingGroup.Context>
          {(context) => (
            <Index each={context().items}>
              {(index) => (
                <StyledRatingGroup.Item index={index()}>
                  <StyledRatingGroup.ItemContext>
                    {(item) => (
                      <Show when={item().highlighted} fallback={<StarIcon />}>
                        <StarIcon half={item().half} />
                      </Show>
                    )}
                  </StyledRatingGroup.ItemContext>
                </StyledRatingGroup.Item>
              )}
            </Index>
          )}
        </StyledRatingGroup.Context>
      </StyledRatingGroup.Control>
      <StyledRatingGroup.HiddenInput />
    </StyledRatingGroup.Root>
  )
}

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
    <title>Star Icon</title>
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
