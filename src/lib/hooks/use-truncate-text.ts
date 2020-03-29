import { useLayoutEffect, useRef } from 'react'

function useTruncateText(text: string) {
  const ref = useRef<HTMLElement>()

  useLayoutEffect(() => {
    const wordArray = text.split(' ')
    while (ref.current.scrollHeight > ref.current.offsetHeight) {
      wordArray.pop()
      ref.current.innerText = wordArray.join(' ') + '...'
    }
  }, [text])

  return ref
}

export { useTruncateText }
