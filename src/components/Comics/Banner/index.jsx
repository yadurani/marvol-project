import React from 'react'
import { Container } from '../../../styled/styledCommons'
import Button from '../../Common/Button'
import Title from '../../Common/Title'
import Paragraph from '../../Common/Paragraph'
import { BannerContentText, BannerWrapper } from './styles'

const Banner = () => {
  return (
    <BannerWrapper>
      <Container>
        <BannerContentText>
          <Paragraph text="MARVEL ILIMITADO" white bold />
          <Title white>QUE VIENE ESTE AÑO</Title>
          <Button text="Próximamente" outline />
        </BannerContentText>
      </Container>
    </BannerWrapper>
  )
}

export default Banner
