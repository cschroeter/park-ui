import { treeViewAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const treeView = defineSlotRecipe({
  className: 'treeView',
  slots: treeViewAnatomy.keys(),
  base: {
    root: {
      width: 'full',
    },
    branch: {
      "&[data-depth='1'] > [data-part='branch-content']": {
        _before: {
          bg: 'border.default',
          content: '""',
          height: 'full',
          left: '3',
          position: 'absolute',
          width: '1px',
          zIndex: '1',
        },
      },
    },
    branchContent: {
      position: 'relative',
    },
    branchControl: {
      alignItems: 'center',
      borderRadius: 'l2',
      color: 'fg.muted',
      display: 'flex',
      fontWeight: 'medium',
      gap: '1.5',
      ps: 'calc((var(--depth) - 1) * 22px)',
      py: '1.5',
      textStyle: 'sm',
      transitionDuration: 'normal',
      transitionProperty: 'background, color',
      transitionTimingFunction: 'default',
      "&[data-depth='1']": {
        ps: '1',
      },
      "&[data-depth='1'] > [data-part='branch-text'] ": {
        fontWeight: 'semibold',
        color: 'fg.default',
      },
      _hover: {
        background: 'gray.a2',
        color: 'fg.default',
      },
    },
    branchIndicator: {
      color: 'accent.default',
      transformOrigin: 'center',
      transitionDuration: 'normal',
      transitionProperty: 'transform',
      transitionTimingFunction: 'default',
      '& svg': {
        fontSize: 'md',
        width: '4',
        height: '4',
      },
      _open: {
        transform: 'rotate(90deg)',
      },
    },
    item: {
      borderRadius: 'l2',
      color: 'fg.muted',
      cursor: 'pointer',
      fontWeight: 'medium',
      position: 'relative',
      ps: 'calc(((var(--depth) - 1) * 22px) + 22px)',
      py: '1.5',
      textStyle: 'sm',
      transitionDuration: 'normal',
      transitionProperty: 'background, color',
      transitionTimingFunction: 'default',
      "&[data-depth='1']": {
        ps: '6',
        fontWeight: 'semibold',
        color: 'fg.default',
        _selected: {
          _before: {
            bg: 'transparent',
          },
        },
      },
      _hover: {
        background: 'gray.a2',
        color: 'fg.default',
      },
      _selected: {
        background: 'accent.a2',
        color: 'accent.text',
        _hover: {
          background: 'accent.a2',
          color: 'accent.text',
        },
        _before: {
          content: '""',
          position: 'absolute',
          left: '3',
          top: '0',
          width: '2px',
          height: 'full',
          bg: 'accent.default',
          zIndex: '1',
        },
      },
    },
    tree: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3',
    },
  },
})
