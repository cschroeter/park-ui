import { CableIcon } from 'lucide-react'
import NextLink from 'next/link'
import { HStack } from 'styled-system/jsx'
import { Badge } from '~/components/ui/badge'
import { Icon } from '~/components/ui/icon'
import { slugify } from '~/lib/slugify'
import { ArkIcon } from '../../icons/ark'

type Props = {
  name: string
}

export const ArkDocumentationLinks = (props: Props) => {
  const { name } = props
  const slug = slugify(name)
  return (
    <HStack gap="2" lineHeight="1">
      <NextLink
        href={`https://ark-ui.com/docs/react/components/${slug}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Badge borderRadius="l1">
          <ArkIcon width="4" height="4" /> Ark UI
        </Badge>
      </NextLink>
      <NextLink
        href={`https://ark-ui.com/docs/react/components/${slug}/props`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Badge borderRadius="l2">
          <Icon size="xs">
            <CableIcon />
          </Icon>
          API Reference
        </Badge>
      </NextLink>
    </HStack>
  )
}
