import { DatePicker } from '@ark-ui/solid'
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

const Root = withProvider(DatePicker.Root, 'root')
const ClearTrigger = withContext(DatePicker.ClearTrigger, 'clearTrigger')
const Content = withContext(DatePicker.Content, 'content')
const Control = withContext(DatePicker.Control, 'control')
const Input = withContext(DatePicker.Input, 'input')
const Label = withContext(DatePicker.Label, 'label')
const MonthSelect = withContext(DatePicker.MonthSelect, 'monthSelect')
const NextTrigger = withContext(DatePicker.NextTrigger, 'nextTrigger')
const Positioner = withContext(DatePicker.Positioner, 'positioner')
const PrevTrigger = withContext(DatePicker.PrevTrigger, 'prevTrigger')
const RangeText = withContext(DatePicker.RangeText, 'rangeText')
const Table = withContext(DatePicker.Table, 'table')
const TableBody = withContext(DatePicker.TableBody, 'tableBody')
const TableCell = withContext(DatePicker.TableCell, 'tableCell')
const TableCellTrigger = withContext(DatePicker.TableCellTrigger, 'tableCellTrigger')
const TableHead = withContext(DatePicker.TableHead, 'tableHead')
const TableHeader = withContext(DatePicker.TableHeader, 'tableHeader')
const TableRow = withContext(DatePicker.TableRow, 'tableRow')
const Trigger = withContext(DatePicker.Trigger, 'trigger')
const View = withContext(DatePicker.View, 'view')
const ViewControl = withContext(DatePicker.ViewControl, 'viewControl')
const ViewTrigger = withContext(DatePicker.ViewTrigger, 'viewTrigger')
const YearSelect = withContext(DatePicker.YearSelect, 'yearSelect')

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
