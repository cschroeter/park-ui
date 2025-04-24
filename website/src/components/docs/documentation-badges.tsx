import { ExternalLinkIcon } from 'lucide-react'
import { HStack } from 'styled-system/jsx'
import { Badge } from '~/components/ui/badge'

interface Props {
  href?: string | undefined
}

export const DocumentationBadges = (props: Props) => {
  const { href } = props
  const docs = `https://ark-ui.com/docs/${href}`

  return href ? (
    <HStack gap="2">
      <LinkBadge href={docs}>Docs</LinkBadge>
      <LinkBadge href={`${docs}#api-reference`}>API Reference</LinkBadge>
    </HStack>
  ) : null
}

interface LinkBadgeProps {
  href: string
  children: React.ReactNode
}

const LinkBadge = (props: LinkBadgeProps) => {
  const { children, href } = props
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ display: 'inline-flex', textDecoration: 'none' }}
    >
      <Badge
        variant="subtle"
        borderRadius="l1"
        css={{
          '& > svg': {
            width: '3.5',
            height: '3.5',
          },
        }}
      >
        {children} <ExternalLinkIcon />
      </Badge>
    </a>
  )
}
