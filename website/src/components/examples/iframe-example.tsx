'use client'
import { useEffect, useMemo } from 'react'
import { useInterval } from 'usehooks-ts'
import { useIframeResizeObserver } from '~/lib/use-iframe-resize-observer'
import { useThemeStore } from '~/lib/use-theme-store'

interface Props {
  src: string
}

export const IFrameExample = ({ src }: Props) => {
  const { ref, height } = useIframeResizeObserver()
  const { accentColor, grayColor, borderRadius } = useThemeStore()

  const message = useMemo(
    () => ({
      payload: {
        accent: accentColor,
        gray: grayColor,
        borderRadius: borderRadius,
      },
    }),
    [accentColor, grayColor, borderRadius],
  )

  useEffect(() => {
    const postTheme = () => {
      if (ref.current?.contentWindow) {
        ref.current.contentWindow.postMessage(message, '*')
      }
    }
    postTheme()
  }, [message, ref])

  useInterval(() => {
    if (ref.current?.contentWindow) {
      ref.current.contentWindow.postMessage(message, '*')
    }
  }, 1000)

  return <iframe ref={ref} title="Responsive Iframe" width="100%" height={height} src={src} />
}
