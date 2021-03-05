import React from 'react'
import useInterval from '../../../hooks/useInterval'
import useResize from '../../../hooks/useResize'
import useSlider from '../../../hooks/useSlider'
import Slide from './Slide'
import { slides } from '../../../constants/data'
import { Container } from '../../../styled/styledCommons'
import {
  SliderWrapper,
  SliderNavList,
  SlideNavItem,
  SliderContent,
} from './styles'

const SliderMain = () => {
  const {
    state,
    flag,
    handleNav,
    nextSlide,
    handleResize,
    getWidth,
  } = useSlider(slides)
  const { translate, transition, activeIndex } = state
  const width = getWidth()
  useInterval(nextSlide, !flag ? 10000 : null)
  useResize(handleResize)
  return (
    <SliderWrapper>
      <SliderContent
        translate={translate}
        transition={transition}
        width={width * slides.length}>
        {slides?.map((slide, i) => (
          <Slide key={i} data={slide} width={width} />
        ))}
      </SliderContent>
      <Container>
        <SliderNavList>
          {slides?.map((slide, i) => (
            <SlideNavItem
              key={i}
              active={activeIndex === i}
              onClick={() => handleNav(i)}>
              <span>{slide.caption}</span>
            </SlideNavItem>
          ))}
        </SliderNavList>
      </Container>
    </SliderWrapper>
  )
}

export default SliderMain
