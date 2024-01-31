import { DatePicker as ArkDatePicker } from '@ark-ui/react/date-picker'
import { styled } from 'styled-system/jsx'
import { datePicker } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(datePicker)

const Root = withProvider(styled(ArkDatePicker.Root), 'root')
const ClearTrigger = withContext(styled(ArkDatePicker.ClearTrigger), 'clearTrigger')
const Content = withContext(styled(ArkDatePicker.Content), 'content')
const Control = withContext(styled(ArkDatePicker.Control), 'control')
const Input = withContext(styled(ArkDatePicker.Input), 'input')
const Label = withContext(styled(ArkDatePicker.Label), 'label')
const MonthSelect = withContext(styled(ArkDatePicker.MonthSelect), 'monthSelect')
const NextTrigger = withContext(styled(ArkDatePicker.NextTrigger), 'nextTrigger')
const Positioner = withContext(styled(ArkDatePicker.Positioner), 'positioner')
const PrevTrigger = withContext(styled(ArkDatePicker.PrevTrigger), 'prevTrigger')
const RangeText = withContext(styled(ArkDatePicker.RangeText), 'rangeText')
const Table = withContext(styled(ArkDatePicker.Table), 'table')
const TableBody = withContext(styled(ArkDatePicker.TableBody), 'tableBody')
const TableCell = withContext(styled(ArkDatePicker.TableCell), 'tableCell')
const TableCellTrigger = withContext(styled(ArkDatePicker.TableCellTrigger), 'tableCellTrigger')
const TableHead = withContext(styled(ArkDatePicker.TableHead), 'tableHead')
const TableHeader = withContext(styled(ArkDatePicker.TableHeader), 'tableHeader')
const TableRow = withContext(styled(ArkDatePicker.TableRow), 'tableRow')
const Trigger = withContext(styled(ArkDatePicker.Trigger), 'trigger')
const View = withContext(styled(ArkDatePicker.View), 'view')
const ViewControl = withContext(styled(ArkDatePicker.ViewControl), 'viewControl')
const ViewTrigger = withContext(styled(ArkDatePicker.ViewTrigger), 'viewTrigger')
const YearSelect = withContext(styled(ArkDatePicker.YearSelect), 'yearSelect')

export {
  ClearTrigger,
  Content,
  Control,
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
