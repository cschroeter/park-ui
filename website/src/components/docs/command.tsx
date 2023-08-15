import { Box, HStack } from 'styled-system/jsx'
import { highlight } from '~/lib/shiki'
import { CopyCommandButton } from './copy-command-button'

type CommandProps = {
  command: string
}

export const Command = async (props: CommandProps) => {
  const { command } = props
  return (
    <Box className="dark" bg="bg.subtle" borderRadius="l3" borderWidth="1px" px="4" py="2">
      <HStack justify="space-between">
        <div
          dangerouslySetInnerHTML={{ __html: await highlight({ code: command, lang: 'zsh' }) }}
        />
        <CopyCommandButton content={command} />
      </HStack>
    </Box>
  )
}
