import type { Assign } from '@ark-ui/react'
import { DatePicker } from '@ark-ui/react/date-picker'
import { type DatePickerVariantProps, datePicker } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(datePicker)

export interface RootProps
  extends Assign<JsxStyleProps, DatePicker.RootProps>,
    DatePickerVariantProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(DatePicker.Root, 'root')

export interface ClearTriggerProps extends Assign<JsxStyleProps, DatePicker.ClearTriggerProps> {}
export const ClearTrigger = withContext<HTMLButtonElement, ClearTriggerProps>(
  DatePicker.ClearTrigger,
  'clearTrigger',
)

export interface ContentProps extends Assign<JsxStyleProps, DatePicker.ContentProps> {}
export const Content = withContext<HTMLDivElement, ContentProps>(DatePicker.Content, 'content')

export interface ControlProps extends Assign<JsxStyleProps, DatePicker.ControlProps> {}
export const Control = withContext<HTMLDivElement, ControlProps>(DatePicker.Control, 'control')

export interface InputProps extends Assign<JsxStyleProps, DatePicker.InputProps> {}
export const Input = withContext<HTMLInputElement, InputProps>(DatePicker.Input, 'input')

export interface LabelProps extends Assign<JsxStyleProps, DatePicker.LabelProps> {}
export const Label = withContext<HTMLLabelElement, LabelProps>(DatePicker.Label, 'label')

export interface MonthSelectProps extends Assign<JsxStyleProps, DatePicker.MonthSelectProps> {}
export const MonthSelect = withContext<HTMLSelectElement, MonthSelectProps>(
  DatePicker.MonthSelect,
  'monthSelect',
)

export interface NextTriggerProps extends Assign<JsxStyleProps, DatePicker.NextTriggerProps> {}
export const NextTrigger = withContext<HTMLButtonElement, NextTriggerProps>(
  DatePicker.NextTrigger,
  'nextTrigger',
)

export interface PositionerProps extends Assign<JsxStyleProps, DatePicker.PositionerProps> {}
export const Positioner = withContext<HTMLDivElement, PositionerProps>(
  DatePicker.Positioner,
  'positioner',
)

export interface PresetTriggerProps extends Assign<JsxStyleProps, DatePicker.PresetTriggerProps> {}
export const PresetTrigger = withContext<HTMLButtonElement, PresetTriggerProps>(
  DatePicker.PresetTrigger,
  'presetTrigger',
)

export interface PrevTriggerProps extends Assign<JsxStyleProps, DatePicker.PrevTriggerProps> {}
export const PrevTrigger = withContext<HTMLButtonElement, PrevTriggerProps>(
  DatePicker.PrevTrigger,
  'prevTrigger',
)

export interface RangeTextProps extends Assign<JsxStyleProps, DatePicker.RangeTextProps> {}
export const RangeText = withContext<HTMLDivElement, RangeTextProps>(
  DatePicker.RangeText,
  'rangeText',
)

export interface TableBodyProps extends Assign<JsxStyleProps, DatePicker.TableBodyProps> {}
export const TableBody = withContext<HTMLTableSectionElement, TableBodyProps>(
  DatePicker.TableBody,
  'tableBody',
)

export interface TableCellProps extends Assign<JsxStyleProps, DatePicker.TableCellProps> {}
export const TableCell = withContext<HTMLTableCellElement, TableCellProps>(
  DatePicker.TableCell,
  'tableCell',
)

export interface TableCellTriggerProps
  extends Assign<JsxStyleProps, DatePicker.TableCellTriggerProps> {}
export const TableCellTrigger = withContext<HTMLButtonElement, TableCellTriggerProps>(
  DatePicker.TableCellTrigger,
  'tableCellTrigger',
)

export interface TableHeadProps extends Assign<JsxStyleProps, DatePicker.TableHeadProps> {}
export const TableHead = withContext<HTMLTableSectionElement, TableHeadProps>(
  DatePicker.TableHead,
  'tableHead',
)

export interface TableHeaderProps extends Assign<JsxStyleProps, DatePicker.TableHeaderProps> {}
export const TableHeader = withContext<HTMLTableCellElement, TableHeaderProps>(
  DatePicker.TableHeader,
  'tableHeader',
)

export interface TableProps extends Assign<JsxStyleProps, DatePicker.TableProps> {}
export const Table = withContext<HTMLTableElement, TableProps>(DatePicker.Table, 'table')

export interface TableRowProps extends Assign<JsxStyleProps, DatePicker.TableRowProps> {}
export const TableRow = withContext<HTMLTableRowElement, TableRowProps>(
  DatePicker.TableRow,
  'tableRow',
)

export interface TriggerProps extends Assign<JsxStyleProps, DatePicker.TriggerProps> {}
export const Trigger = withContext<HTMLButtonElement, TriggerProps>(DatePicker.Trigger, 'trigger')

export interface ViewControlProps extends Assign<JsxStyleProps, DatePicker.ViewControlProps> {}
export const ViewControl = withContext<HTMLDivElement, ViewControlProps>(
  DatePicker.ViewControl,
  'viewControl',
)

export interface ViewProps extends Assign<JsxStyleProps, DatePicker.ViewProps> {}
export const View = withContext<HTMLDivElement, ViewProps>(DatePicker.View, 'view')

export interface ViewTriggerProps extends Assign<JsxStyleProps, DatePicker.ViewTriggerProps> {}
export const ViewTrigger = withContext<HTMLButtonElement, ViewTriggerProps>(
  DatePicker.ViewTrigger,
  'viewTrigger',
)

export interface YearSelectProps extends Assign<JsxStyleProps, DatePicker.YearSelectProps> {}
export const YearSelect = withContext<HTMLSelectElement, YearSelectProps>(
  DatePicker.YearSelect,
  'yearSelect',
)

export {
  DatePickerContext as Context,
  type DatePickerContextProps as ContextProps,
} from '@ark-ui/react/date-picker'
