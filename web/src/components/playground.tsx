import { Portal } from '@ark-ui/react'
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'
import { useState } from 'react'
import { sva } from 'styled-system/css'
import { Box, Flex, Stack } from 'styled-system/jsx'
import { match } from 'ts-pattern'
import { AccordionDemo, ButtonDemo } from './demos'
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
      borderTopRadius: 'l3',
      divideY: '1px',
      overflow: 'hidden',
    },
    container: {
      flexDirection: { base: 'column', md: 'row' },
      divideX: '1px',
    },
    preview: {
      px: '6',
      py: '6',
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

export const Playground = (props: Props) => {
  const { componentProps, id } = props
  const [state, setState] = useState(
    Object.fromEntries(
      Object.entries(componentProps ?? {}).map(([key, value]) => [
        key,
        typeof value === 'object' ? value.defaultValue : value,
      ]),
    ),
  )

  const hasSettings = Object.keys(componentProps ?? {}).length > 0
  const Component = match(id)
    .with('accordion', () => AccordionDemo)
    .with('button', () => ButtonDemo)
    .run()

  return (
    <Box className={styles.root}>
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
                <Portal>
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
                </Portal>
              </Select>
            ))}
          </Stack>
        )}
      </Stack>
    </Box>
  )
}
