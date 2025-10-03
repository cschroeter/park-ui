'use client'

import { Portal } from '@ark-ui/react'
import { createListCollection } from '@ark-ui/react/collection'
import { Box, Divider, Stack } from 'styled-system/jsx'
import { Card, Clipboard, IconButton, Input, InputGroup, Select, Text } from '@/components/ui'
import { Avatar } from '~/components/ui/avatar'

export const CardSharing = () => {
  return (
    <Card.Root variant="elevated">
      <Card.Header>
        <Card.Title>Share Document</Card.Title>
        <Card.Description>
          Share this document with your team members and collaborate in real-time.
        </Card.Description>
      </Card.Header>
      <Card.Body gap="4">
        <Clipboard.Root value="https://park-ui.com">
          <Clipboard.Label textStyle="label">Document Link</Clipboard.Label>
          <InputGroup
            endElement={
              <Clipboard.Trigger asChild>
                <IconButton variant="surface" size="xs" me="-2">
                  <Clipboard.Indicator />
                </IconButton>
              </Clipboard.Trigger>
            }
          >
            <Clipboard.Input asChild>
              <Input />
            </Clipboard.Input>
          </InputGroup>
        </Clipboard.Root>
        <Divider />
        <Text textStyle="sm" fontWeight="medium">
          Members with access
        </Text>
        {members.map((member) => (
          <Member key={member.name} {...member} />
        ))}
      </Card.Body>
    </Card.Root>
  )
}

type Props = {
  name: string
  avatar: string
  email: string
}

const collection = createListCollection({ items: ['Write', 'Read'] })

const Member = (props: Props) => {
  const { name, avatar, email } = props

  return (
    <Stack direction="row" gap="8" justify="space-between" align="center">
      <Stack direction="row" gap="3">
        <Avatar src={avatar} name={name} />
        <Box>
          <Text textStyle="sm" fontWeight="medium">
            {name}
          </Text>
          <Text textStyle="sm" color="text.muted">
            {email}
          </Text>
        </Box>
      </Stack>
      <Select.Root collection={collection} defaultValue={['Read']} size="sm" maxW="20">
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText />
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Trigger>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {collection.items.map((framework) => (
                <Select.Item key={framework} item={framework}>
                  <Select.ItemText>{framework}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    </Stack>
  )
}

const members = [
  {
    name: 'Christian Schröter',
    avatar: 'https://avatars.githubusercontent.com/u/1846056?v=4',
    email: 'chris@park-ui.com',
  },
  {
    name: 'Segun Adebayo',
    avatar: 'https://avatars.githubusercontent.com/u/6916170?v=4',
    email: 'segun@park-ui.com',
  },
  {
    name: 'Philipp Körner',
    avatar: 'https://avatars.githubusercontent.com/u/153984143?v=4',
    email: 'phil@park-ui.com',
  },
]
