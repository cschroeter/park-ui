import { SiGithub } from '@icons-pack/react-simple-icons'
import { Icon, IconButton } from '@/components/ui'

export const GithubButton = () => (
  <IconButton variant="ghost" h="14" minW="14" asChild>
    <a href="https://github.com/cschroeter/park-ui" target="_blank" rel="noopener noreferrer">
      <Icon>
        <SiGithub />
      </Icon>
    </a>
  </IconButton>
)
