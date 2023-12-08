import { useEffect } from 'react'

/**
 * adds class dark to html element when data-theme is set to dark for ladle <-> tailwindcss dark mode sync
 */
export const useDarkMode = () => {
  useEffect(() => {
    const htmlElement = document.querySelector('html')

    const handleColorModeChange = () => {
      const dataTheme = htmlElement?.getAttribute('data-theme')
      if (dataTheme === 'dark') {
        htmlElement?.classList.add('dark')
      } else {
        htmlElement?.classList.remove('dark')
      }
    }

    // Create a MutationObserver
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          handleColorModeChange()
        }
      }
    })

    if (!htmlElement) return
    // Start observing changes to the data-theme attribute
    observer.observe(htmlElement, { attributes: true })

    handleColorModeChange()
    return () => {
      // Clean up the observer when the component unmounts
      observer.disconnect()
    }
  }, [])
}
