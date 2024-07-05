import { DatePicker, type Assign } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type DatePickerVariantProps, datePicker } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(datePicker)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, DatePicker.RootProviderProps>, DatePickerVariantProps>
>(DatePicker.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, DatePicker.RootProps>, DatePickerVariantProps>
>(DatePicker.Root, 'root')

export const ClearTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, DatePicker.ClearTriggerProps>
>(DatePicker.ClearTrigger, 'clearTrigger')

export const Content = withContext<Assign<HTMLStyledProps<'div'>, DatePicker.ContentProps>>(
  DatePicker.Content,
  'content',
)

export const Control = withContext<Assign<HTMLStyledProps<'div'>, DatePicker.ControlProps>>(
  DatePicker.Control,
  'control',
)

export const Input = withContext<Assign<HTMLStyledProps<'input'>, DatePicker.InputProps>>(
  DatePicker.Input,
  'input',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, DatePicker.LabelProps>>(
  DatePicker.Label,
  'label',
)

export const MonthSelect = withContext<
  Assign<HTMLStyledProps<'select'>, DatePicker.MonthSelectProps>
>(DatePicker.MonthSelect, 'monthSelect')

export const NextTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, DatePicker.NextTriggerProps>
>(DatePicker.NextTrigger, 'nextTrigger')

export const Positioner = withContext<Assign<HTMLStyledProps<'div'>, DatePicker.PositionerProps>>(
  DatePicker.Positioner,
  'positioner',
)

export const PresetTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, DatePicker.PresetTriggerProps>
>(DatePicker.PresetTrigger, 'presetTrigger')

export const PrevTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, DatePicker.PrevTriggerProps>
>(DatePicker.PrevTrigger, 'prevTrigger')

export const RangeText = withContext<Assign<HTMLStyledProps<'div'>, DatePicker.RangeTextProps>>(
  DatePicker.RangeText,
  'rangeText',
)

export const TableBody = withContext<Assign<HTMLStyledProps<'tbody'>, DatePicker.TableBodyProps>>(
  DatePicker.TableBody,
  'tableBody',
)

export const TableCell = withContext<Assign<HTMLStyledProps<'td'>, DatePicker.TableCellProps>>(
  DatePicker.TableCell,
  'tableCell',
)

export const TableCellTrigger = withContext<
  Assign<HTMLStyledProps<'div'>, DatePicker.TableCellTriggerProps>
>(DatePicker.TableCellTrigger, 'tableCellTrigger')

export const TableHead = withContext<Assign<HTMLStyledProps<'thead'>, DatePicker.TableHeadProps>>(
  DatePicker.TableHead,
  'tableHead',
)

export const TableHeader = withContext<Assign<HTMLStyledProps<'th'>, DatePicker.TableHeaderProps>>(
  DatePicker.TableHeader,
  'tableHeader',
)

export const Table = withContext<Assign<HTMLStyledProps<'table'>, DatePicker.TableProps>>(
  DatePicker.Table,
  'table',
)

export const TableRow = withContext<Assign<HTMLStyledProps<'tr'>, DatePicker.TableRowProps>>(
  DatePicker.TableRow,
  'tableRow',
)

export const Trigger = withContext<Assign<HTMLStyledProps<'button'>, DatePicker.TriggerProps>>(
  DatePicker.Trigger,
  'trigger',
)

export const ViewControl = withContext<Assign<HTMLStyledProps<'div'>, DatePicker.ViewControlProps>>(
  DatePicker.ViewControl,
  'viewControl',
)

export const View = withContext<Assign<HTMLStyledProps<'div'>, DatePicker.ViewProps>>(
  DatePicker.View,
  'view',
)

export const ViewTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, DatePicker.ViewTriggerProps>
>(DatePicker.ViewTrigger, 'viewTrigger')

export const YearSelect = withContext<
  Assign<HTMLStyledProps<'select'>, DatePicker.YearSelectProps>
>(DatePicker.YearSelect, 'yearSelect')

export { DatePickerContext as Context } from '@ark-ui/solid'
