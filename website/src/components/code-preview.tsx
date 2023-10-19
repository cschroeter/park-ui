import { ArrowDownToLineIcon, ArrowUpToLineIcon } from 'lucide-react'
import { useState, type PropsWithChildren } from 'react'
import { cx, sva } from 'styled-system/css'
import { Box, Flex } from 'styled-system/jsx'
import { CopyToClipboardButton } from './copy-to-clipboard-button'
import { Button } from './ui'

const styles = sva({
  slots: ['root', 'control', 'preview', 'footer'],
  base: {
    root: {
      bg: 'gray.dark.2',
      borderRadius: 'l3',
      borderWidth: '1px',
      position: 'relative',
    },
    control: {
      position: 'absolute',
      right: '3',
      top: '3',
      zIndex: '1',
    },
    preview: {
      p: '4',
      _collapsed: {
        maxHeight: '32',
        overflow: 'hidden',
        _before: {
          content: "''",
          inset: '0',
          position: 'absolute',
          backgroundImage: 'linear-gradient(0deg, var(--colors-gray-dark-2) 16%,transparent 100%)',
          borderRadius: 'l3',
          pointerEvents: 'none',
        },
      },
    },
    footer: {
      alignItems: 'center',
      bottom: '3',
      justifyContent: 'center',
      position: 'absolute',
      width: 'full',
      _expanded: {
        display: 'none',
      },
    },
  },
})()

type Props = {
  isAttached?: boolean
  expanded?: boolean
  code: string
}

export const CodePreview = (props: PropsWithChildren<Props>) => {
  const { isAttached, expanded, code } = props
  const isCollapsable = code.split('\n').length > 8
  const [collapsed, setCollapsed] = useState(isCollapsable && !expanded)

  return (
    <Box
      className={cx(styles.root, 'not-prose', 'dark')}
      borderTopRadius={isAttached ? '0!' : 'l3'}
      borderWidth={isAttached ? '0!' : '1px'}
    >
      <Flex className={styles.control} display={{ base: 'none', md: 'flex' }}>
        {isCollapsable && (
          <Button
            px="0"
            variant="ghost"
            size="xs"
            onClick={() => setCollapsed(!collapsed)}
            color="gray.dark.11"
          >
            {collapsed ? <ArrowDownToLineIcon /> : <ArrowUpToLineIcon />}
          </Button>
        )}
        <CopyToClipboardButton content={code} />
      </Flex>
      <Box className={styles.preview} data-state={collapsed ? 'collapsed' : 'expanded'}>
        {props.children}
      </Box>
      <Flex className={styles.footer} data-state={collapsed ? 'collapsed' : 'expanded'}>
        <Button variant="link" color="gray.dark.11" size="sm" onClick={() => setCollapsed(false)}>
          Expand code
        </Button>
      </Flex>
    </Box>
  )
}
