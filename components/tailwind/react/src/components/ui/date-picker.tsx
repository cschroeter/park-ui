import { DatePicker } from '@ark-ui/react/date-picker'
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
export const Root = withProvider<HTMLDivElement, RootProps>(DatePicker.Root, 'root')

export const ClearTrigger = withContext<HTMLButtonElement, DatePicker.ClearTriggerProps>(
  DatePicker.ClearTrigger,
  'clearTrigger',
)

export const Content = withContext<HTMLDivElement, DatePicker.ContentProps>(
  DatePicker.Content,
  'content',
)

export const Control = withContext<HTMLDivElement, DatePicker.ControlProps>(
  DatePicker.Control,
  'control',
)

export const Input = withContext<HTMLInputElement, DatePicker.InputProps>(DatePicker.Input, 'input')

export const Label = withContext<HTMLLabelElement, DatePicker.LabelProps>(DatePicker.Label, 'label')

export const MonthSelect = withContext<HTMLSelectElement, DatePicker.MonthSelectProps>(
  DatePicker.MonthSelect,
  'monthSelect',
)

export const NextTrigger = withContext<HTMLButtonElement, DatePicker.NextTriggerProps>(
  DatePicker.NextTrigger,
  'nextTrigger',
)

export const Positioner = withContext<HTMLDivElement, DatePicker.PositionerProps>(
  DatePicker.Positioner,
  'positioner',
)

export const PresetTrigger = withContext<HTMLButtonElement, DatePicker.PresetTriggerProps>(
  DatePicker.PresetTrigger,
  'presetTrigger',
)

export const PrevTrigger = withContext<HTMLButtonElement, DatePicker.PrevTriggerProps>(
  DatePicker.PrevTrigger,
  'prevTrigger',
)

export const RangeText = withContext<HTMLDivElement, DatePicker.RangeTextProps>(
  DatePicker.RangeText,
  'rangeText',
)

export const TableBody = withContext<HTMLTableSectionElement, DatePicker.TableBodyProps>(
  DatePicker.TableBody,
  'tableBody',
)

export const TableCell = withContext<HTMLTableCellElement, DatePicker.TableCellProps>(
  DatePicker.TableCell,
  'tableCell',
)

export const TableCellTrigger = withContext<HTMLButtonElement, DatePicker.TableCellTriggerProps>(
  DatePicker.TableCellTrigger,
  'tableCellTrigger',
)

export const TableHead = withContext<HTMLTableSectionElement, DatePicker.TableHeadProps>(
  DatePicker.TableHead,
  'tableHead',
)

export const TableHeader = withContext<HTMLTableCellElement, DatePicker.TableHeaderProps>(
  DatePicker.TableHeader,
  'tableHeader',
)

export const Table = withContext<HTMLTableElement, DatePicker.TableProps>(DatePicker.Table, 'table')

export const TableRow = withContext<HTMLTableRowElement, DatePicker.TableRowProps>(
  DatePicker.TableRow,
  'tableRow',
)

export const Trigger = withContext<HTMLButtonElement, DatePicker.TriggerProps>(
  DatePicker.Trigger,
  'trigger',
)

export const ViewControl = withContext<HTMLDivElement, DatePicker.ViewControlProps>(
  DatePicker.ViewControl,
  'viewControl',
)

export const View = withContext<HTMLDivElement, DatePicker.ViewProps>(DatePicker.View, 'view')

export const ViewTrigger = withContext<HTMLButtonElement, DatePicker.ViewTriggerProps>(
  DatePicker.ViewTrigger,
  'viewTrigger',
)

export const YearSelect = withContext<HTMLSelectElement, DatePicker.YearSelectProps>(
  DatePicker.YearSelect,
  'yearSelect',
)

export {
  DatePickerContext as Context,
  type DatePickerContextProps as ContextProps,
} from '@ark-ui/react/date-picker'
