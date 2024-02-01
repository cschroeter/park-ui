import { treeViewAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const treeView = defineSlotRecipe({
  className: 'treeView',
  slots: treeViewAnatomy.keys(),
  base: {
    label: {
      color: 'fg.default',
      fontWeight: 'medium',
      paddingLeft: '4px',
    },
    item: {
      paddingX: '4px',
      borderRadius: 'l2',
      cursor: 'pointer',
      _hover: {
        background: 'colorPalette.a4',
        color: 'colorPalette.fg',
        colorPalette: 'accent',
      },
      _selected: {
        background: 'colorPalette.emphasized',
        color: 'colorPalette.fg',
        colorPalette: 'accent',
      },
    },
    branchControl: {
      cursor: 'pointer',
    },
    branchContent: {
      paddingLeft: '4',
      _open: {
        animation: 'fadeIn 0.25s ease-in-out',
      },
      _closed: {
        animation: 'fadeOut 0.2s ease-in-out',
      },
    },
    branchText: {
      paddingLeft: '4px',
    },
  },
})
