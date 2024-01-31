import { DatePicker as ArkDatePicker } from '@ark-ui/react/date-picker'
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

const Root = withProvider(ArkDatePicker.Root, 'root')
const ClearTrigger = withContext(ArkDatePicker.ClearTrigger, 'clearTrigger')
const Content = withContext(ArkDatePicker.Content, 'content')
const Control = withContext(ArkDatePicker.Control, 'control')
const Input = withContext(ArkDatePicker.Input, 'input')
const Label = withContext(ArkDatePicker.Label, 'label')
const MonthSelect = withContext(ArkDatePicker.MonthSelect, 'monthSelect')
const NextTrigger = withContext(ArkDatePicker.NextTrigger, 'nextTrigger')
const Positioner = withContext(ArkDatePicker.Positioner, 'positioner')
const PrevTrigger = withContext(ArkDatePicker.PrevTrigger, 'prevTrigger')
const RangeText = withContext(ArkDatePicker.RangeText, 'rangeText')
const Table = withContext(ArkDatePicker.Table, 'table')
const TableBody = withContext(ArkDatePicker.TableBody, 'tableBody')
const TableCell = withContext(ArkDatePicker.TableCell, 'tableCell')
const TableCellTrigger = withContext(ArkDatePicker.TableCellTrigger, 'tableCellTrigger')
const TableHead = withContext(ArkDatePicker.TableHead, 'tableHead')
const TableHeader = withContext(ArkDatePicker.TableHeader, 'tableHeader')
const TableRow = withContext(ArkDatePicker.TableRow, 'tableRow')
const Trigger = withContext(ArkDatePicker.Trigger, 'trigger')
const View = withContext(ArkDatePicker.View, 'view')
const ViewControl = withContext(ArkDatePicker.ViewControl, 'viewControl')
const ViewTrigger = withContext(ArkDatePicker.ViewTrigger, 'viewTrigger')
const YearSelect = withContext(ArkDatePicker.YearSelect, 'yearSelect')

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
