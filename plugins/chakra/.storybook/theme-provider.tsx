import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import { Fragment, useEffect, type ReactNode } from 'react'
import { createTheme } from '../src/theme'

type Props = {
  colorMode: 'dark' | 'light'
  children?: ReactNode | undefined
}

const theme = createTheme({ accentColor: 'amber', grayColor: 'sand', borderRadius: 'sm' })

export const ThemeProvider = (props: Props) => {
  return (
    <ChakraProvider theme={theme}>
      <Main {...props} />
    </ChakraProvider>
  )
}

const Main = (props: Props) => {
  const { colorMode, children } = props
  const { setColorMode } = useColorMode()
  useEffect(() => setColorMode(colorMode ? colorMode : 'light'), [colorMode])
  return <Fragment>{children}</Fragment>
}
