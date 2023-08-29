import { AvatarFallback, AvatarImage, Portal } from '@ark-ui/react'
import { useEffect, useState } from 'react'
import { BiExpandVertical } from 'react-icons/bi'
import { FiCheck, FiCopy, FiUser } from 'react-icons/fi'
import { Box, Divider, Stack } from 'styled-system/jsx'
import { useCopyToClipboard } from 'usehooks-ts'
import { Avatar } from '~/components/ui/avatar'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import {
  Select,
  SelectContent,
  SelectOption,
  SelectPositioner,
  SelectTrigger,
} from '~/components/ui/select'
import { Typography } from '~/components/ui/typography'

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
    <Card>
      <CardHeader>
        <CardTitle>Share Document</CardTitle>
        <CardDescription>
          Share this document with your team members and collaborate in real-time.
        </CardDescription>
      </CardHeader>
      <CardContent gap="4">
        <Stack gap="3" direction="row">
          <Input
            defaultValue="https://www.buymeacoffee.com/grizzlycodes"
            readOnly
            placeholder="Link to document"
          />
          <CopyButton content="https://www.buymeacoffee.com/grizzlycodes" />
        </Stack>
        <Divider />
        <Typography textStyle="sm" fontWeight="medium">
          Members with access
        </Typography>
        {members.map((member) => (
          <Member key={member.name} {...member} />
        ))}
      </CardContent>
    </Card>
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
        <Avatar>
          <AvatarFallback>
            <FiUser />
          </AvatarFallback>
          <AvatarImage src={avatar} alt={name} />
        </Avatar>
        <Box>
          <Typography textStyle="sm" fontWeight="medium">
            {name}
          </Typography>
          <Typography textStyle="sm" color="fg.muted">
            {email}
          </Typography>
        </Box>
      </Stack>
      <Box>
        <Select
          defaultValue={{ value: 'read', label: 'Read' }}
          positioning={{ sameWidth: true }}
          size="sm"
        >
          {({ selectedOption }) => (
            <>
              <SelectTrigger>
                {selectedOption?.label}
                <BiExpandVertical />
              </SelectTrigger>
              <Portal>
                <SelectPositioner>
                  <SelectContent>
                    <SelectOption value="write" label="Write" />
                    <SelectOption value="read" label="Read" />
                  </SelectContent>
                </SelectPositioner>
              </Portal>
            </>
          )}
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
    <Button variant="secondary" aria-label="Copy code to clipboard" onClick={handleClick} px="0">
      {visible ? <FiCopy /> : <FiCheck />}
    </Button>
  )
}
