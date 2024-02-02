import { DatePicker } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
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
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(DatePicker.Root, 'root')
export const ClearTrigger = withContext(DatePicker.ClearTrigger, 'clearTrigger')
export const Content = withContext(DatePicker.Content, 'content')
export const Control = withContext(DatePicker.Control, 'control')
export const Input = withContext(DatePicker.Input, 'input')
export const Label = withContext(DatePicker.Label, 'label')
export const MonthSelect = withContext(DatePicker.MonthSelect, 'monthSelect')
export const NextTrigger = withContext(DatePicker.NextTrigger, 'nextTrigger')
export const Positioner = withContext(DatePicker.Positioner, 'positioner')
export const PrevTrigger = withContext(DatePicker.PrevTrigger, 'prevTrigger')
export const RangeText = withContext(DatePicker.RangeText, 'rangeText')
export const Table = withContext(DatePicker.Table, 'table')
export const TableBody = withContext(DatePicker.TableBody, 'tableBody')
export const TableCell = withContext(DatePicker.TableCell, 'tableCell')
export const TableCellTrigger = withContext(DatePicker.TableCellTrigger, 'tableCellTrigger')
export const TableHead = withContext(DatePicker.TableHead, 'tableHead')
export const TableHeader = withContext(DatePicker.TableHeader, 'tableHeader')
export const TableRow = withContext(DatePicker.TableRow, 'tableRow')
export const Trigger = withContext(DatePicker.Trigger, 'trigger')
export const View = withContext(DatePicker.View, 'view')
export const ViewControl = withContext(DatePicker.ViewControl, 'viewControl')
export const ViewTrigger = withContext(DatePicker.ViewTrigger, 'viewTrigger')
export const YearSelect = withContext(DatePicker.YearSelect, 'yearSelect')

export type RootProps = ComponentProps<typeof Root>
export interface ClearTriggerProps extends ComponentProps<typeof ClearTrigger> {}
export interface ContentProps extends ComponentProps<typeof Content> {}
export interface ControlProps extends ComponentProps<typeof Control> {}
export interface InputProps extends ComponentProps<typeof Input> {}
export interface LabelProps extends ComponentProps<typeof Label> {}
export interface MonthSelectProps extends ComponentProps<typeof MonthSelect> {}
export interface NextTriggerProps extends ComponentProps<typeof NextTrigger> {}
export interface PositionerProps extends ComponentProps<typeof Positioner> {}
export interface PrevTriggerProps extends ComponentProps<typeof PrevTrigger> {}
export interface RangeTextProps extends ComponentProps<typeof RangeText> {}
export interface TableProps extends ComponentProps<typeof Table> {}
export interface TableBodyProps extends ComponentProps<typeof TableBody> {}
export interface TableCellProps extends ComponentProps<typeof TableCell> {}
export interface TableCellTriggerProps extends ComponentProps<typeof TableCellTrigger> {}
export interface TableHeadProps extends ComponentProps<typeof TableHead> {}
export interface TableHeaderProps extends ComponentProps<typeof TableHeader> {}
export interface TableRowProps extends ComponentProps<typeof TableRow> {}
export interface TriggerProps extends ComponentProps<typeof Trigger> {}
export interface ViewProps extends ComponentProps<typeof View> {}
export interface ViewControlProps extends ComponentProps<typeof ViewControl> {}
export interface ViewTriggerProps extends ComponentProps<typeof ViewTrigger> {}
export interface YearSelectProps extends ComponentProps<typeof YearSelect> {}
