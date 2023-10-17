import { tv } from 'tailwind-variants'

export const carouselStyles = tv({
  base: 'carousel',
  defaultVariants: {
    size: 'md',
  },
  slots: {
    root: 'carousel__root',
    viewport: 'carousel__viewport',
    slideGroup: 'carousel__slideGroup',
    slide: 'carousel__slide',
    nextSlideTrigger: 'carousel__nextSlideTrigger',
    prevSlideTrigger: 'carousel__prevSlideTrigger',
    indicatorGroup: 'carousel__indicatorGroup',
    indicator: 'carousel__indicator',
    control: 'carousel__control',
  },
  variants: {
    size: {
      sm: {
        root: 'carousel__root--size_sm',
        viewport: 'carousel__viewport--size_sm',
        slideGroup: 'carousel__slideGroup--size_sm',
        slide: 'carousel__slide--size_sm',
        nextSlideTrigger: 'carousel__nextSlideTrigger--size_sm',
        prevSlideTrigger: 'carousel__prevSlideTrigger--size_sm',
        indicatorGroup: 'carousel__indicatorGroup--size_sm',
        indicator: 'carousel__indicator--size_sm',
        control: 'carousel__control--size_sm',
      },
      md: {
        root: 'carousel__root--size_md',
        viewport: 'carousel__viewport--size_md',
        slideGroup: 'carousel__slideGroup--size_md',
        slide: 'carousel__slide--size_md',
        nextSlideTrigger: 'carousel__nextSlideTrigger--size_md',
        prevSlideTrigger: 'carousel__prevSlideTrigger--size_md',
        indicatorGroup: 'carousel__indicatorGroup--size_md',
        indicator: 'carousel__indicator--size_md',
        control: 'carousel__control--size_md',
      },
    },
  },
})
