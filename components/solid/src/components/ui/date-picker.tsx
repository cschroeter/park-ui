import { type Assign, DatePicker } from '@ark-ui/solid'
import { type DatePickerVariantProps, datePicker } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(datePicker)

export interface RootProps
  extends Assign<JsxStyleProps, DatePicker.RootProps>,
    DatePickerVariantProps {}
export const Root = withProvider<RootProps>(DatePicker.Root, 'root')

export const ClearTrigger = withContext<Assign<JsxStyleProps, DatePicker.ClearTriggerProps>>(
  DatePicker.ClearTrigger,
  'clearTrigger',
)

export const Content = withContext<Assign<JsxStyleProps, DatePicker.ContentProps>>(
  DatePicker.Content,
  'content',
)

export const Control = withContext<Assign<JsxStyleProps, DatePicker.ControlProps>>(
  DatePicker.Control,
  'control',
)

export const Input = withContext<Assign<JsxStyleProps, DatePicker.InputProps>>(
  DatePicker.Input,
  'input',
)

export const Label = withContext<Assign<JsxStyleProps, DatePicker.LabelProps>>(
  DatePicker.Label,
  'label',
)

export const MonthSelect = withContext<Assign<JsxStyleProps, DatePicker.MonthSelectProps>>(
  DatePicker.MonthSelect,
  'monthSelect',
)

export const NextTrigger = withContext<Assign<JsxStyleProps, DatePicker.NextTriggerProps>>(
  DatePicker.NextTrigger,
  'nextTrigger',
)

export const Positioner = withContext<Assign<JsxStyleProps, DatePicker.PositionerProps>>(
  DatePicker.Positioner,
  'positioner',
)

export const PresetTrigger = withContext<Assign<JsxStyleProps, DatePicker.PresetTriggerProps>>(
  DatePicker.PresetTrigger,
  'presetTrigger',
)

export const PrevTrigger = withContext<Assign<JsxStyleProps, DatePicker.PrevTriggerProps>>(
  DatePicker.PrevTrigger,
  'prevTrigger',
)

export const RangeText = withContext<Assign<JsxStyleProps, DatePicker.RangeTextProps>>(
  DatePicker.RangeText,
  'rangeText',
)

export const TableBody = withContext<Assign<JsxStyleProps, DatePicker.TableBodyProps>>(
  DatePicker.TableBody,
  'tableBody',
)

export const TableCell = withContext<Assign<JsxStyleProps, DatePicker.TableCellProps>>(
  DatePicker.TableCell,
  'tableCell',
)

export const TableCellTrigger = withContext<
  Assign<JsxStyleProps, DatePicker.TableCellTriggerProps>
>(DatePicker.TableCellTrigger, 'tableCellTrigger')

export const TableHead = withContext<Assign<JsxStyleProps, DatePicker.TableHeadProps>>(
  DatePicker.TableHead,
  'tableHead',
)

export const TableHeader = withContext<Assign<JsxStyleProps, DatePicker.TableHeaderProps>>(
  DatePicker.TableHeader,
  'tableHeader',
)

export const Table = withContext<Assign<JsxStyleProps, DatePicker.TableProps>>(
  DatePicker.Table,
  'table',
)

export const TableRow = withContext<Assign<JsxStyleProps, DatePicker.TableRowProps>>(
  DatePicker.TableRow,
  'tableRow',
)

export const Trigger = withContext<Assign<JsxStyleProps, DatePicker.TriggerProps>>(
  DatePicker.Trigger,
  'trigger',
)

export const ViewControl = withContext<Assign<JsxStyleProps, DatePicker.ViewControlProps>>(
  DatePicker.ViewControl,
  'viewControl',
)

export const View = withContext<Assign<JsxStyleProps, DatePicker.ViewProps>>(
  DatePicker.View,
  'view',
)

export const ViewTrigger = withContext<Assign<JsxStyleProps, DatePicker.ViewTriggerProps>>(
  DatePicker.ViewTrigger,
  'viewTrigger',
)

export const YearSelect = withContext<Assign<JsxStyleProps, DatePicker.YearSelectProps>>(
  DatePicker.YearSelect,
  'yearSelect',
)

export {
  DatePickerContext as Context,
  type DatePickerContextProps as ContextProps,
} from '@ark-ui/solid'
