import { useLayoutEffect, useRef } from 'react'

function useTruncatedText(text: string) {
  const ref = useRef<HTMLElement>()

  useLayoutEffect(() => {
    if (process.env.NODE_ENV !== 'production' && !ref.current) {
      throw new Error('Remember to set the ref returned by useTruncateText')
    }

    // Inspired by '3. Using JavaScript' here:
    // http://hackingui.com/front-end/a-pure-css-solution-for-multiline-text-truncation/
    function truncate() {
      ref.current.innerText = text
      const wordArray = text.split(' ')
      while (ref.current.scrollHeight > ref.current.offsetHeight) {
        wordArray.pop()
        ref.current.innerText = wordArray.join(' ') + '...'
      }
    }

    truncate()

    if (ResizeObserver) {
      const observer = new ResizeObserver(() => {
        // Unobserve to avoid endless recursion
        observer.unobserve(ref.current)
        truncate()
        observer.observe(ref.current)
      })

      observer.observe(ref.current)

      return () => {
        observer.disconnect()
      }
    }
  }, [text])

  return ref
}

export { useTruncatedText }
