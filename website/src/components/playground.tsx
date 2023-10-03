import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'
import { useState, type PropsWithChildren } from 'react'
import { cx, sva } from 'styled-system/css'
import { Box, Flex, Stack } from 'styled-system/jsx'
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

const styles = sva({
  slots: ['root', 'preview', 'container', 'configurator'],
  base: {
    root: {
      borderWidth: '1px',
      borderRadius: 'l3',
      overflow: 'hidden',
      divideY: '1px',
    },
    container: {
      flexDirection: { base: 'column', md: 'row' },
      divideX: '1px',
    },
    preview: {
      p: { base: '4', md: '6' },
      minH: '32',
      flex: '1',
      justifyContent: 'center',
      alignItems: 'center',
    },
    configurator: {
      gap: '3',
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
    <Box className={cx(styles.root, 'not-prose')}>
      <Stack className={styles.container}>
        <Flex className={styles.preview}>
          <Component {...state} />
        </Flex>
        {hasSettings && (
          <Stack className={styles.configurator}>
            {Object.entries(componentProps || {}).map(([key, { options, defaultValue }]) => (
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
            ))}
          </Stack>
        )}
      </Stack>
      <Box>{props.children}</Box>
    </Box>
  )
}
