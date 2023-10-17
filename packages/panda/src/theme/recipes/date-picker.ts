import { datePickerAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const datePicker = defineSlotRecipe({
  className: 'datePicker',
  slots: [...datePickerAnatomy.keys()],
  jsx: ['DatePicker', /DatePicker\.+/],
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
      borderRadius: 'l3',
      borderWidth: '1px',
      p: '4',
      width: 'fit-content',
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
      color: 'fg.subtle',
      display: 'inline-flex',
      fontWeight: 'semibold',
      height: '10',
      justifyContent: 'center',
      textStyle: 'sm',
      width: '10',
    },
  },
})
