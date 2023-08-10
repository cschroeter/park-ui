import { datePickerAnatomy } from '@ark-ui/react'
import { defineSlotRecipe } from '@pandacss/dev'

export const datePicker = defineSlotRecipe({
  className: 'datePicker',
  description: 'A date picker style',
  slots: [...datePickerAnatomy.keys()],
  base: {
    cellTrigger: {
      _today: {
        _before: {
          content: "'−'",
          color: 'accent.default',
          position: 'absolute',
          marginTop: '6',
        },
      },
      '&[data-in-range]': {
        background: 'bg.subtle',
      },
      _selected: {
        _before: {
          color: 'accent.fg',
        },
      },
    },
    content: {
      background: 'bg.default',
      borderRadius: 'lg',
      borderWidth: '1px',
      p: '4',
    },
    grid: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1',
      '&[data-type="day"] [data-part="row"]': {
        gridTemplateColumns: 'repeat(7, 1fr)',
      },
      '&[data-type="month"] [data-part="row"]': {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
      '&[data-type="year"] [data-part="row"]': {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
    },
    rowGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1',
    },
    row: {
      display: 'grid',
    },
    rowHeader: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
    },
    columnHeader: {
      alignItems: 'center',
      display: 'inline-flex',
      fontWeight: 'bold',
      height: '10',
      justifyContent: 'center',
      textStyle: 'sm',
      width: '10',
    },
  },
})
