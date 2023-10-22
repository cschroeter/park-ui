import { Portal } from '@ark-ui/react'
import { useCopyToClipboard } from '@uidotdev/usehooks'
import { CheckIcon, ChevronsUpDownIcon, CopyIcon, UserIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Box, Divider, Stack } from 'styled-system/jsx'
import { Avatar } from '~/components/ui/avatar'
import { Card } from '~/components/ui/card'
import { IconButton } from '~/components/ui/icon-button'
import { Input } from '~/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemText,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'
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
    name: 'Tyler Pfledderer',
    avatar: 'https://avatars.githubusercontent.com/u/65234762?v=4',
    email: 'tyler@park-ui.com',
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
          <CopyButton content="https://www.buymeacoffee.com/grizzlycodes" />
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
  return (
    <Stack direction="row" gap="8" justify="space-between" align="center">
      <Stack direction="row" gap="3">
        <Avatar.Root>
          <Avatar.Fallback>
            <UserIcon />
          </Avatar.Fallback>
          <Avatar.Image src={avatar} alt={name} />
        </Avatar.Root>
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
        <Select
          items={['Write', 'Read']}
          defaultValue={['Read']}
          positioning={{ sameWidth: true }}
          size="sm"
        >
          <SelectTrigger>
            <SelectValue />
            <ChevronsUpDownIcon />
          </SelectTrigger>
          <Portal>
            <SelectPositioner>
              <SelectContent>
                {['Write', 'Read'].map((framework) => (
                  <SelectItem key={framework} item={framework}>
                    <SelectItemText>{framework}</SelectItemText>
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectPositioner>
          </Portal>
        </Select>
      </Box>
    </Stack>
  )
}

type CopyButtonProps = {
  content: string
}

const CopyButton = (props: CopyButtonProps) => {
  const { content } = props
  const [_, copy] = useCopyToClipboard()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (visible) return
    const timer = setTimeout(() => setVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [visible])

  const handleClick = () => {
    copy(content)
    setVisible(false)
  }

  return (
    <IconButton variant="outline" aria-label="Copy code to clipboard" onClick={handleClick}>
      {visible ? <CopyIcon /> : <CheckIcon />}
    </IconButton>
  )
}
