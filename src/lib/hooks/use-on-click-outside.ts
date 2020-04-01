import { useEffect, useRef } from 'react'

interface Options {
  includeSelf?: boolean
}

function useOnClickOutside(
  callback: () => void,
  { includeSelf = false }: Options = {}
) {
  const clickOutsideRef = useRef<Element>()

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (
        (event.target === clickOutsideRef.current && includeSelf) ||
        !clickOutsideRef.current.contains(event.target as Node)
      ) {
        callback()
      }
    }

    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('click', onClick)
    }
  }, [callback, includeSelf])

  return { clickOutsideRef }
}

export { useOnClickOutside }
