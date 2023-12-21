import { DatePicker as ArkDatePicker } from '@ark-ui/react/date-picker'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from './create-style-context'

const { withProvider, withContext } = createStyleContext('DatePicker')

const DatePicker = withProvider(chakra(ArkDatePicker.Root), 'root')
const DatePickerClearTrigger = withContext(chakra(ArkDatePicker.ClearTrigger), 'clearTrigger')
const DatePickerContent = withContext(chakra(ArkDatePicker.Content), 'content')
const DatePickerControl = withContext(chakra(ArkDatePicker.Control), 'control')
const DatePickerInput = withContext(chakra(ArkDatePicker.Input), 'input')
const DatePickerLabel = withContext(chakra(ArkDatePicker.Label), 'label')
const DatePickerMonthSelect = withContext(chakra(ArkDatePicker.MonthSelect), 'monthSelect')
const DatePickerNextTrigger = withContext(chakra(ArkDatePicker.NextTrigger), 'nextTrigger')
const DatePickerPositioner = withContext(chakra(ArkDatePicker.Positioner), 'positioner')
const DatePickerPrevTrigger = withContext(chakra(ArkDatePicker.PrevTrigger), 'prevTrigger')
const DatePickerRangeText = withContext(chakra(ArkDatePicker.RangeText), 'rangeText')
const DatePickerTable = withContext(chakra(ArkDatePicker.Table), 'table')
const DatePickerTableBody = withContext(chakra(ArkDatePicker.TableBody), 'tableBody')
const DatePickerTableCell = withContext(chakra(ArkDatePicker.TableCell), 'tableCell')
const DatePickerTableCellTrigger = withContext(
  chakra(ArkDatePicker.TableCellTrigger),
  'tableCellTrigger',
)
const DatePickerTableHead = withContext(chakra(ArkDatePicker.TableHead), 'tableHead')
const DatePickerTableHeader = withContext(chakra(ArkDatePicker.TableHeader), 'tableHeader')
const DatePickerTableRow = withContext(chakra(ArkDatePicker.TableRow), 'tableRow')
const DatePickerTrigger = withContext(chakra(ArkDatePicker.Trigger), 'trigger')
const DatePickerView = withContext(chakra(ArkDatePicker.View), 'view')
const DatePickerViewControl = withContext(chakra(ArkDatePicker.ViewControl), 'viewControl')
const DatePickerViewTrigger = withContext(chakra(ArkDatePicker.ViewTrigger), 'viewTrigger')
const DatePickerYearSelect = withContext(chakra(ArkDatePicker.YearSelect), 'yearSelect')

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

export interface DatePickerProps extends HTMLChakraProps<typeof DatePicker> {}
export interface DatePickerClearTriggerProps
  extends HTMLChakraProps<typeof DatePickerClearTrigger> {}
export interface DatePickerContentProps extends HTMLChakraProps<typeof DatePickerContent> {}
export interface DatePickerControlProps extends HTMLChakraProps<typeof DatePickerControl> {}
export interface DatePickerInputProps extends HTMLChakraProps<typeof DatePickerInput> {}
export interface DatePickerLabelProps extends HTMLChakraProps<typeof DatePickerLabel> {}
export interface DatePickerMonthSelectProps extends HTMLChakraProps<typeof DatePickerMonthSelect> {}
export interface DatePickerNextTriggerProps extends HTMLChakraProps<typeof DatePickerNextTrigger> {}
export interface DatePickerPositionerProps extends HTMLChakraProps<typeof DatePickerPositioner> {}
export interface DatePickerPrevTriggerProps extends HTMLChakraProps<typeof DatePickerPrevTrigger> {}
export interface DatePickerRangeTextProps extends HTMLChakraProps<typeof DatePickerRangeText> {}
export interface DatePickerTableProps extends HTMLChakraProps<typeof DatePickerTable> {}
export interface DatePickerTableBodyProps extends HTMLChakraProps<typeof DatePickerTableBody> {}
export interface DatePickerTableCellProps extends HTMLChakraProps<typeof DatePickerTableCell> {}
export interface DatePickerTableCellTriggerProps
  extends HTMLChakraProps<typeof DatePickerTableCellTrigger> {}
export interface DatePickerTableHeadProps extends HTMLChakraProps<typeof DatePickerTableHead> {}
export interface DatePickerTableHeaderProps extends HTMLChakraProps<typeof DatePickerTableHeader> {}
export interface DatePickerTableRowProps extends HTMLChakraProps<typeof DatePickerTableRow> {}
export interface DatePickerTriggerProps extends HTMLChakraProps<typeof DatePickerTrigger> {}
export interface DatePickerViewProps extends HTMLChakraProps<typeof DatePickerView> {}
export interface DatePickerViewControlProps extends HTMLChakraProps<typeof DatePickerViewControl> {}
export interface DatePickerViewTriggerProps extends HTMLChakraProps<typeof DatePickerViewTrigger> {}
export interface DatePickerYearSelectProps extends HTMLChakraProps<typeof DatePickerYearSelect> {}
