import { useRef, useState } from 'react'
import { useInterval, useIsomorphicLayoutEffect } from 'usehooks-ts'

export const useIFrameResizeObserver = () => {
  const ref = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(0)
  useInterval(
    () => {
      const body = ref.current?.contentDocument?.body
      if (body) {
        setHeight(body.scrollHeight)
      }
    },
    height && height !== 150 ? null : 16,
  )

  useIsomorphicLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => setHeight(entry.target.scrollHeight))
    })
    const body = ref?.current?.contentDocument?.body
    if (body && height && height !== 150) {
      resizeObserver.observe(body)
    }
    return () => {
      resizeObserver.disconnect()
    }
  }, [height])

  return { ref, height }
}
