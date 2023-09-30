import { ArrowDownToLineIcon, ArrowUpToLineIcon } from 'lucide-react'
import { useState, type PropsWithChildren } from 'react'
import { cx, sva } from 'styled-system/css'
import { Box, Flex } from 'styled-system/jsx'
import { CopyToClipboardButton } from './copy-to-clipboard-button'
import { Button } from './ui'

const styles = sva({
  slots: ['root', 'control', 'preview'],
  base: {
    root: {
      position: 'relative',
      bg: { base: 'grayPalette.50', _dark: 'grayPalette.900' },
      borderWidth: '1px',
      borderRadius: 'l3',
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
          backgroundImage: 'linear-gradient(0deg, var(--colors-bg-canvas) 16%,transparent 100%)',
          borderRadius: 'l3',
          pointerEvents: 'none',
        },
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
  const isCollapsable = code.split('\n').length > 3
  const [collapsed, setCollapsed] = useState(isCollapsable && !expanded)

  return (
    <Box className={cx(styles.root, 'not-prose')} borderTopRadius={isAttached ? '0!' : 'l3'}>
      <Flex className={styles.control}>
        {isCollapsable && (
          <Button px="0" variant="ghost" size="xs" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <ArrowDownToLineIcon /> : <ArrowUpToLineIcon />}
          </Button>
        )}
        <CopyToClipboardButton content={code} />
      </Flex>
      <Box className={styles.preview} data-state={collapsed ? 'collapsed' : 'expanded'}>
        {props.children}
      </Box>
    </Box>
  )
}
