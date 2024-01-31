import { DatePicker } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { datePicker } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(datePicker)

const Root = withProvider(styled(DatePicker.Root), 'root')
const ClearTrigger = withContext(styled(DatePicker.ClearTrigger), 'clearTrigger')
const Content = withContext(styled(DatePicker.Content), 'content')
const Control = withContext(styled(DatePicker.Control), 'control')
const Input = withContext(styled(DatePicker.Input), 'input')
const Label = withContext(styled(DatePicker.Label), 'label')
const MonthSelect = withContext(styled(DatePicker.MonthSelect), 'monthSelect')
const NextTrigger = withContext(styled(DatePicker.NextTrigger), 'nextTrigger')
const Positioner = withContext(styled(DatePicker.Positioner), 'positioner')
const PrevTrigger = withContext(styled(DatePicker.PrevTrigger), 'prevTrigger')
const RangeText = withContext(styled(DatePicker.RangeText), 'rangeText')
const Table = withContext(styled(DatePicker.Table), 'table')
const TableBody = withContext(styled(DatePicker.TableBody), 'tableBody')
const TableCell = withContext(styled(DatePicker.TableCell), 'tableCell')
const TableCellTrigger = withContext(styled(DatePicker.TableCellTrigger), 'tableCellTrigger')
const TableHead = withContext(styled(DatePicker.TableHead), 'tableHead')
const TableHeader = withContext(styled(DatePicker.TableHeader), 'tableHeader')
const TableRow = withContext(styled(DatePicker.TableRow), 'tableRow')
const Trigger = withContext(styled(DatePicker.Trigger), 'trigger')
const View = withContext(styled(DatePicker.View), 'view')
const ViewControl = withContext(styled(DatePicker.ViewControl), 'viewControl')
const ViewTrigger = withContext(styled(DatePicker.ViewTrigger), 'viewTrigger')
const YearSelect = withContext(styled(DatePicker.YearSelect), 'yearSelect')

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
