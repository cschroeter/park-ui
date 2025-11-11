import { For } from 'solid-js'
import { Portal } from 'solid-js/web'
import { DatePicker } from '@/components/ui'

export const App = () => {
  return (
    <DatePicker.Root>
      <DatePicker.Label>Select Date</DatePicker.Label>
      <DatePicker.Control>
        <DatePicker.Input placeholder="Select a date" />
        <DatePicker.Trigger>📅</DatePicker.Trigger>
        <DatePicker.ClearTrigger>Clear</DatePicker.ClearTrigger>
      </DatePicker.Control>
      <Portal>
        <DatePicker.Positioner>
          <DatePicker.Content>
            <DatePicker.View view="day">
              <DatePicker.Context>
                {(datePicker) => (
                  <>
                    <DatePicker.ViewControl>
                      <DatePicker.PrevTrigger>‹</DatePicker.PrevTrigger>
                      <DatePicker.ViewTrigger>
                        <DatePicker.RangeText />
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger>›</DatePicker.NextTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table>
                      <DatePicker.TableHead>
                        <DatePicker.TableRow>
                          <For each={datePicker().weekDays}>
                            {(weekDay) => (
                              <DatePicker.TableHeader>{weekDay.short}</DatePicker.TableHeader>
                            )}
                          </For>
                        </DatePicker.TableRow>
                      </DatePicker.TableHead>
                      <DatePicker.TableBody>
                        <For each={datePicker().weeks}>
                          {(week) => (
                            <DatePicker.TableRow>
                              <For each={week}>
                                {(day) => (
                                  <DatePicker.TableCell value={day}>
                                    <DatePicker.TableCellTrigger>
                                      {day.day}
                                    </DatePicker.TableCellTrigger>
                                  </DatePicker.TableCell>
                                )}
                              </For>
                            </DatePicker.TableRow>
                          )}
                        </For>
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )}
              </DatePicker.Context>
            </DatePicker.View>
            <DatePicker.View view="month">
              <DatePicker.Context>
                {(datePicker) => (
                  <>
                    <DatePicker.ViewControl>
                      <DatePicker.PrevTrigger>‹</DatePicker.PrevTrigger>
                      <DatePicker.ViewTrigger>
                        <DatePicker.RangeText />
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger>›</DatePicker.NextTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table>
                      <DatePicker.TableBody>
                        <For each={datePicker().getMonthsGrid({ columns: 4, format: 'short' })}>
                          {(months) => (
                            <DatePicker.TableRow>
                              <For each={months}>
                                {(month) => (
                                  <DatePicker.TableCell value={month.value}>
                                    <DatePicker.TableCellTrigger>
                                      {month.label}
                                    </DatePicker.TableCellTrigger>
                                  </DatePicker.TableCell>
                                )}
                              </For>
                            </DatePicker.TableRow>
                          )}
                        </For>
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )}
              </DatePicker.Context>
            </DatePicker.View>
            <DatePicker.View view="year">
              <DatePicker.Context>
                {(datePicker) => (
                  <>
                    <DatePicker.ViewControl>
                      <DatePicker.PrevTrigger>‹</DatePicker.PrevTrigger>
                      <DatePicker.ViewTrigger>
                        <DatePicker.RangeText />
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger>›</DatePicker.NextTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table>
                      <DatePicker.TableBody>
                        <For each={datePicker().getYearsGrid({ columns: 4 })}>
                          {(years) => (
                            <DatePicker.TableRow>
                              <For each={years}>
                                {(year) => (
                                  <DatePicker.TableCell value={year.value}>
                                    <DatePicker.TableCellTrigger>
                                      {year.label}
                                    </DatePicker.TableCellTrigger>
                                  </DatePicker.TableCell>
                                )}
                              </For>
                            </DatePicker.TableRow>
                          )}
                        </For>
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )}
              </DatePicker.Context>
            </DatePicker.View>
          </DatePicker.Content>
        </DatePicker.Positioner>
      </Portal>
    </DatePicker.Root>
  )
}
