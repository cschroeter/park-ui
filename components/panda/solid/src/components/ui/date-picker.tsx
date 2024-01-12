import { DatePicker as ArkDatePicker } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { datePicker } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(datePicker)

export const DatePickerRoot = withProvider(styled(ArkDatePicker.Root), 'root')
export const DatePickerClearTrigger = withContext(
  styled(ArkDatePicker.ClearTrigger),
  'clearTrigger',
)
export const DatePickerContent = withContext(styled(ArkDatePicker.Content), 'content')
export const DatePickerControl = withContext(styled(ArkDatePicker.Control), 'control')
export const DatePickerInput = withContext(styled(ArkDatePicker.Input), 'input')
export const DatePickerLabel = withContext(styled(ArkDatePicker.Label), 'label')
export const DatePickerMonthSelect = withContext(styled(ArkDatePicker.MonthSelect), 'monthSelect')
export const DatePickerNextTrigger = withContext(styled(ArkDatePicker.NextTrigger), 'nextTrigger')
export const DatePickerPositioner = withContext(styled(ArkDatePicker.Positioner), 'positioner')
export const DatePickerPrevTrigger = withContext(styled(ArkDatePicker.PrevTrigger), 'prevTrigger')
export const DatePickerRangeText = withContext(styled(ArkDatePicker.RangeText), 'rangeText')
export const DatePickerTable = withContext(styled(ArkDatePicker.Table), 'table')
export const DatePickerTableBody = withContext(styled(ArkDatePicker.TableBody), 'tableBody')
export const DatePickerTableCell = withContext(styled(ArkDatePicker.TableCell), 'tableCell')
export const DatePickerTableCellTrigger = withContext(
  styled(ArkDatePicker.TableCellTrigger),
  'tableCellTrigger',
)
export const DatePickerTableHead = withContext(styled(ArkDatePicker.TableHead), 'tableHead')
export const DatePickerTableHeader = withContext(styled(ArkDatePicker.TableHeader), 'tableHeader')
export const DatePickerTableRow = withContext(styled(ArkDatePicker.TableRow), 'tableRow')
export const DatePickerTrigger = withContext(styled(ArkDatePicker.Trigger), 'trigger')
export const DatePickerView = withContext(styled(ArkDatePicker.View), 'view')
export const DatePickerViewControl = withContext(styled(ArkDatePicker.ViewControl), 'viewControl')
export const DatePickerViewTrigger = withContext(styled(ArkDatePicker.ViewTrigger), 'viewTrigger')
export const DatePickerYearSelect = withContext(styled(ArkDatePicker.YearSelect), 'yearSelect')

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
