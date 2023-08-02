import Link from 'next/link'
import type { PropsWithChildren } from 'react'
import { Box, Circle, Stack } from 'styled-system/jsx'
import { link } from 'styled-system/recipes'
import { Heading, Typography } from '~/components/typography'
import { Code } from '../code'
import { Command } from '../command'
import { copyButton, pandaConfig, rootLayout, useButton } from './code-examples'
import { article } from './introduction'

export const GettingStarted = async () => {
  return (
    <Steps>
      <Step number="1" title="Setup Project">
        <Typography color="fg.muted">
          Before you start, ensure that your Panda project is set up and ready to go. If not, please
          refer to the{' '}
          <Link
            href="https://panda-css.com/docs/overview/getting-started#framework-guides"
            target="_blank"
            className={link()}
          >
            Panda CSS Getting Started Guide
          </Link>{' '}
          and once you've completed that, come back to this guide.
        </Typography>
      </Step>
      <Step number="2" title="Install Ark UI">
        <Typography color="fg.muted">
          The first step is to install{' '}
          <Link href="https:/ark-ui.com" target="_blank" className={link()}>
            Ark UI
          </Link>
          . Ark UI is a headless component library that forms the foundation for most components. To
          install Ark UI, execute the following command in your project's root directory:
        </Typography>
        <Command command="npm install @ark-ui/react" />
      </Step>
      <Step number="3" title="Install the Panda Presets">
        <Typography color="fg.muted">
          The next package you will need is <pre>@park-ui/presets</pre>. This package contains all
          the recipes and tokens explicitly built for Ark UI's headless components.
        </Typography>
        <Command command="npm install @park-ui/presets" />
        <Typography color="fg.muted">
          After you've installed the presets, you'll need to add it to your Panda configuration file
          along with your preferred <pre>jsxFramework</pre> like shown below:
        </Typography>
        <Code code={pandaConfig}></Code>
        <Typography color="fg.muted">
          Make sure to run <pre>panda codegen</pre> after you've added the presets to your Panda
          configuration file.
        </Typography>
        <Typography color="fg.muted">
          <em>Please note:</em> You also have the option to manually copy the recipes for specific
          components, which are provided alongside the code examples. This approach gives you more
          control over which components to include in your project. However, it will require a bit
          more effort on your part.
        </Typography>
      </Step>
      <Step number="4" title="Setup Your Font Family">
        <Typography color="fg.muted">
          By default, Park UI usees Plus Jakarta Sans. However, you are free to use any font family
          that aligns with your needs, as long as it is mapped to the <pre>--font-body</pre>{' '}
          variable. The example below illustrates how to add a font family to the body element
          within the Next.js framework.
        </Typography>
        <Code code={rootLayout} lang="zsh" />
      </Step>
      <Step number="5" title="Add Your First Component">
        <Typography color="fg.muted">
          To add a component, simply copy the code for the desired component and paste it into the
          appropriate place in your project. Let's demonstrate this process using the{' '}
          <pre>Button</pre> component. First, copy the code for the component:
        </Typography>
        <Code code={copyButton}></Code>
        <Typography color="fg.muted">
          and paste it into your <pre>components/button.tsx</pre> file. Now you can import and use
          the button like so:
        </Typography>
        <Code code={useButton} lang="tsx" />
        <Typography color="fg.muted">
          And that's it! You're now ready to start using Park UI in your Panda project.
        </Typography>
      </Step>
    </Steps>
  )
}
const Steps = (props: PropsWithChildren) => {
  return (
    <Stack gap="10" position="relative">
      <Box width="1px" height="full" bg="border.default" position="absolute" left="4" top="0" />
      {props.children}
    </Stack>
  )
}

type StepProps = {
  number: string
  title: string
}

const Step = (props: PropsWithChildren<StepProps>) => {
  const { number, title, children } = props
  return (
    <Box>
      <Stack direction="row" gap="4">
        <Circle
          size="8"
          bg="bg.subtle"
          borderWidth="1px"
          zIndex={1}
          boxShadow="0 0 0 12px var(--colors-bg-canvas)"
          fontWeight="semibold"
        >
          {number}
        </Circle>
        <Heading textStyle={{ base: 'lg', md: 'xl' }}>{title}</Heading>
      </Stack>
      <Stack ps="12" pt={{ base: '3', md: '4' }} className={article()}>
        {children}
      </Stack>
    </Box>
  )
}
