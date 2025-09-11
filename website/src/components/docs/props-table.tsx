import { MinusIcon } from 'lucide-react'
import { Stack } from 'styled-system/jsx'
import { Code, Icon, Span, Table, Text } from '@/components/ui'
import { getComponentProps } from '~/app/docs/actions'
import { getServerContext } from '~/server-context'

interface Props {
  part?: string
  component?: string
}

export const PropsTable = async (props: Props) => {
  const { part, component = getServerContext().component } = props

  const properties = await getComponentProps({ component, part })
  if (!properties) return null

  return (
    <Table.Root
      size="sm"
      variant="outline"
      className="not-prose"
      colorPalette="neutral"
      my="8"
      borderRadius="l3"
    >
      <Table.Head>
        <Table.Row>
          <Table.Header>Prop</Table.Header>
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
            <Table.Cell width="36" verticalAlign="top">
              <Code size="sm" fontWeight="bold" color="fg.default">
                {name}
              </Code>
              {property.isRequired && (
                <Span color="fg.error" ms="1">
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
  )
}

const stringify = (value: unknown) => {
  if (value === 'true') return `true`
  if (value === 'false') return `false`
  return JSON.stringify(value)
}
