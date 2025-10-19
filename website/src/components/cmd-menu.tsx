'use client'
import { createListCollection } from '@ark-ui/react/collection'
import { useEnvironmentContext } from '@ark-ui/react/environment'
import { Portal } from '@ark-ui/react/portal'
import {
  ArrowRightIcon,
  CircleDashedIcon,
  CommandIcon,
  CornerDownLeftIcon,
  SearchIcon,
} from 'lucide-react'
import { matchSorter } from 'match-sorter'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Button, Combobox, Dialog, Icon, Kbd, Span, Text } from '@/components/ui'
import { data } from '~/lib/search'

export const CommandMenu = () => {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const { matchEntries, filteredItems } = useFilteredItems(data, inputValue)
  const router = useRouter()
  useHotkey(setOpen)

  const collection = useMemo(() => {
    return createListCollection({ items: filteredItems })
  }, [filteredItems])

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(event) => setOpen(event.open)}
      motionPreset="slide-in-bottom"
      scrollBehavior="inside"
      size="md"
    >
      <Dialog.Trigger asChild>
        <Button variant="subtle" colorPalette="gray" size="sm" minW="64" hideBelow="md">
          <Icon color="fg.muted" size="sm">
            <SearchIcon />
          </Icon>
          <Span
            fontWeight="normal"
            flex="1"
            minW="0"
            textAlign="start"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Search...
          </Span>
          <Kbd variant="surface" size="sm" gap="0.5">
            <Icon boxSize="3">
              <CommandIcon />
            </Icon>
            K
          </Kbd>
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content gap="0" py="0" pt="2">
            <Dialog.Body px="2">
              <Combobox.Root
                variant="subtle"
                size="sm"
                open
                disableLayer
                inputBehavior="autohighlight"
                placeholder="Search the docs"
                selectionBehavior="clear"
                loopFocus={false}
                collection={collection}
                onValueChange={(e) => {
                  setOpen(false)
                  router.push(`${e.value}`)
                }}
                onInputValueChange={({ inputValue }) => setInputValue(inputValue)}
              >
                <Combobox.Content boxShadow="none" p="0.5" animationDuration="unset">
                  <Combobox.Control position="sticky" top="0" zIndex="sticky" bg="gray.surface.bg">
                    <Combobox.Input />
                  </Combobox.Control>
                  <Combobox.List h="96" overflow="auto">
                    <Combobox.Empty>No results found.</Combobox.Empty>
                    {matchEntries.map(([key, items]) => (
                      <Combobox.ItemGroup key={key}>
                        <Combobox.ItemGroupLabel
                          color="fg.muted"
                          fontWeight="medium"
                          px="2.5"
                          pb="1"
                          pt="3"
                        >
                          {key}
                        </Combobox.ItemGroupLabel>
                        {items.map((item) => (
                          <Combobox.Item
                            key={item.value}
                            item={item}
                            persistFocus
                            justifyContent="start"
                            gap="2"
                            px="2.5"
                          >
                            <Icon color="fg.muted" size="xs">
                              {item.category === 'Components' ? (
                                <CircleDashedIcon />
                              ) : (
                                <ArrowRightIcon />
                              )}
                            </Icon>
                            <Combobox.ItemText>{item.label}</Combobox.ItemText>
                          </Combobox.Item>
                        ))}
                      </Combobox.ItemGroup>
                    ))}
                  </Combobox.List>
                </Combobox.Content>
              </Combobox.Root>
            </Dialog.Body>
            <Dialog.Footer
              px="4"
              py="2.5"
              bg="gray.2"
              borderTopWidth="1px"
              borderBottomRadius="l3"
              gap="2"
              justifyContent="flex-start"
            >
              <Kbd variant="surface" colorPalette="gray">
                <Icon size="2xs">
                  <CornerDownLeftIcon />
                </Icon>
              </Kbd>
              <Text color="fg.muted">Go to Page</Text>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

interface Item {
  label: string
  value: string
  category: string
  description: string
}

const useFilteredItems = (data: Record<string, Item[]>, inputValue: string) => {
  const items = useMemo(() => Object.values(data).flat(), [data])

  const filter = useCallback(
    (value: string): Record<string, Item[]> => {
      if (!value) {
        return items.reduce(
          (acc, item) => {
            if (!acc[item.category]) acc[item.category] = []
            acc[item.category].push(item)
            return acc
          },
          {} as Record<string, Item[]>,
        )
      }

      const results = matchSorter(items, value, {
        keys: ['label', 'description'],
      })

      return results.reduce(
        (acc, item) => {
          if (!acc[item.category]) acc[item.category] = []
          acc[item.category].push(item)
          return acc
        },
        {} as Record<string, Item[]>,
      )
    },
    [items],
  )
  const matches = useMemo(() => filter(inputValue), [inputValue, filter])
  const matchEntries = useMemo(() => Object.entries(matches), [matches])
  const filteredItems = useMemo(() => Object.values(matches).flat(), [matches])

  return { matchEntries, filteredItems }
}

const useHotkey = (setOpen: (open: boolean) => void) => {
  const env = useEnvironmentContext()

  useEffect(() => {
    const document = env.getDocument()
    const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator?.platform)
    const hotkey = isMac ? 'metaKey' : 'ctrlKey'

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key?.toLowerCase() === 'k' && event[hotkey]) {
        event.preventDefault()
        setOpen(true)
      }
    }

    document.addEventListener('keydown', handleKeydown, true)
    return () => {
      document.removeEventListener('keydown', handleKeydown, true)
    }
  }, [env, setOpen])
}
