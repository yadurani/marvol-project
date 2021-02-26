import { useEffect, useRef } from 'react'

const useResize = (callback) => {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const tick = () => savedCallback.current()
    const onResize = window.addEventListener('resize', tick)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])
}

export default useResize
