import { Avatar } from '@/components/ui'

export default function Example() {
  return (
    <Avatar.Root>
      <Avatar.Fallback>PA</Avatar.Fallback>
      <Avatar.Image src="https://i.pravatar.cc/300" alt="avatar" />
    </Avatar.Root>
  )
}
