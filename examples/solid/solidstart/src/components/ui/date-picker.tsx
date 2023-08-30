import * as Ark from '@ark-ui/solid/date-picker'
import { styled } from 'styled-system/jsx'
import { datePicker, type DatePickerVariantProps } from 'styled-system/recipes'

import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(datePicker)

export * from '@ark-ui/solid/date-picker'
export type DatePickerProps = Ark.DatePickerProps & DatePickerVariantProps

const DatePickerRoot = withProvider(styled(Ark.DatePicker), 'root')
export const DatePickerClearTrigger = withContext(
  styled(Ark.DatePickerClearTrigger),
  'clearTrigger',
)
export const DatePickerColumnHeader = withContext(
  styled(Ark.DatePickerColumnHeader),
  'columnHeader',
)
export const DatePickerContent = withContext(styled(Ark.DatePickerContent), 'content')
export const DatePickerControl = withContext(styled(Ark.DatePickerControl), 'control')
export const DatePickerDayCell = withContext(styled(Ark.DatePickerDayCell), 'dayCell')
export const DatePickerDayCellTrigger = withContext(
  styled(Ark.DatePickerDayCellTrigger),
  'dayCellTrigger',
)
export const DatePickerGrid = withContext(styled(Ark.DatePickerGrid), 'grid')
export const DatePickerInput = withContext(styled(Ark.DatePickerInput), 'input')
export const DatePickerMonthCell = withContext(styled(Ark.DatePickerMonthCell), 'monthCell')
export const DatePickerMonthCellTrigger = withContext(
  styled(Ark.DatePickerMonthCellTrigger),
  'monthCellTrigger',
)
export const DatePickerMonthSelect = withContext(styled(Ark.DatePickerMonthSelect), 'monthSelect')
export const DatePickerNextTrigger = withContext(styled(Ark.DatePickerNextTrigger), 'nextTrigger')
// FIXME: DatePickerPositioner is not exported from @ark-ui/solid/date-picker in v0.9.0
//export const DatePickerPositioner = withContext(styled(Ark.DatePickerPositioner), 'positioner')
export const DatePickerPrevTrigger = withContext(styled(Ark.DatePickerPrevTrigger), 'prevTrigger')
export const DatePickerRow = withContext(styled(Ark.DatePickerRow), 'row')
export const DatePickerRowGroup = withContext(styled(Ark.DatePickerRowGroup), 'rowGroup')
export const DatePickerRowHeader = withContext(styled(Ark.DatePickerRowHeader), 'rowHeader')
export const DatePickerTrigger = withContext(styled(Ark.DatePickerTrigger), 'trigger')
export const DatePickerViewTrigger = withContext(styled(Ark.DatePickerViewTrigger), 'viewTrigger')
export const DatePickerYearCell = withContext(styled(Ark.DatePickerYearCell), 'yearCell')
export const DatePickerYearCellTrigger = withContext(
  styled(Ark.DatePickerYearCellTrigger),
  'yearCellTrigger',
)
export const DatePickerYearSelect = withContext(styled(Ark.DatePickerYearSelect), 'yearSelect')

export const DatePicker = Object.assign(DatePickerRoot, {
  Root: DatePickerRoot,
  ClearTrigger: DatePickerClearTrigger,
  ColumnHeader: DatePickerColumnHeader,
  Content: DatePickerContent,
  Control: DatePickerControl,
  DayCell: DatePickerDayCell,
  DayCellTrigger: DatePickerDayCellTrigger,
  Grid: DatePickerGrid,
  Input: DatePickerInput,
  MonthCell: DatePickerMonthCell,
  MonthCellTrigger: DatePickerMonthCellTrigger,
  MonthSelect: DatePickerMonthSelect,
  NextTrigger: DatePickerNextTrigger,
  //Positioner: DatePickerPositioner,
  PrevTrigger: DatePickerPrevTrigger,
  Row: DatePickerRow,
  RowGroup: DatePickerRowGroup,
  RowHeader: DatePickerRowHeader,
  Trigger: DatePickerTrigger,
  ViewTrigger: DatePickerViewTrigger,
  YearCell: DatePickerYearCell,
  YearCellTrigger: DatePickerYearCellTrigger,
  YearSelect: DatePickerYearSelect,
})
