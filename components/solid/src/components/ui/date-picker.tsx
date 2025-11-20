import { DatePicker } from '@ark-ui/solid/date-picker'
import type { ComponentProps } from 'solid-js'
import { createStyleContext } from 'styled-system/jsx'
import { datePicker } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(datePicker)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(DatePicker.Root, 'root')
export const RootProvider = withProvider(DatePicker.RootProvider, 'root')
export const ClearTrigger = withContext(DatePicker.ClearTrigger, 'clearTrigger')
export const Content = withContext(DatePicker.Content, 'content')
export const Control = withContext(DatePicker.Control, 'control')
export const Input = withContext(DatePicker.Input, 'input')
export const Label = withContext(DatePicker.Label, 'label')
export const MonthSelect = withContext(DatePicker.MonthSelect, 'monthSelect')
export const NextTrigger = withContext(DatePicker.NextTrigger, 'nextTrigger')
export const Positioner = withContext(DatePicker.Positioner, 'positioner')
export const PresetTrigger = withContext(DatePicker.PresetTrigger, 'presetTrigger')
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

export { DatePickerContext as Context } from '@ark-ui/solid/date-picker'
