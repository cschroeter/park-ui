import * as Ark from '@ark-ui/react/date-picker'
import { createStyleContext } from '~/lib/create-style-context'
import { datePickerStyles } from './recipe'
export * from '@ark-ui/react/combobox'

export type DatepickerProps = React.ComponentProps<typeof DatePicker>

const { withProvider, withContext } = createStyleContext(datePickerStyles)

const DatePickerRoot = withProvider(Ark.DatePicker.Root, 'root')
export const DatePickerClearTrigger = withContext(Ark.DatePicker.ClearTrigger, 'clearTrigger')
export const DatePickerContent = withContext(Ark.DatePicker.Content, 'content')
export const DatePickerControl = withContext(Ark.DatePicker.Control, 'control')
export const DatePickerInput = withContext(Ark.DatePicker.Input, 'input')
export const DatePickerLabel = withContext(Ark.DatePicker.Label, 'label')
export const DatePickerMonthSelect = withContext(Ark.DatePicker.MonthSelect, 'monthSelect')
export const DatePickerNextTrigger = withContext(Ark.DatePicker.NextTrigger, 'nextTrigger')
export const DatePickerPositioner = withContext(Ark.DatePicker.Positioner, 'positioner')
export const DatePickerPrevTrigger = withContext(Ark.DatePicker.PrevTrigger, 'prevTrigger')
export const DatePickerRangeText = withContext(Ark.DatePicker.RangeText, 'rangeText')
export const DatePickerTable = withContext(Ark.DatePicker.Table, 'table')
export const DatePickerTableBody = withContext(Ark.DatePicker.TableBody, 'tableBody')
export const DatePickerTableCell = withContext(Ark.DatePicker.TableCell, 'tableCell')
export const DatePickerTableCellTrigger = withContext(
  Ark.DatePicker.TableCellTrigger,
  'tableCellTrigger',
)
export const DatePickerTableHead = withContext(Ark.DatePicker.TableHead, 'tableHead')
export const DatePickerTableHeader = withContext(Ark.DatePicker.TableHeader, 'tableHeader')
export const DatePickerTableRow = withContext(Ark.DatePicker.TableRow, 'tableRow')
export const DatePickerTrigger = withContext(Ark.DatePicker.Trigger, 'trigger')
export const DatePickerView = withContext(Ark.DatePicker.View, 'view')
export const DatePickerViewControl = withContext(Ark.DatePicker.ViewControl, 'viewControl')
export const DatePickerViewTrigger = withContext(Ark.DatePicker.ViewTrigger, 'viewTrigger')
export const DatePickerYearSelect = withContext(Ark.DatePicker.YearSelect, 'yearSelect')

export const DatePicker = Object.assign(DatePickerRoot, {
  Root: DatePickerRoot,
  ClearTrigger: DatePickerClearTrigger,
  Content: DatePickerContent,
  Control: DatePickerControl,
  Input: DatePickerInput,
  Label: DatePickerLabel,
  MonthSelect: DatePickerMonthSelect,
  NextTrigger: DatePickerNextTrigger,
  Positioner: DatePickerPositioner,
  PrevTrigger: DatePickerPrevTrigger,
  RangeText: DatePickerRangeText,
  Table: DatePickerTable,
  TableBody: DatePickerTableBody,
  TableCell: DatePickerTableCell,
  TableCellTrigger: DatePickerTableCellTrigger,
  TableHead: DatePickerTableHead,
  TableHeader: DatePickerTableHeader,
  TableRow: DatePickerTableRow,
  Trigger: DatePickerTrigger,
  View: DatePickerView,
  ViewControl: DatePickerViewControl,
  ViewTrigger: DatePickerViewTrigger,
  YearSelect: DatePickerYearSelect,
})
