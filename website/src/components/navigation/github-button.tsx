import { SiGithub } from '@icons-pack/react-simple-icons'
import { type ButtonProps, Icon, IconButton } from '@/components/ui'

export const GithubButton = (props: ButtonProps) => (
  <IconButton variant="ghost" h="14" minW="14" borderRadius="0" asChild {...props}>
    <a href="https://github.com/cschroeter/park-ui" target="_blank" rel="noopener noreferrer">
      <Icon>
        <SiGithub />
      </Icon>
    </a>
  </IconButton>
)
