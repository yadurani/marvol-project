import { useState, useEffect } from 'react'

const useSlider = (slides) => {
  const getWidth = () => window.innerWidth
  const [flag, setFlag] = useState(false)
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  })

  const { activeIndex, transition } = state
  const nextSlide = () => {
    if (activeIndex === slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    })
  }

  const handleNav = (i) => {
    setFlag(true)
    setState({
      ...state,
      activeIndex: i,
      translate: i * getWidth(),
    })
  }

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 })
  }

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 })
    // eslint-disable-next-line
  }, [transition])

  return {
    state,
    flag,
    nextSlide,
    handleNav,
    handleResize,
    getWidth,
  }
}

export default useSlider
