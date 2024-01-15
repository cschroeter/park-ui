import { DatePicker as ArkDatePicker } from '@ark-ui/solid'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { datePicker } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(datePicker)

const DatePicker = withProvider(styled(ArkDatePicker.Root), 'root')
const DatePickerClearTrigger = withContext(styled(ArkDatePicker.ClearTrigger), 'clearTrigger')
const DatePickerContent = withContext(styled(ArkDatePicker.Content), 'content')
const DatePickerControl = withContext(styled(ArkDatePicker.Control), 'control')
const DatePickerInput = withContext(styled(ArkDatePicker.Input), 'input')
const DatePickerLabel = withContext(styled(ArkDatePicker.Label), 'label')
const DatePickerMonthSelect = withContext(styled(ArkDatePicker.MonthSelect), 'monthSelect')
const DatePickerNextTrigger = withContext(styled(ArkDatePicker.NextTrigger), 'nextTrigger')
const DatePickerPositioner = withContext(styled(ArkDatePicker.Positioner), 'positioner')
const DatePickerPrevTrigger = withContext(styled(ArkDatePicker.PrevTrigger), 'prevTrigger')
const DatePickerRangeText = withContext(styled(ArkDatePicker.RangeText), 'rangeText')
const DatePickerTable = withContext(styled(ArkDatePicker.Table), 'table')
const DatePickerTableBody = withContext(styled(ArkDatePicker.TableBody), 'tableBody')
const DatePickerTableCell = withContext(styled(ArkDatePicker.TableCell), 'tableCell')
const DatePickerTableCellTrigger = withContext(
  styled(ArkDatePicker.TableCellTrigger),
  'tableCellTrigger',
)
const DatePickerTableHead = withContext(styled(ArkDatePicker.TableHead), 'tableHead')
const DatePickerTableHeader = withContext(styled(ArkDatePicker.TableHeader), 'tableHeader')
const DatePickerTableRow = withContext(styled(ArkDatePicker.TableRow), 'tableRow')
const DatePickerTrigger = withContext(styled(ArkDatePicker.Trigger), 'trigger')
const DatePickerView = withContext(styled(ArkDatePicker.View), 'view')
const DatePickerViewControl = withContext(styled(ArkDatePicker.ViewControl), 'viewControl')
const DatePickerViewTrigger = withContext(styled(ArkDatePicker.ViewTrigger), 'viewTrigger')
const DatePickerYearSelect = withContext(styled(ArkDatePicker.YearSelect), 'yearSelect')

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

export interface DatePickerProps extends HTMLStyledProps<typeof DatePicker> {}
export interface DatePickerClearTriggerProps
  extends HTMLStyledProps<typeof DatePickerClearTrigger> {}
export interface DatePickerContentProps extends HTMLStyledProps<typeof DatePickerContent> {}
export interface DatePickerControlProps extends HTMLStyledProps<typeof DatePickerControl> {}
export interface DatePickerInputProps extends HTMLStyledProps<typeof DatePickerInput> {}
export interface DatePickerLabelProps extends HTMLStyledProps<typeof DatePickerLabel> {}
export interface DatePickerMonthSelectProps extends HTMLStyledProps<typeof DatePickerMonthSelect> {}
export interface DatePickerNextTriggerProps extends HTMLStyledProps<typeof DatePickerNextTrigger> {}
export interface DatePickerPositionerProps extends HTMLStyledProps<typeof DatePickerPositioner> {}
export interface DatePickerPrevTriggerProps extends HTMLStyledProps<typeof DatePickerPrevTrigger> {}
export interface DatePickerRangeTextProps extends HTMLStyledProps<typeof DatePickerRangeText> {}
export interface DatePickerTableProps extends HTMLStyledProps<typeof DatePickerTable> {}
export interface DatePickerTableBodyProps extends HTMLStyledProps<typeof DatePickerTableBody> {}
export interface DatePickerTableCellProps extends HTMLStyledProps<typeof DatePickerTableCell> {}
export interface DatePickerTableCellTriggerProps
  extends HTMLStyledProps<typeof DatePickerTableCellTrigger> {}
export interface DatePickerTableHeadProps extends HTMLStyledProps<typeof DatePickerTableHead> {}
export interface DatePickerTableHeaderProps extends HTMLStyledProps<typeof DatePickerTableHeader> {}
export interface DatePickerTableRowProps extends HTMLStyledProps<typeof DatePickerTableRow> {}
export interface DatePickerTriggerProps extends HTMLStyledProps<typeof DatePickerTrigger> {}
export interface DatePickerViewProps extends HTMLStyledProps<typeof DatePickerView> {}
export interface DatePickerViewControlProps extends HTMLStyledProps<typeof DatePickerViewControl> {}
export interface DatePickerViewTriggerProps extends HTMLStyledProps<typeof DatePickerViewTrigger> {}
export interface DatePickerYearSelectProps extends HTMLStyledProps<typeof DatePickerYearSelect> {}
