import { tv } from 'tailwind-variants'

const styles = tv({
  base: 'pagination',
  slots: {
    root: 'pagination__root',
    item: 'pagination__item',
    ellipsis: 'pagination__ellipsis',
    prevTrigger: 'pagination__prevTrigger',
    nextTrigger: 'pagination__nextTrigger',
  },
  variants: {},
})
