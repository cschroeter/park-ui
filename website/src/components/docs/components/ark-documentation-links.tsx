import NextLink from 'next/link'
import { AiFillApi } from 'react-icons/ai'
import { HStack } from 'styled-system/jsx'
import { slugify } from '~/lib/slugify'
import { ArkIcon } from '../../icons/ark'
import { Badge } from '../../ui/badge'

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
        <Badge borderRadius="xs">
          <ArkIcon width="4" height="4" /> Ark UI
        </Badge>
      </NextLink>
      <NextLink
        href={`https://ark-ui.com/docs/react/components/${slug}/props`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Badge borderRadius="sm">
          <AiFillApi /> API Reference
        </Badge>
      </NextLink>
    </HStack>
  )
}
