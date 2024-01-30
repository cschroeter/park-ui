import { DatePicker as ArkDatePicker } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
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

export const DatePicker = {
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
}

export interface DatePickerRootProps extends ComponentProps<typeof DatePickerRoot> {}
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
