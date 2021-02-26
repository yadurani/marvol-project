import styled from 'styled-components'
import { Container } from '../../../styled/styledCommons'
import { TitleContainer } from '../../Common/Title/styles'

export const UnlimitedWrapper = styled.div`
  @media (max-width: 767px) {
    ${Container} {
      padding: 0;
    }
    ${TitleContainer} {
      font-size: ${({ theme }) => theme.sizeFont.lg};
      line-height: 30px;
    }
  }
`

export const UnlimitedBannerContent = styled.div`
  background-image: url('images/gifts-banner.png');
  background-position: center right;
  background-size: auto 100%;
  clip-path: polygon(0 0, 100% 0, 100% 95%, 0% 100%);
  display: grid;
  min-height: 530px;
  position: relative;
  &:before {
    background-color: ${({ theme }) => theme.colors.secondary};
    content: '';
    clip-path: polygon(0 0, 70% 0, 100% 100%, 0% 100%);
    height: 100%;
    position: absolute;
    width: 63%;
    z-index: -1;
    @media (max-width: 767px) {
      width: 100%;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
  }
  @media (max-width: 767px) {
    background-image: none;
    margin-bottom: 20px;
  }
`

export const UnlimitedImgMobile = styled.img`
  height: 300px;
  width: 100%;
  object-fit: cover;
  @media (min-width: 767px) {
    display: none;
  }
`

export const UnlimitedBannerText = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 767px) {
    padding: 50px 15px 80px;
    width: 100%;
  }
`
export const UnlimitedTitle = styled.p`
  color: ${({ theme }) => theme.colors.primary.main};
  margin-top: 0;
`
