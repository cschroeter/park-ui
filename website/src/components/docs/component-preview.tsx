'use client'
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useMemo, useState } from 'react'
import { Box, Flex, Stack, styled } from 'styled-system/jsx'
import { Select, createListCollection } from '~/components/ui/select'
import { Slider } from '~/components/ui/slider'
import type { Controls } from '.velite'

interface Props {
  controls: Controls
}

export const ComponentPreview = ({ controls }: Props) => {
  const { component, props } = controls
  const [state, setState] = useState(
    Object.fromEntries(
      Object.entries(props).map(([key, value]) => [
        key,
        typeof value === 'object' ? value.defaultValue : value,
      ]),
    ),
  )

  const hasSettings = Object.keys(props).length > 0

  const Demo = useMemo(() => getComponent(component), [component])

  return (
    <Flex
      minH="44"
      bg={{ base: 'white', _dark: 'gray.1' }}
      width="full"
      overflow="hidden"
      className="not-prose"
    >
      <Flex justify="center" align="center" flex="1" p={{ base: '4', md: '6' }}>
        <Demo {...state} />
      </Flex>
      {hasSettings && (
        <Box minW="52" borderLeftWidth="1px">
          <Stack px="4" py="5" gap="4">
            {Object.entries(props).map(([key, { options, defaultValue }]) =>
              key === 'size' ? (
                <Slider
                  key={key}
                  size="sm"
                  min={0}
                  max={(options?.length ?? 0) - 1}
                  onValueChange={(e) => setState({ ...state, [key]: options?.[e.value[0]] ?? '' })}
                  defaultValue={[options?.indexOf(defaultValue ?? '') ?? 0]}
                  marks={options?.map((_, index) => ({ value: index })) ?? []}
                >
                  <styled.span textTransform="capitalize">{key}:</styled.span> {state[key]}
                </Slider>
              ) : (
                key === 'variant' && (
                  <Select.Root
                    key={key}
                    defaultValue={[defaultValue ?? '']}
                    collection={createListCollection({ items: options ?? [] })}
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
                )
              ),
            )}
          </Stack>
        </Box>
      )}
    </Flex>
  )
}

const getComponent = (component: string) =>
  dynamic(() => import(`~/demos/${component}.demo`).then((mod) => mod.Demo), { ssr: false })
