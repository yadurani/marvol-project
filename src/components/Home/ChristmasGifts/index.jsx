import React from 'react'
import { gifts } from '../../../constants/data'
import { Container } from '../../../styled/styledCommons'
import Button from '../../Common/Button'
import Paragraph from '../../Common/Paragraph'
import Title from '../../Common/Title'
import {
  GiftBannerContent,
  GiftBannerText,
  GiftItem,
  GiftItemCaption,
  GiftItemImg,
  GiftsList,
  GiftsWrapper,
  GiftTitle,
  GiftImgMobile,
} from './styles'

const ChristmasGifts = () => {
  return (
    <GiftsWrapper>
      <GiftBannerContent>
        <GiftImgMobile src="images/gifts-banner.png" alt="Gifts" />
        <Container>
          <GiftBannerText>
            <Title white notMargin>
              Guía de regalos navideños 2020
            </Title>
            <Paragraph
              white
              text="Los regalos perfectos para todos los fanáticos de Marvel"
            />
            <Button text="Ver ahora" outline />
          </GiftBannerText>
        </Container>
      </GiftBannerContent>
      <Container>
        <GiftsList>
          {gifts?.map((gift, i) => (
            <GiftItem key={i}>
              <GiftItemImg src={gift.img} alt={gift.title} />
              <GiftItemCaption>{gift.caption}</GiftItemCaption>
              <GiftTitle>{gift.title}</GiftTitle>
            </GiftItem>
          ))}
        </GiftsList>
      </Container>
    </GiftsWrapper>
  )
}

export default ChristmasGifts
