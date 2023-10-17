import { tv } from 'tailwind-variants'

export const paginationStyles = tv({
  base: 'pagination',
  slots: {
    root: 'pagination__root',
    pageTrigger: 'pagination__pageTrigger',
    ellipsis: 'pagination__ellipsis',
    prevPageTrigger: 'pagination__prevPageTrigger',
    nextPageTrigger: 'pagination__nextPageTrigger',
    list: 'pagination__list',
    listItem: 'pagination__listItem',
  },
  variants: {},
})
