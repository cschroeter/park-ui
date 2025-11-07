import { MinusIcon } from 'lucide-react'
import { Stack } from 'styled-system/jsx'
import { Code, Icon, Span, Table, Text } from '@/components/ui'
import { getComponentProps } from '~/app/docs/actions'
import { getServerContext } from '~/server-context'
import { ScrollArea } from '../ui/scroll-area'

interface Props {
  /**
   * Part of the component to show props for (e.g. "Root", "Item", etc.)
   * @default 'Root'
   */
  part?: string
}

export const PropsTable = async (props: Props) => {
  const { part = 'Root' } = props
  const { component } = getServerContext()

  const properties = await getComponentProps({ part, component, framework: 'react' })
  if (!properties) return null

  return (
    <ScrollArea
      className="not-prose"
      borderWidth="1px"
      borderRadius="l3"
      my="8"
      size="sm"
      scrollbars="horizontal"
    >
      <Table.Root variant="surface" colorPalette="gray">
        <Table.Head>
          <Table.Row>
            <Table.Header data-pinned="left" left="0">
              Prop
            </Table.Header>
            <Table.Header>Default</Table.Header>
            <Table.Header>Type</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {properties.length === 0 && (
            <Table.Row>
              <Table.Cell colSpan={3}>
                <Text>No props to display</Text>
              </Table.Cell>
            </Table.Row>
          )}
          {properties.map(([name, property]) => (
            <Table.Row key={name}>
              <Table.Cell width="36" verticalAlign="top" data-pinned="left" left="0">
                <Code size="sm" fontWeight="bold" color="fg.default">
                  {name}
                </Code>
                {property.isRequired && (
                  <Span color="error" ms="1">
                    *
                  </Span>
                )}
              </Table.Cell>
              <Table.Cell width="28" verticalAlign="top">
                {property.defaultValue ? (
                  <Code size="sm">{stringify(property.defaultValue).replaceAll('"', '')}</Code>
                ) : (
                  <Icon>
                    <MinusIcon />
                  </Icon>
                )}
              </Table.Cell>
              <Table.Cell>
                <Stack alignItems="start">
                  <Code size="sm">{property.type.replaceAll('"', "'")}</Code>
                  {property.description && <Text>{property.description}</Text>}
                </Stack>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </ScrollArea>
  )
}

const stringify = (value: unknown) => {
  if (value === 'true') return `true`
  if (value === 'false') return `false`
  return JSON.stringify(value)
}
