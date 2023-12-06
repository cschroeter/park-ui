import { DatePicker as ArkDatePicker } from '@ark-ui/react'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'datePicker',
  slots: {
    root: 'datePicker__root',
    label: 'datePicker__label',
    clearTrigger: 'datePicker__clearTrigger',
    content: 'datePicker__content',
    control: 'datePicker__control',
    input: 'datePicker__input',
    monthSelect: 'datePicker__monthSelect',
    nextTrigger: 'datePicker__nextTrigger',
    positioner: 'datePicker__positioner',
    prevTrigger: 'datePicker__prevTrigger',
    rangeText: 'datePicker__rangeText',
    table: 'datePicker__table',
    tableBody: 'datePicker__tableBody',
    tableCell: 'datePicker__tableCell',
    tableCellTrigger: 'datePicker__tableCellTrigger',
    tableHead: 'datePicker__tableHead',
    tableHeader: 'datePicker__tableHeader',
    tableRow: 'datePicker__tableRow',
    trigger: 'datePicker__trigger',
    viewTrigger: 'datePicker__viewTrigger',
    viewControl: 'datePicker__viewControl',
    yearSelect: 'datePicker__yearSelect',
    view: 'datePicker__view',
  },
  variants: {},
})
const { withProvider, withContext } = createStyleContext(styles)

export const DatePickerRoot = withProvider(ArkDatePicker.Root, 'root')
export const DatePickerClearTrigger = withContext(ArkDatePicker.ClearTrigger, 'clearTrigger')
export const DatePickerContent = withContext(ArkDatePicker.Content, 'content')
export const DatePickerControl = withContext(ArkDatePicker.Control, 'control')
export const DatePickerInput = withContext(ArkDatePicker.Input, 'input')
export const DatePickerLabel = withContext(ArkDatePicker.Label, 'label')
export const DatePickerMonthSelect = withContext(ArkDatePicker.MonthSelect, 'monthSelect')
export const DatePickerNextTrigger = withContext(ArkDatePicker.NextTrigger, 'nextTrigger')
export const DatePickerPositioner = withContext(ArkDatePicker.Positioner, 'positioner')
export const DatePickerPrevTrigger = withContext(ArkDatePicker.PrevTrigger, 'prevTrigger')
export const DatePickerRangeText = withContext(ArkDatePicker.RangeText, 'rangeText')
export const DatePickerTable = withContext(ArkDatePicker.Table, 'table')
export const DatePickerTableBody = withContext(ArkDatePicker.TableBody, 'tableBody')
export const DatePickerTableCell = withContext(ArkDatePicker.TableCell, 'tableCell')
export const DatePickerTableCellTrigger = withContext(
  ArkDatePicker.TableCellTrigger,
  'tableCellTrigger',
)
export const DatePickerTableHead = withContext(ArkDatePicker.TableHead, 'tableHead')
export const DatePickerTableHeader = withContext(ArkDatePicker.TableHeader, 'tableHeader')
export const DatePickerTableRow = withContext(ArkDatePicker.TableRow, 'tableRow')
export const DatePickerTrigger = withContext(ArkDatePicker.Trigger, 'trigger')
export const DatePickerView = withContext(ArkDatePicker.View, 'view')
export const DatePickerViewControl = withContext(ArkDatePicker.ViewControl, 'viewControl')
export const DatePickerViewTrigger = withContext(ArkDatePicker.ViewTrigger, 'viewTrigger')
export const DatePickerYearSelect = withContext(ArkDatePicker.YearSelect, 'yearSelect')

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
