import { type Assign, DatePicker } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type DatePickerVariantProps, datePicker } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(datePicker)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, DatePicker.RootProviderBaseProps>, DatePickerVariantProps>
>(DatePicker.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, DatePicker.RootBaseProps>, DatePickerVariantProps>
>(DatePicker.Root, 'root')

export const ClearTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, DatePicker.ClearTriggerBaseProps>
>(DatePicker.ClearTrigger, 'clearTrigger')

export const Content = withContext<Assign<HTMLStyledProps<'div'>, DatePicker.ContentBaseProps>>(
  DatePicker.Content,
  'content',
)

export const Control = withContext<Assign<HTMLStyledProps<'div'>, DatePicker.ControlBaseProps>>(
  DatePicker.Control,
  'control',
)

export const Input = withContext<Assign<HTMLStyledProps<'input'>, DatePicker.InputBaseProps>>(
  DatePicker.Input,
  'input',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, DatePicker.LabelBaseProps>>(
  DatePicker.Label,
  'label',
)

export const MonthSelect = withContext<
  Assign<HTMLStyledProps<'select'>, DatePicker.MonthSelectBaseProps>
>(DatePicker.MonthSelect, 'monthSelect')

export const NextTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, DatePicker.NextTriggerBaseProps>
>(DatePicker.NextTrigger, 'nextTrigger')

export const Positioner = withContext<
  Assign<HTMLStyledProps<'div'>, DatePicker.PositionerBaseProps>
>(DatePicker.Positioner, 'positioner')

export const PresetTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, DatePicker.PresetTriggerBaseProps>
>(DatePicker.PresetTrigger, 'presetTrigger')

export const PrevTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, DatePicker.PrevTriggerBaseProps>
>(DatePicker.PrevTrigger, 'prevTrigger')

export const RangeText = withContext<Assign<HTMLStyledProps<'div'>, DatePicker.RangeTextBaseProps>>(
  DatePicker.RangeText,
  'rangeText',
)

export const TableBody = withContext<
  Assign<HTMLStyledProps<'tbody'>, DatePicker.TableBodyBaseProps>
>(DatePicker.TableBody, 'tableBody')

export const TableCell = withContext<Assign<HTMLStyledProps<'td'>, DatePicker.TableCellBaseProps>>(
  DatePicker.TableCell,
  'tableCell',
)

export const TableCellTrigger = withContext<
  Assign<HTMLStyledProps<'div'>, DatePicker.TableCellTriggerBaseProps>
>(DatePicker.TableCellTrigger, 'tableCellTrigger')

export const TableHead = withContext<
  Assign<HTMLStyledProps<'thead'>, DatePicker.TableHeadBaseProps>
>(DatePicker.TableHead, 'tableHead')

export const TableHeader = withContext<
  Assign<HTMLStyledProps<'th'>, DatePicker.TableHeaderBaseProps>
>(DatePicker.TableHeader, 'tableHeader')

export const Table = withContext<Assign<HTMLStyledProps<'table'>, DatePicker.TableBaseProps>>(
  DatePicker.Table,
  'table',
)

export const TableRow = withContext<Assign<HTMLStyledProps<'tr'>, DatePicker.TableRowBaseProps>>(
  DatePicker.TableRow,
  'tableRow',
)

export const Trigger = withContext<Assign<HTMLStyledProps<'button'>, DatePicker.TriggerBaseProps>>(
  DatePicker.Trigger,
  'trigger',
)

export const ViewControl = withContext<
  Assign<HTMLStyledProps<'div'>, DatePicker.ViewControlBaseProps>
>(DatePicker.ViewControl, 'viewControl')

export const View = withContext<Assign<HTMLStyledProps<'div'>, DatePicker.ViewBaseProps>>(
  DatePicker.View,
  'view',
)

export const ViewTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, DatePicker.ViewTriggerBaseProps>
>(DatePicker.ViewTrigger, 'viewTrigger')

export const YearSelect = withContext<
  Assign<HTMLStyledProps<'select'>, DatePicker.YearSelectBaseProps>
>(DatePicker.YearSelect, 'yearSelect')

export { DatePickerContext as Context } from '@ark-ui/solid'
