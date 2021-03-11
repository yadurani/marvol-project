import React from 'react'
import { Container } from '../../../styled/styledCommons'
import Button from '../../Common/Button'
import Paragraph from '../../Common/Paragraph'
import Title from '../../Common/Title'
import {
  UnlimitedBannerContent,
  UnlimitedBannerText,
  UnlimitedWrapper,
  UnlimitedImgMobile,
  UnlimitedTitle,
} from './styles'

const UnlimitedMarvel = () => {
  return (
    <UnlimitedWrapper>
      <UnlimitedBannerContent>
        <UnlimitedImgMobile src="images/unlimited.jpg" alt="Unlimited marvel" />
        <Container>
          <UnlimitedBannerText>
            <UnlimitedTitle>DISPONIBLE AHORA</UnlimitedTitle>
            <Title white notMargin>
              NUEVO EN MARVEL UNLIMITED
            </Title>
            <Paragraph
              white
              text="¡Lea estos 28,000 cómics digitales por$ 9.99 al mes!"
            />
            <Button text="OBTÉN MARVEL UNLIMITED " outline />
          </UnlimitedBannerText>
        </Container>
      </UnlimitedBannerContent>
    </UnlimitedWrapper>
  )
}

export default UnlimitedMarvel
