'use client'

import { Portal } from '@ark-ui/react'
import { CheckIcon, ChevronsUpDownIcon, SlidersIcon, XIcon } from 'lucide-react'
import { useState } from 'react'
import { Box, Flex, Stack } from 'styled-system/jsx'
import { Pattern, match } from 'ts-pattern'
import { useBoolean } from 'usehooks-ts'
import { IconButton } from '~/components/ui/icon-button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'
import { Typography } from '~/components/ui/typography'
import type { DefaultProps } from '~/lib/find-component'
import { AccordionDemo } from './demo/accordion-demo'
import { AlertDemo } from './demo/alert-demo'
import { ArticleDemo } from './demo/article-demo'
import { AvatarDemo } from './demo/avatar-demo'
import { BadgeDemo } from './demo/badge-demo'
import { ButtonDemo } from './demo/button-demo'
import { CardDemo } from './demo/card-demo'
import { CarouselDemo } from './demo/carousel-demo'
import { CheckboxDemo } from './demo/checkbox-demo'
import { CodeDemo } from './demo/code-demo'
import { ColorPickerDemo } from './demo/color-picker-demo'
import { ComboboxDemo } from './demo/combobox-demo'
import { DatePickerDemo } from './demo/date-picker-demo'
import { DialogDemo } from './demo/dialog-demo'
import { DrawerDemo } from './demo/drawer-demo'
import { EditableDemo } from './demo/editable-demo'
import { HoverCardDemo } from './demo/hover-card-demo'
import { IconButtonDemo } from './demo/icon-button-demo'
import { IconDemo } from './demo/icon-demo'
import { InputDemo } from './demo/input-demo'
import { LabelDemo } from './demo/label-demo'
import { MenuDemo } from './demo/menu-demo'
import { NumberInputDemo } from './demo/number-input-demo'
import { PaginationDemo } from './demo/pagination-demo'
import { PinInputDemo } from './demo/pin-input-demo'
import { PopoverDemo } from './demo/popover-demo'
import { RadioButtonGroupDemo } from './demo/radio-button-group-demo'
import { RadioGroupDemo } from './demo/radio-group-demo'
import { RangeSliderDemo } from './demo/range-slider-demo'
import { RatingGroupDemo } from './demo/rating-group-demo'
import { SegmentGroupDemo } from './demo/segment-group-demo'
import { SelectDemo } from './demo/select-demo'
import { SliderDemo } from './demo/slider-demo'
import { SplitterDemo } from './demo/splitter-demo'
import { SwitchDemo } from './demo/switch-demo'
import { TableDemo } from './demo/table-demo'
import { TabsDemo } from './demo/tabs-demo'
import { TagsInputDemo } from './demo/tags-input-demo'
import { TextareaDemo } from './demo/textarea-demo'
import { ToastDemo } from './demo/toast-demo'
import { ToggleGroupDemo } from './demo/toggle-group-demo'
import { TooltipDemo } from './demo/tooltip-demo'

type Props = {
  defaultProps?: DefaultProps
  component: string
}

export const Playground = (props: Props) => {
  const { component, defaultProps } = props
  const [state, setState] = useState(
    Object.fromEntries(
      Object.entries(defaultProps ?? {}).map(([key, value]) => [
        key,
        typeof value === 'object' ? value.defaultValue : value,
      ]),
    ),
  )

  const Component: any = match(component)
    .with('Accordion', () => AccordionDemo)
    .with('Alert', () => AlertDemo)
    .with('Article', () => ArticleDemo)
    .with('Avatar', () => AvatarDemo)
    .with('Badge', () => BadgeDemo)
    .with('Button', () => ButtonDemo)
    .with('Card', () => CardDemo)
    .with('Carousel', () => CarouselDemo)
    .with('Checkbox', () => CheckboxDemo)
    .with('Code', () => CodeDemo)
    .with('Color Picker', () => ColorPickerDemo)
    .with('Combobox', () => ComboboxDemo)
    .with('Date Picker', () => DatePickerDemo)
    .with('Dialog', () => DialogDemo)
    .with('Drawer', () => DrawerDemo)
    .with('Editable', () => EditableDemo)
    .with('Hover Card', () => HoverCardDemo)
    .with('Icon', () => IconDemo)
    .with('Icon Button', () => IconButtonDemo)
    .with('Input', () => InputDemo)
    .with('Label', () => LabelDemo)
    .with('Menu', () => MenuDemo)
    .with('Number Input', () => NumberInputDemo)
    .with('Pagination', () => PaginationDemo)
    .with('Pin Input', () => PinInputDemo)
    .with('Popover', () => PopoverDemo)
    .with('Radio Group', () => RadioGroupDemo)
    .with('Radio Button Group', () => RadioButtonGroupDemo)
    .with('Select', () => SelectDemo)
    .with('Range Slider', () => RangeSliderDemo)
    .with('Rating Group', () => RatingGroupDemo)
    .with('Segment Group', () => SegmentGroupDemo)
    .with('Slider', () => SliderDemo)
    .with('Splitter', () => SplitterDemo)
    .with('Switch', () => SwitchDemo)
    .with('Tabs', () => TabsDemo)
    .with('Table', () => TableDemo)
    .with('Tags Input', () => TagsInputDemo)
    .with('Textarea', () => TextareaDemo)
    .with('Toast', () => ToastDemo)
    .with('Toggle Group', () => ToggleGroupDemo)
    .with('Tooltip', () => TooltipDemo)
    .run()

  const hasSettings = Object.keys(defaultProps ?? {}).length > 0
  const { value, setFalse, setTrue } = useBoolean(false)

  return (
    <Flex minH="md" position="relative" borderWidth="1px" borderRadius="l3" overflow="hidden">
      {hasSettings && (
        <Box position="absolute" top="2" right="2" zIndex={1}>
          <IconButton
            onClick={() => setTrue()}
            variant="secondary"
            size="sm"
            aria-label="Open settings"
          >
            <SlidersIcon />
          </IconButton>
        </Box>
      )}
      <Flex
        transition="width"
        transitionDuration="250ms"
        transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
        width="100%"
        _open={{
          width: 'calc(100% - 13rem)',
        }}
        data-state={value ? 'open' : 'closed'}
        align="center"
        justify="center"
        p={{ base: '4', md: '6' }}
      >
        <Component {...state} />
      </Flex>
      {hasSettings}
      <Box
        position="absolute"
        bg="bg.default"
        height="full"
        right="-13rem"
        width="13rem"
        transition="right"
        transitionDuration="250ms"
        transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
        data-state={value ? 'open' : 'closed'}
        borderLeftWidth="1px"
        _open={{
          right: '0',
        }}
        zIndex={2}
      >
        <Box position="absolute" top="2" right="2" zIndex={1}>
          <IconButton
            onClick={() => setFalse()}
            variant="tertiary"
            size="sm"
            aria-label='Close "Settings"'
          >
            <XIcon />
          </IconButton>
        </Box>
        <Typography textStyle="sm" p="4" fontWeight="semibold">
          Settings
        </Typography>
        <hr />
        <Stack gap="4" py="5" px="4">
          {Object.entries(defaultProps || {}).map(([key, value]) =>
            match(value)
              .with(Pattern.string, () => <span key={key} />)
              .with(Pattern.number, () => <span key={key} />)
              .with(Pattern.boolean, (x) => <span key={key} />)
              .with({ defaultValue: Pattern.string }, ({ options, defaultValue }) => (
                <Select
                  key={key}
                  defaultValue={[defaultValue]}
                  items={options}
                  positioning={{ sameWidth: true }}
                  closeOnSelect={false}
                  size="sm"
                  onChange={(e) => setState({ ...state, [key]: e.value[0] ?? '' })}
                >
                  <SelectLabel textTransform="capitalize">{key}</SelectLabel>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Framework" />
                    <ChevronsUpDownIcon />
                  </SelectTrigger>
                  <Portal>
                    <SelectPositioner zIndex="docked">
                      <SelectContent>
                        {options.map((option) => (
                          <SelectItem key={option} item={option}>
                            <SelectItemText>{option}</SelectItemText>
                            <SelectItemIndicator>
                              <CheckIcon />
                            </SelectItemIndicator>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </SelectPositioner>
                  </Portal>
                </Select>
              ))
              .exhaustive(),
          )}
        </Stack>
      </Box>
    </Flex>
  )
}
