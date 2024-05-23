import { DatePicker } from '@ark-ui/solid'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const datePicker = tv(
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
      presetTrigger: 'datePicker__presetTrigger',
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
const { withProvider, withContext } = createStyleContext(datePicker)

export interface RootProps extends DatePicker.RootProps, VariantProps<typeof datePicker> {}
export const Root = withProvider<RootProps>(DatePicker.Root, 'root')

export const ClearTrigger = withContext<DatePicker.ClearTriggerProps>(
  DatePicker.ClearTrigger,
  'clearTrigger',
)

export const Content = withContext<DatePicker.ContentProps>(DatePicker.Content, 'content')

export const Control = withContext<DatePicker.ControlProps>(DatePicker.Control, 'control')

export const Input = withContext<DatePicker.InputProps>(DatePicker.Input, 'input')

export const Label = withContext<DatePicker.LabelProps>(DatePicker.Label, 'label')

export const MonthSelect = withContext<DatePicker.MonthSelectProps>(
  DatePicker.MonthSelect,
  'monthSelect',
)

export const NextTrigger = withContext<DatePicker.NextTriggerProps>(
  DatePicker.NextTrigger,
  'nextTrigger',
)

export const Positioner = withContext<DatePicker.PositionerProps>(
  DatePicker.Positioner,
  'positioner',
)

export const PresetTrigger = withContext<DatePicker.PresetTriggerProps>(
  DatePicker.PresetTrigger,
  'presetTrigger',
)

export const PrevTrigger = withContext<DatePicker.PrevTriggerProps>(
  DatePicker.PrevTrigger,
  'prevTrigger',
)

export const RangeText = withContext<DatePicker.RangeTextProps>(DatePicker.RangeText, 'rangeText')

export const TableBody = withContext<DatePicker.TableBodyProps>(DatePicker.TableBody, 'tableBody')

export const TableCell = withContext<DatePicker.TableCellProps>(DatePicker.TableCell, 'tableCell')

export const TableCellTrigger = withContext<DatePicker.TableCellTriggerProps>(
  DatePicker.TableCellTrigger,
  'tableCellTrigger',
)

export const TableHead = withContext<DatePicker.TableHeadProps>(DatePicker.TableHead, 'tableHead')

export const TableHeader = withContext<DatePicker.TableHeaderProps>(
  DatePicker.TableHeader,
  'tableHeader',
)

export const Table = withContext<DatePicker.TableProps>(DatePicker.Table, 'table')

export const TableRow = withContext<DatePicker.TableRowProps>(DatePicker.TableRow, 'tableRow')

export const Trigger = withContext<DatePicker.TriggerProps>(DatePicker.Trigger, 'trigger')

export const ViewControl = withContext<DatePicker.ViewControlProps>(
  DatePicker.ViewControl,
  'viewControl',
)

export const View = withContext<DatePicker.ViewProps>(DatePicker.View, 'view')

export const ViewTrigger = withContext<DatePicker.ViewTriggerProps>(
  DatePicker.ViewTrigger,
  'viewTrigger',
)

export const YearSelect = withContext<DatePicker.YearSelectProps>(
  DatePicker.YearSelect,
  'yearSelect',
)

export {
  DatePickerContext as Context,
  type DatePickerContextProps as ContextProps,
} from '@ark-ui/react'
