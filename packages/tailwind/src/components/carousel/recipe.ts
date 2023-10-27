import { tv } from 'tailwind-variants'

export const carouselStyles = tv({
  base: 'carousel',
  defaultVariants: {
    size: 'md',
  },
  slots: {
    root: 'carousel__root',
    viewport: 'carousel__viewport',
    itemGroup: 'carousel__itemGroup',
    item: 'carousel__item',
    nextTrigger: 'carousel__nextTrigger',
    prevTrigger: 'carousel__prevTrigger',
    indicatorGroup: 'carousel__indicatorGroup',
    indicator: 'carousel__indicator',
    control: 'carousel__control',
  },
  variants: {
    size: {
      sm: {
        root: 'carousel__root--size_sm',
        viewport: 'carousel__viewport--size_sm',
        itemGroup: 'carousel__itemGroup--size_sm',
        item: 'carousel__item--size_sm',
        nextTrigger: 'carousel__nextTrigger--size_sm',
        prevTrigger: 'carousel__prevTrigger--size_sm',
        indicatorGroup: 'carousel__indicatorGroup--size_sm',
        indicator: 'carousel__indicator--size_sm',
        control: 'carousel__control--size_sm',
      },
      md: {
        root: 'carousel__root--size_md',
        viewport: 'carousel__viewport--size_md',
        itemGroup: 'carousel__itemGroup--size_md',
        item: 'carousel__item--size_md',
        nextTrigger: 'carousel__nextTrigger--size_md',
        prevTrigger: 'carousel__prevTrigger--size_md',
        indicatorGroup: 'carousel__indicatorGroup--size_md',
        indicator: 'carousel__indicator--size_md',
        control: 'carousel__control--size_md',
      },
    },
  },
})
