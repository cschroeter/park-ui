import { DatePicker as ArkDatePicker } from '@ark-ui/solid'
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

const DatePicker = withProvider(ArkDatePicker.Root, 'root')
const DatePickerClearTrigger = withContext(ArkDatePicker.ClearTrigger, 'clearTrigger')
const DatePickerContent = withContext(ArkDatePicker.Content, 'content')
const DatePickerControl = withContext(ArkDatePicker.Control, 'control')
const DatePickerInput = withContext(ArkDatePicker.Input, 'input')
const DatePickerLabel = withContext(ArkDatePicker.Label, 'label')
const DatePickerMonthSelect = withContext(ArkDatePicker.MonthSelect, 'monthSelect')
const DatePickerNextTrigger = withContext(ArkDatePicker.NextTrigger, 'nextTrigger')
const DatePickerPositioner = withContext(ArkDatePicker.Positioner, 'positioner')
const DatePickerPrevTrigger = withContext(ArkDatePicker.PrevTrigger, 'prevTrigger')
const DatePickerRangeText = withContext(ArkDatePicker.RangeText, 'rangeText')
const DatePickerTable = withContext(ArkDatePicker.Table, 'table')
const DatePickerTableBody = withContext(ArkDatePicker.TableBody, 'tableBody')
const DatePickerTableCell = withContext(ArkDatePicker.TableCell, 'tableCell')
const DatePickerTableCellTrigger = withContext(ArkDatePicker.TableCellTrigger, 'tableCellTrigger')
const DatePickerTableHead = withContext(ArkDatePicker.TableHead, 'tableHead')
const DatePickerTableHeader = withContext(ArkDatePicker.TableHeader, 'tableHeader')
const DatePickerTableRow = withContext(ArkDatePicker.TableRow, 'tableRow')
const DatePickerTrigger = withContext(ArkDatePicker.Trigger, 'trigger')
const DatePickerView = withContext(ArkDatePicker.View, 'view')
const DatePickerViewControl = withContext(ArkDatePicker.ViewControl, 'viewControl')
const DatePickerViewTrigger = withContext(ArkDatePicker.ViewTrigger, 'viewTrigger')
const DatePickerYearSelect = withContext(ArkDatePicker.YearSelect, 'yearSelect')

const Root = DatePicker
const ClearTrigger = DatePickerClearTrigger
const Content = DatePickerContent
const Control = DatePickerControl
const Input = DatePickerInput
const Label = DatePickerLabel
const MonthSelect = DatePickerMonthSelect
const NextTrigger = DatePickerNextTrigger
const Positioner = DatePickerPositioner
const PrevTrigger = DatePickerPrevTrigger
const RangeText = DatePickerRangeText
const Table = DatePickerTable
const TableBody = DatePickerTableBody
const TableCell = DatePickerTableCell
const TableCellTrigger = DatePickerTableCellTrigger
const TableHead = DatePickerTableHead
const TableHeader = DatePickerTableHeader
const TableRow = DatePickerTableRow
const Trigger = DatePickerTrigger
const View = DatePickerView
const ViewControl = DatePickerViewControl
const ViewTrigger = DatePickerViewTrigger
const YearSelect = DatePickerYearSelect

export {
  ClearTrigger,
  Content,
  Control,
  DatePicker,
  DatePickerClearTrigger,
  DatePickerContent,
  DatePickerControl,
  DatePickerInput,
  DatePickerLabel,
  DatePickerMonthSelect,
  DatePickerNextTrigger,
  DatePickerPositioner,
  DatePickerPrevTrigger,
  DatePickerRangeText,
  DatePickerTable,
  DatePickerTableBody,
  DatePickerTableCell,
  DatePickerTableCellTrigger,
  DatePickerTableHead,
  DatePickerTableHeader,
  DatePickerTableRow,
  DatePickerTrigger,
  DatePickerView,
  DatePickerViewControl,
  DatePickerViewTrigger,
  DatePickerYearSelect,
  Input,
  Label,
  MonthSelect,
  NextTrigger,
  Positioner,
  PrevTrigger,
  RangeText,
  Root,
  Table,
  TableBody,
  TableCell,
  TableCellTrigger,
  TableHead,
  TableHeader,
  TableRow,
  Trigger,
  View,
  ViewControl,
  ViewTrigger,
  YearSelect,
}
