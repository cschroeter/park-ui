import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'
import { useState, type PropsWithChildren } from 'react'
import { sva } from 'styled-system/css'
import { Box, Flex, Stack, styled } from 'styled-system/jsx'
import { match } from 'ts-pattern'
import * as demos from './demos'
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
} from './ui/select'
import { Slider } from './ui/slider'

const styles = sva({
  slots: ['root', 'preview', 'container', 'configurator'],
  base: {
    root: {},
    container: {
      background: 'bg.canvas',
      flexDirection: { base: 'column', md: 'row' },
      divideX: '1px',
      borderBottomWidth: '1px',
    },
    preview: {
      p: { base: '4', md: '6' },
      minH: '32',
      flex: '1',
      justifyContent: 'center',
      alignItems: 'center',
    },
    configurator: {
      background: 'bg.surface',
      gap: '4',
      px: '4',
      pt: '5',
      pb: '6',
      minW: '240px',
    },
  },
})()

type Props = {
  id?: string
  code?: JSX.Element
  componentProps?: Record<
    string,
    {
      options?: string[] | undefined
      defaultValue?: string | undefined
    }
  >
}

const toTitleCase = (str = '') => {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

export const Playground = (props: PropsWithChildren<Props>) => {
  const { componentProps = {}, id } = props
  const [state, setState] = useState(
    Object.fromEntries(
      Object.entries(componentProps).map(([key, value]) => [
        key,
        typeof value === 'object' ? value.defaultValue : value,
      ]),
    ),
  )

  const hasSettings = Object.keys(componentProps).length > 0
  // @ts-expect-error
  const Component = demos[toTitleCase(id)]
  return (
    <Box>
      <Stack className={styles.container}>
        <Flex className={styles.preview}>
          <Component {...state} />
        </Flex>
        {hasSettings && (
          <Stack className={styles.configurator}>
            {Object.entries(componentProps || {}).map(([key, { options, defaultValue }]) =>
              match(key)
                .with('size', () => (
                  <Slider.Root
                    key={key}
                    min={0}
                    max={(options?.length ?? 0) - 1}
                    onChange={(e) => setState({ ...state, [key]: options?.[e.value] ?? '' })}
                    defaultValue={options?.indexOf(defaultValue ?? '') ?? 0}
                  >
                    <Slider.Label>
                      <styled.span textTransform="capitalize">{key}:</styled.span> {state[key]}
                    </Slider.Label>
                    <Slider.Control>
                      <Slider.Track>
                        <Slider.Range />
                      </Slider.Track>
                      <Slider.Thumb />
                    </Slider.Control>
                    <Slider.MarkerGroup>
                      {options?.map((option, index) => (
                        <Slider.Marker key={option} value={index} />
                      ))}
                    </Slider.MarkerGroup>
                  </Slider.Root>
                ))
                .otherwise(() => (
                  <Select
                    key={key}
                    defaultValue={[defaultValue ?? '']}
                    items={options ?? []}
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
                    <SelectPositioner>
                      <SelectContent>
                        {(options ?? []).map((option) => (
                          <SelectItem key={option} item={option}>
                            <SelectItemText>{option}</SelectItemText>
                            <SelectItemIndicator>
                              <CheckIcon />
                            </SelectItemIndicator>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </SelectPositioner>
                  </Select>
                )),
            )}
          </Stack>
        )}
      </Stack>
      <Box>{props.children}</Box>
    </Box>
  )
}
