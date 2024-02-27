import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'
import { type PropsWithChildren, useState } from 'react'
import { sva } from 'styled-system/css'
import { Box, Flex, Stack, styled } from 'styled-system/jsx'
import { match } from 'ts-pattern'
import { Select } from '~/components/ui'
import { Slider } from '~/components/ui/slider'
import * as demos from './demos'

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
      minH: '40',
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
                  <Slider
                    key={key}
                    min={0}
                    max={(options?.length ?? 0) - 1}
                    onValueChange={(e) =>
                      setState({ ...state, [key]: options?.[e.value[0]] ?? '' })
                    }
                    defaultValue={[options?.indexOf(defaultValue ?? '') ?? 0]}
                    marks={options?.map((_, index) => ({ value: index })) ?? []}
                  >
                    <styled.span textTransform="capitalize">{key}:</styled.span> {state[key]}
                  </Slider>
                ))
                .otherwise(() => (
                  <Select.Root
                    key={key}
                    defaultValue={[defaultValue ?? '']}
                    items={options ?? []}
                    positioning={{ sameWidth: true }}
                    closeOnSelect={false}
                    size="sm"
                    onValueChange={(e) => setState({ ...state, [key]: e.value[0] ?? '' })}
                  >
                    <Select.Label textTransform="capitalize">{key}</Select.Label>
                    <Select.Control>
                      <Select.Trigger>
                        <Select.ValueText />
                        <ChevronsUpDownIcon />
                      </Select.Trigger>
                    </Select.Control>
                    <Select.Positioner>
                      <Select.Content>
                        {(options ?? []).map((option) => (
                          <Select.Item key={option} item={option}>
                            <Select.ItemText>{option}</Select.ItemText>
                            <Select.ItemIndicator>
                              <CheckIcon />
                            </Select.ItemIndicator>
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select.Positioner>
                  </Select.Root>
                )),
            )}
          </Stack>
        )}
      </Stack>
      <Box>{props.children}</Box>
    </Box>
  )
}
