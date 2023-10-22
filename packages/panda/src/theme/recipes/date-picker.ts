import { datePickerAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const datePicker = defineSlotRecipe({
  className: 'datePicker',
  slots: [...datePickerAnatomy.keys()],
  base: {
    //   cellTrigger: {

    //   },
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
      p: '4',
      width: 'fit-content',
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
    trigger: {},
    viewControl: {
      display: 'flex',
      gap: '2',
      justifyContent: 'space-between',
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
    //     alignItems: 'center',
    //     color: 'fg.subtle',
    //     display: 'inline-flex',
    //     fontWeight: 'semibold',
    //     height: '10',
    //     justifyContent: 'center',
    //     textStyle: 'sm',
    //     width: '10',
    //   },
  },
})
