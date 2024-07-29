import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-solid'
import { For } from 'solid-js'
import { Button } from '~/components/ui/button'
import { DatePicker } from '~/components/ui/date-picker'
import { IconButton } from '~/components/ui/icon-button'
import { Input } from '~/components/ui/input'

export const Demo = (props: DatePicker.RootProps) => {
  return (
    <DatePicker.Root
      positioning={{ sameWidth: true }}
      startOfWeek={1}
      selectionMode="range"
      {...props}
    >
      <DatePicker.Label>Date Picker</DatePicker.Label>
      <DatePicker.Control>
        <DatePicker.Input index={0} asChild={(inputProps) => <Input {...inputProps()} />} />
        <DatePicker.Input index={1} asChild={(inputProps) => <Input {...inputProps()} />} />
        <DatePicker.Trigger
          asChild={(triggerProps) => (
            <IconButton variant="outline" aria-label="Open date picker" {...triggerProps()}>
              <CalendarIcon />
            </IconButton>
          )}
        />
      </DatePicker.Control>
      <DatePicker.Positioner>
        <DatePicker.Content>
          <DatePicker.View view="day">
            <DatePicker.Context>
              {(api) => (
                <>
                  <DatePicker.ViewControl>
                    <DatePicker.PrevTrigger
                      asChild={(triggerProps) => (
                        <IconButton variant="ghost" size="sm" {...triggerProps()}>
                          <ChevronLeftIcon />
                        </IconButton>
                      )}
                    />
                    <DatePicker.ViewTrigger
                      asChild={(triggerProps) => (
                        <Button variant="ghost" size="sm" {...triggerProps()}>
                          <DatePicker.RangeText />
                        </Button>
                      )}
                    />
                    <DatePicker.NextTrigger
                      asChild={(triggerProps) => (
                        <IconButton variant="ghost" size="sm" {...triggerProps()}>
                          <ChevronRightIcon />
                        </IconButton>
                      )}
                    />
                  </DatePicker.ViewControl>
                  <DatePicker.Table>
                    <DatePicker.TableHead>
                      <DatePicker.TableRow>
                        <For each={api().weekDays}>
                          {(weekDay) => (
                            <DatePicker.TableHeader>{weekDay.narrow}</DatePicker.TableHeader>
                          )}
                        </For>
                      </DatePicker.TableRow>
                    </DatePicker.TableHead>
                    <DatePicker.TableBody>
                      <For each={api().weeks}>
                        {(week) => (
                          <DatePicker.TableRow>
                            <For each={week}>
                              {(day) => (
                                <DatePicker.TableCell value={day}>
                                  <DatePicker.TableCellTrigger
                                    asChild={(cellProps) => (
                                      <IconButton variant="ghost" {...cellProps()}>
                                        {day.day}
                                      </IconButton>
                                    )}
                                  />
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
              {(api) => (
                <>
                  <DatePicker.ViewControl>
                    <DatePicker.PrevTrigger
                      asChild={(triggerProps) => (
                        <IconButton variant="ghost" size="sm" {...triggerProps()}>
                          <ChevronLeftIcon />
                        </IconButton>
                      )}
                    />
                    <DatePicker.ViewTrigger
                      asChild={(triggerProps) => (
                        <Button variant="ghost" size="sm" {...triggerProps()}>
                          <DatePicker.RangeText />
                        </Button>
                      )}
                    />
                    <DatePicker.NextTrigger
                      asChild={(triggerProps) => (
                        <IconButton variant="ghost" size="sm" {...triggerProps()}>
                          <ChevronRightIcon />
                        </IconButton>
                      )}
                    />
                  </DatePicker.ViewControl>
                  <DatePicker.Table>
                    <DatePicker.TableBody>
                      <For each={api().getMonthsGrid({ columns: 4, format: 'short' })}>
                        {(months) => (
                          <DatePicker.TableRow>
                            <For each={months}>
                              {(month) => (
                                <DatePicker.TableCell value={month.value}>
                                  <DatePicker.TableCellTrigger
                                    asChild={(cellProps) => (
                                      <Button variant="ghost" {...cellProps()}>
                                        {month.label}
                                      </Button>
                                    )}
                                  />
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
              {(api) => (
                <>
                  <DatePicker.ViewControl>
                    <DatePicker.PrevTrigger
                      asChild={(triggerProps) => (
                        <IconButton variant="ghost" size="sm" {...triggerProps()}>
                          <ChevronLeftIcon />
                        </IconButton>
                      )}
                    />
                    <DatePicker.ViewTrigger
                      asChild={(triggerProps) => (
                        <Button variant="ghost" size="sm" {...triggerProps()}>
                          <DatePicker.RangeText />
                        </Button>
                      )}
                    />
                    <DatePicker.NextTrigger
                      asChild={(triggerProps) => (
                        <IconButton variant="ghost" size="sm" {...triggerProps()}>
                          <ChevronRightIcon />
                        </IconButton>
                      )}
                    />
                  </DatePicker.ViewControl>
                  <DatePicker.Table>
                    <DatePicker.TableBody>
                      <For each={api().getYearsGrid({ columns: 4 })}>
                        {(years) => (
                          <DatePicker.TableRow>
                            <For each={years}>
                              {(year) => (
                                <DatePicker.TableCell value={year.value}>
                                  <DatePicker.TableCellTrigger
                                    asChild={(cellProps) => (
                                      <Button variant="ghost" {...cellProps()}>
                                        {year.label}
                                      </Button>
                                    )}
                                  />
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
    </DatePicker.Root>
  )
}
