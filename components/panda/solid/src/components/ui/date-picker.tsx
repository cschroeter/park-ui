import { DatePicker as ArkDatePicker } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
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

export interface DatePickerProps extends ComponentProps<typeof DatePicker> {}
export interface DatePickerClearTriggerProps
  extends ComponentProps<typeof DatePickerClearTrigger> {}
export interface DatePickerContentProps extends ComponentProps<typeof DatePickerContent> {}
export interface DatePickerControlProps extends ComponentProps<typeof DatePickerControl> {}
export interface DatePickerInputProps extends ComponentProps<typeof DatePickerInput> {}
export interface DatePickerLabelProps extends ComponentProps<typeof DatePickerLabel> {}
export interface DatePickerMonthSelectProps extends ComponentProps<typeof DatePickerMonthSelect> {}
export interface DatePickerNextTriggerProps extends ComponentProps<typeof DatePickerNextTrigger> {}
export interface DatePickerPositionerProps extends ComponentProps<typeof DatePickerPositioner> {}
export interface DatePickerPrevTriggerProps extends ComponentProps<typeof DatePickerPrevTrigger> {}
export interface DatePickerRangeTextProps extends ComponentProps<typeof DatePickerRangeText> {}
export interface DatePickerTableProps extends ComponentProps<typeof DatePickerTable> {}
export interface DatePickerTableBodyProps extends ComponentProps<typeof DatePickerTableBody> {}
export interface DatePickerTableCellProps extends ComponentProps<typeof DatePickerTableCell> {}
export interface DatePickerTableCellTriggerProps
  extends ComponentProps<typeof DatePickerTableCellTrigger> {}
export interface DatePickerTableHeadProps extends ComponentProps<typeof DatePickerTableHead> {}
export interface DatePickerTableHeaderProps extends ComponentProps<typeof DatePickerTableHeader> {}
export interface DatePickerTableRowProps extends ComponentProps<typeof DatePickerTableRow> {}
export interface DatePickerTriggerProps extends ComponentProps<typeof DatePickerTrigger> {}
export interface DatePickerViewProps extends ComponentProps<typeof DatePickerView> {}
export interface DatePickerViewControlProps extends ComponentProps<typeof DatePickerViewControl> {}
export interface DatePickerViewTriggerProps extends ComponentProps<typeof DatePickerViewTrigger> {}
export interface DatePickerYearSelectProps extends ComponentProps<typeof DatePickerYearSelect> {}
