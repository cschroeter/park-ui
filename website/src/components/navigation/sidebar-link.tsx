import { BookIcon } from 'lucide-react'
import { HStack } from 'styled-system/jsx'

interface Props {
  children: React.ReactNode
}

export const SidebarLink = (props: Props) => {
  const { children } = props
  return (
    <HStack gap="3" textStyle="sm" lineHeight="28px" fontWeight="medium" color="fg.default">
      <BookIcon size="16" strokeWidth="1.5" />
      <span>{children}</span>
    </HStack>
  )
}
