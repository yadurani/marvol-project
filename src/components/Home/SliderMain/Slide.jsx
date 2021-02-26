import React from 'react'

import Title from '../../Common/Title'
import { Container } from '../../../styled/styledCommons'
import {
  SlideWrapper,
  SlideContentText,
  SlideImg,
  SlideImgMobile,
} from './styles'
import Paragraph from '../../Common/Paragraph'
import Button from '../../Common/Button'

const Slide = ({ data: { img, title, description }, width }) => {
  return (
    <SlideWrapper img={img} width={width}>
      <Container>
        <SlideImgMobile src={img} alt={title} />
        <SlideContentText>
          <SlideImg src="images/logo-spiderman.png" alt="Logo de spiderman" />
          <Title white notMargin>
            {title}
          </Title>
          <Paragraph text={description} white />
          <Button text="Ver ahora" />
        </SlideContentText>
      </Container>
    </SlideWrapper>
  )
}

export default Slide
