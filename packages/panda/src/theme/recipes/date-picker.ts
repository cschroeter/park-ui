import { datePickerAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const datePicker = defineSlotRecipe({
  className: 'datePicker',
  slots: [...datePickerAnatomy.keys()],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
    },
    content: {
      background: 'bg.default',
      borderRadius: 'l3',
      boxShadow: 'md',
      display: 'flex',
      flexDirection: 'column',
      gap: '3',
      p: '4',
      width: '312px',
      _hidden: {
        display: 'none',
      },
    },
    control: {
      display: 'flex',
      flexDirection: 'row',
      gap: '2',
    },
    label: {
      color: 'fg.default',
      fontWeight: 'medium',
      textStyle: 'sm',
    },
    tableHeader: {
      color: 'fg.muted',
      fontWeight: 'semibold',
      height: '10',
      textStyle: 'sm',
    },
    viewControl: {
      display: 'flex',
      gap: '2',
      justifyContent: 'space-between',
    },
    table: {
      width: 'full',
    },
    tableCell: {
      textAlign: 'center',
    },
    tableCellTrigger: {
      width: '100%',
    },
    //   grid: {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     gap: '1',
    //     '&[data-type="day"] [data-part="row"]': {
    //       gridTemplateColumns: 'repeat(7, 1fr)',
    //     },
    //     '&[data-type="month"] [data-part="row"]': {
    //       gridTemplateColumns: 'repeat(4, 1fr)',
    //     },
    //     '&[data-type="year"] [data-part="row"]': {
    //       gridTemplateColumns: 'repeat(4, 1fr)',
    //     },
    //   },
    //   rowGroup: {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     gap: '1',
    //   },
    //   row: {
    //     display: 'grid',
    //   },
    //   rowHeader: {
    //     display: 'grid',
    //     gridTemplateColumns: 'repeat(7, 1fr)',
    //   },
    //   columnHeader: {

    //   },
  },
})
