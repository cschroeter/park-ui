import { defineRecipe } from '@pandacss/dev'

export const link = defineRecipe({
  className: 'link',
  base: {
    alignItems: 'center',
    color: 'accent.a11',
    cursor: 'pointer',
    display: 'inline-flex',
    position: 'relative',
    width: 'fit-content',
    gap: '2',
    _before: {
      content: '""',
      position: 'absolute',
      width: 'full',
      height: '0.1em',
      backgroundColor: 'accent.a11',
      bottom: '0',
      left: '0',
      transformOrigin: 'right',
      transform: 'scaleX(0)',
      transitionDuration: 'normal',
      transitionProperty: 'transform',
      transitionTimingFunction: 'default',
    },
    _hover: {
      _before: {
        transformOrigin: 'left',
        transform: 'scaleX(1)',
      },
    },
    '& svg': {
      width: '1em',
      height: '1em',
    },
  },
})
