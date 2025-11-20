import type { Doc } from '.velite'
import { SiChakraui, SiGithub } from '@icons-pack/react-simple-icons'
import { Match } from 'effect'
import { HStack } from 'styled-system/jsx'
import { Button, Icon } from '@/components/ui'

interface Props {
  links?: Doc['links']
}

export const PageHeaderLinks = (props: Props) => {
  const { links } = props
  if (!links) return null

  const renderLink = ([key, url]: [string, string]) => {
    const content = Match.value(key).pipe(
      Match.when('source', () => ({
        icon: <SiGithub />,
        label: 'Source',
      })),
      Match.when('recipe', () => ({
        icon: <SiGithub />,
        label: 'Recipe',
      })),
      Match.when('ark', () => ({
        icon: <SiChakraui />,
        label: 'Ark UI',
      })),
      Match.orElse(() => null),
    )

    if (!content) return null

    return (
      <Button
        key={key}
        colorPalette="gray"
        variant="subtle"
        fontWeight="medium"
        size="xs"
        textStyle="sm"
        asChild
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Icon size="sm">{content.icon}</Icon>
          {content.label}
        </a>
      </Button>
    )
  }

  return <HStack gap="4">{Object.entries(links).map(renderLink)}</HStack>
}
