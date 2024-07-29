import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-solid'
import { Index } from 'solid-js'
import type { Meta } from 'storybook-solidjs'
import { Button } from '~/components/ui/button'
import { DatePicker } from '~/components/ui/date-picker'
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
        <DatePicker.Input asChild={(props) => <Input {...props()} />} />
        <DatePicker.Trigger asChild={(props) => <Button {...props()} variant="outline" />}>
          <CalendarIcon />
        </DatePicker.Trigger>
      </DatePicker.Control>
      <DatePicker.Positioner>
        <DatePicker.Content>
          <DatePicker.View view="day">
            <DatePicker.Context>
              {(api) => (
                <>
                  <DatePicker.ViewControl>
                    <DatePicker.PrevTrigger
                      asChild={(props) => <IconButton {...props()} variant="ghost" size="sm" />}
                    >
                      <ChevronLeftIcon />
                    </DatePicker.PrevTrigger>
                    <DatePicker.ViewTrigger
                      asChild={(props) => <Button {...props()} variant="ghost" size="sm" />}
                    >
                      <DatePicker.RangeText />
                    </DatePicker.ViewTrigger>
                    <DatePicker.NextTrigger
                      asChild={(props) => <IconButton {...props()} variant="ghost" size="sm" />}
                    >
                      <ChevronRightIcon />
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
                                  <DatePicker.TableCellTrigger
                                    asChild={(props) => (
                                      <IconButton {...props()} variant="ghost" size="sm" />
                                    )}
                                  >
                                    {day().day}
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
            </DatePicker.Context>
          </DatePicker.View>
          <DatePicker.View view="month">
            <DatePicker.Context>
              {(api) => (
                <>
                  <DatePicker.ViewControl>
                    <DatePicker.PrevTrigger
                      asChild={(props) => <IconButton {...props()} variant="ghost" size="sm" />}
                    >
                      <ChevronLeftIcon />
                    </DatePicker.PrevTrigger>
                    <DatePicker.ViewTrigger
                      asChild={(props) => <Button {...props()} variant="ghost" size="sm" />}
                    >
                      <DatePicker.RangeText />
                    </DatePicker.ViewTrigger>
                    <DatePicker.NextTrigger
                      asChild={(props) => <IconButton {...props()} variant="ghost" size="sm" />}
                    >
                      <ChevronRightIcon />
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
                                  <DatePicker.TableCellTrigger
                                    asChild={(props) => <Button {...props()} variant="ghost" />}
                                  >
                                    {month().label}
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
            </DatePicker.Context>
          </DatePicker.View>
          <DatePicker.View view="year">
            <DatePicker.Context>
              {(api) => (
                <>
                  <DatePicker.ViewControl>
                    <DatePicker.PrevTrigger
                      asChild={(props) => <IconButton {...props()} variant="ghost" size="sm" />}
                    >
                      <IconButton>
                        <ChevronLeftIcon />
                      </IconButton>
                    </DatePicker.PrevTrigger>
                    <DatePicker.ViewTrigger
                      asChild={(props) => <Button {...props()} variant="ghost" size="sm" />}
                    >
                      <DatePicker.RangeText />
                    </DatePicker.ViewTrigger>
                    <DatePicker.NextTrigger
                      asChild={(props) => <IconButton {...props()} variant="ghost" size="sm" />}
                    >
                      <ChevronRightIcon />
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
                                  <DatePicker.TableCellTrigger
                                    asChild={(props) => <Button {...props()} variant="ghost" />}
                                  >
                                    {year().label}
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
            </DatePicker.Context>
          </DatePicker.View>
        </DatePicker.Content>
      </DatePicker.Positioner>
    </DatePicker.Root>
  )
}
