'use client'

import { CheckIcon, ChevronsUpDownIcon, CopyIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Box, Divider, Stack } from 'styled-system/jsx'
import { useCopyToClipboard } from 'usehooks-ts'
import { Avatar } from '~/components/ui/avatar'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Select, createListCollection } from '~/components/ui/select'
import { Text } from '~/components/ui/text'

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

export const ShareDocumentCard = () => {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Share Document</Card.Title>
        <Card.Description>
          Share this document with your team members and collaborate in real-time.
        </Card.Description>
      </Card.Header>
      <Card.Body gap="4">
        <Stack gap="3" direction="row">
          <Input
            defaultValue="https://www.buymeacoffee.com/grizzlycodes"
            readOnly
            placeholder="Link to document"
          />
          <CopyButton url="https://www.buymeacoffee.com/grizzlycodes" />
        </Stack>
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

const Member = (props: Props) => {
  const { name, avatar, email } = props
  const collection = createListCollection({ items: ['Write', 'Read'] })
  return (
    <Stack direction="row" gap="8" justify="space-between" align="center">
      <Stack direction="row" gap="3">
        <Avatar src={avatar} name={name} />
        <Box>
          <Text textStyle="sm" fontWeight="medium">
            {name}
          </Text>
          <Text textStyle="sm" color="fg.muted">
            {email}
          </Text>
        </Box>
      </Stack>
      <Box>
        <Select.Root
          collection={collection}
          defaultValue={['Read']}
          positioning={{ sameWidth: true }}
          size="sm"
        >
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText />
              <ChevronsUpDownIcon />
            </Select.Trigger>
          </Select.Control>
          <Select.Positioner>
            <Select.Content>
              {collection.items.map((framework) => (
                <Select.Item key={framework} item={framework}>
                  <Select.ItemText>{framework}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Select.Root>
      </Box>
    </Stack>
  )
}

type CopyButtonProps = {
  url: string
}

const CopyButton = (props: CopyButtonProps) => {
  const { url } = props
  const [_, copy] = useCopyToClipboard()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (visible) return
    const timer = setTimeout(() => setVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [visible])

  const handleClick = () => {
    copy(url)
    setVisible(false)
  }

  return (
    <Button variant="outline" aria-label="Copy code to clipboard" onClick={handleClick} px="0">
      {visible ? <CopyIcon /> : <CheckIcon />}
    </Button>
  )
}
