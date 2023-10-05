import { Avatar, AvatarFallback, AvatarImage, type AvatarProps } from '~/components/ui/avatar'

export const Demo = (props: AvatarProps) => {
  return (
    <Avatar {...props}>
      <AvatarFallback>PA</AvatarFallback>
      <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
    </Avatar>
  )
}
