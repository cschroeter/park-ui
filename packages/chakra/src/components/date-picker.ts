import { DatePicker as ArkDatePicker } from '@ark-ui/react'
import { chakra } from '@chakra-ui/system'
import { createStyleContext } from './create-style-context'

const { withProvider, withContext } = createStyleContext('DatePicker')

export const DatePickerRoot = withProvider(chakra(ArkDatePicker.Root), 'root')
export const DatePickerClearTrigger = withContext(
  chakra(ArkDatePicker.ClearTrigger),
  'clearTrigger',
)
export const DatePickerContent = withContext(chakra(ArkDatePicker.Content), 'content')
export const DatePickerControl = withContext(chakra(ArkDatePicker.Control), 'control')
export const DatePickerInput = withContext(chakra(ArkDatePicker.Input), 'input')
export const DatePickerLabel = withContext(chakra(ArkDatePicker.Label), 'label')
export const DatePickerMonthSelect = withContext(chakra(ArkDatePicker.MonthSelect), 'monthSelect')
export const DatePickerNextTrigger = withContext(chakra(ArkDatePicker.NextTrigger), 'nextTrigger')
export const DatePickerPositioner = withContext(chakra(ArkDatePicker.Positioner), 'positioner')
export const DatePickerPrevTrigger = withContext(chakra(ArkDatePicker.PrevTrigger), 'prevTrigger')
export const DatePickerRangeText = withContext(chakra(ArkDatePicker.RangeText), 'rangeText')
export const DatePickerTable = withContext(chakra(ArkDatePicker.Table), 'table')
export const DatePickerTableBody = withContext(chakra(ArkDatePicker.TableBody), 'tableBody')
export const DatePickerTableCell = withContext(chakra(ArkDatePicker.TableCell), 'tableCell')
export const DatePickerTableCellTrigger = withContext(
  chakra(ArkDatePicker.TableCellTrigger),
  'tableCellTrigger',
)
export const DatePickerTableHead = withContext(chakra(ArkDatePicker.TableHead), 'tableHead')
export const DatePickerTableHeader = withContext(chakra(ArkDatePicker.TableHeader), 'tableHeader')
export const DatePickerTableRow = withContext(chakra(ArkDatePicker.TableRow), 'tableRow')
export const DatePickerTrigger = withContext(chakra(ArkDatePicker.Trigger), 'trigger')
export const DatePickerView = withContext(chakra(ArkDatePicker.View), 'view')
export const DatePickerViewControl = withContext(chakra(ArkDatePicker.ViewControl), 'viewControl')
export const DatePickerViewTrigger = withContext(chakra(ArkDatePicker.ViewTrigger), 'viewTrigger')
export const DatePickerYearSelect = withContext(chakra(ArkDatePicker.YearSelect), 'yearSelect')

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

export type DatePickerProps = typeof DatePickerRoot
export type DatePickerClearTriggerProps = typeof DatePickerClearTrigger
export type DatePickerContentProps = typeof DatePickerContent
export type DatePickerControlProps = typeof DatePickerControl
export type DatePickerInputProps = typeof DatePickerInput
export type DatePickerLabelProps = typeof DatePickerLabel
export type DatePickerMonthSelectProps = typeof DatePickerMonthSelect
export type DatePickerNextTriggerProps = typeof DatePickerNextTrigger
export type DatePickerPositionerProps = typeof DatePickerPositioner
export type DatePickerPrevTriggerProps = typeof DatePickerPrevTrigger
export type DatePickerRangeTextProps = typeof DatePickerRangeText
export type DatePickerTableProps = typeof DatePickerTable
export type DatePickerTableBodyProps = typeof DatePickerTableBody
export type DatePickerTableCellProps = typeof DatePickerTableCell
export type DatePickerTableCellTriggerProps = typeof DatePickerTableCellTrigger
export type DatePickerTableHeadProps = typeof DatePickerTableHead
export type DatePickerTableHeaderProps = typeof DatePickerTableHeader
export type DatePickerTableRowProps = typeof DatePickerTableRow
export type DatePickerTriggerProps = typeof DatePickerTrigger
export type DatePickerViewProps = typeof DatePickerView
export type DatePickerViewControlProps = typeof DatePickerViewControl
export type DatePickerViewTriggerProps = typeof DatePickerViewTrigger
export type DatePickerYearSelectProps = typeof DatePickerYearSelect
