import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-solid'
import { Index } from 'solid-js'
import type { Meta } from 'storybook-solidjs'
import { Button } from '~/components/ui/button'
import * as DatePicker from '~/components/ui/date-picker'
import { IconButton } from '~/components/ui/icon-button'
import { Input } from '~/components/ui/input'

const meta: Meta = {
  title: 'Components/Date Picker',
}

export default meta

export const Base = () => {
  return (
    <DatePicker.Root positioning={{ sameWidth: true }} startOfWeek={1}>
      <DatePicker.Label>Date Picker</DatePicker.Label>
      <DatePicker.Control>
        <DatePicker.Input asChild>
          <Input />
        </DatePicker.Input>
        <DatePicker.Trigger asChild>
          <IconButton variant="outline" aria-label="Open date picker">
            <CalendarIcon />
          </IconButton>
        </DatePicker.Trigger>
      </DatePicker.Control>
      <DatePicker.Positioner>
        <DatePicker.Content>
          <DatePicker.View view="day">
            {(api) => (
              <>
                <DatePicker.ViewControl>
                  <DatePicker.PrevTrigger asChild>
                    <IconButton variant="ghost" size="sm">
                      <ChevronLeftIcon />
                    </IconButton>
                  </DatePicker.PrevTrigger>
                  <DatePicker.ViewTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <DatePicker.RangeText />
                    </Button>
                  </DatePicker.ViewTrigger>
                  <DatePicker.NextTrigger asChild>
                    <IconButton variant="ghost" size="sm">
                      <ChevronRightIcon />
                    </IconButton>
                  </DatePicker.NextTrigger>
                </DatePicker.ViewControl>
                <DatePicker.Table>
                  <DatePicker.TableHead>
                    <DatePicker.TableRow>
                      <Index each={api().weekDays}>
                        {(weekDay) => (
                          <DatePicker.TableHeader>{weekDay().narrow}</DatePicker.TableHeader>
                        )}
                      </Index>
                    </DatePicker.TableRow>
                  </DatePicker.TableHead>
                  <DatePicker.TableBody>
                    <Index each={api().weeks}>
                      {(week) => (
                        <DatePicker.TableRow>
                          <Index each={week()}>
                            {(day) => (
                              <DatePicker.TableCell value={day()}>
                                <DatePicker.TableCellTrigger asChild>
                                  <IconButton variant="ghost">{day().day}</IconButton>
                                </DatePicker.TableCellTrigger>
                              </DatePicker.TableCell>
                            )}
                          </Index>
                        </DatePicker.TableRow>
                      )}
                    </Index>
                  </DatePicker.TableBody>
                </DatePicker.Table>
              </>
            )}
          </DatePicker.View>
          <DatePicker.View view="month">
            {(api) => (
              <>
                <DatePicker.ViewControl>
                  <DatePicker.PrevTrigger asChild>
                    <IconButton variant="ghost" size="sm">
                      <ChevronLeftIcon />
                    </IconButton>
                  </DatePicker.PrevTrigger>
                  <DatePicker.ViewTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <DatePicker.RangeText />
                    </Button>
                  </DatePicker.ViewTrigger>
                  <DatePicker.NextTrigger asChild>
                    <IconButton variant="ghost" size="sm">
                      <ChevronRightIcon />
                    </IconButton>
                  </DatePicker.NextTrigger>
                </DatePicker.ViewControl>
                <DatePicker.Table>
                  <DatePicker.TableBody>
                    <Index each={api().getMonthsGrid({ columns: 4, format: 'short' })}>
                      {(months) => (
                        <DatePicker.TableRow>
                          <Index each={months()}>
                            {(month) => (
                              <DatePicker.TableCell value={month().value}>
                                <DatePicker.TableCellTrigger asChild>
                                  <Button variant="ghost">{month().label}</Button>
                                </DatePicker.TableCellTrigger>
                              </DatePicker.TableCell>
                            )}
                          </Index>
                        </DatePicker.TableRow>
                      )}
                    </Index>
                  </DatePicker.TableBody>
                </DatePicker.Table>
              </>
            )}
          </DatePicker.View>
          <DatePicker.View view="year">
            {(api) => (
              <>
                <DatePicker.ViewControl>
                  <DatePicker.PrevTrigger asChild>
                    <IconButton variant="ghost" size="sm">
                      <ChevronLeftIcon />
                    </IconButton>
                  </DatePicker.PrevTrigger>
                  <DatePicker.ViewTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <DatePicker.RangeText />
                    </Button>
                  </DatePicker.ViewTrigger>
                  <DatePicker.NextTrigger asChild>
                    <IconButton variant="ghost" size="sm">
                      <ChevronRightIcon />
                    </IconButton>
                  </DatePicker.NextTrigger>
                </DatePicker.ViewControl>
                <DatePicker.Table>
                  <DatePicker.TableBody>
                    <Index each={api().getYearsGrid({ columns: 4 })}>
                      {(years) => (
                        <DatePicker.TableRow>
                          <Index each={years()}>
                            {(year) => (
                              <DatePicker.TableCell value={year().value}>
                                <DatePicker.TableCellTrigger asChild>
                                  <Button variant="ghost">{year().label}</Button>
                                </DatePicker.TableCellTrigger>
                              </DatePicker.TableCell>
                            )}
                          </Index>
                        </DatePicker.TableRow>
                      )}
                    </Index>
                  </DatePicker.TableBody>
                </DatePicker.Table>
              </>
            )}
          </DatePicker.View>
        </DatePicker.Content>
      </DatePicker.Positioner>
    </DatePicker.Root>
  )
}
