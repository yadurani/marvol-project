import { useState } from 'react'

const useToogle = () => {
  const [isOpen, setIsOpen] = useState(false)
  const next = () => setIsOpen(!isOpen)
  return [isOpen, next]
}

export default useToogle
