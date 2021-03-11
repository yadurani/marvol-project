import React from 'react'
import { Container } from '../../../styled/styledCommons'
import {
  BannerInfoContent,
  BannerInfoContentText,
  BannerInfoImg,
  BannerInfoWrapper,
} from './styles'
import TopNavigation from './TopNavigation'

const BannerInfo = () => {
  return (
    <BannerInfoWrapper>
      <TopNavigation />
      <BannerInfoContent>
        <Container>
          <BannerInfoContentText>
            <BannerInfoImg src="images/detail.jpg" alt="El hombre araña" />
          </BannerInfoContentText>
        </Container>
      </BannerInfoContent>
    </BannerInfoWrapper>
  )
}

export default BannerInfo
