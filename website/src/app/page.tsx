import { Avatar } from '@park-ui/react'
import { Box } from '@park-ui/styled-system/jsx'

export default function Page() {
  return (
    <Box mt="24">
      <Avatar.Root>
        <Avatar.Fallback>PA</Avatar.Fallback>
        <Avatar.Image src="https://i.pravatar.cc/300" alt="avatar" />
      </Avatar.Root>
    </Box>
  )
}
