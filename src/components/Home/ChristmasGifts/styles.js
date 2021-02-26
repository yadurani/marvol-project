import styled from 'styled-components'
import { Container } from '../../../styled/styledCommons'
import { TitleContainer } from '../../Common/Title/styles'

export const GiftsWrapper = styled.div`
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

export const GiftBannerContent = styled.div`
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

export const GiftImgMobile = styled.img`
  height: 300px;
  width: 100%;
  object-fit: cover;
  @media (min-width: 767px) {
    display: none;
  }
`

export const GiftBannerText = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 767px) {
    padding: 50px 15px 80px;
    width: 100%;
  }
`

export const GiftsList = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(4, 1fr);
  margin-top: -80px;
  padding: 25px;
  position: relative;
  @media (max-width: 767px) {
    grid-gap: 15px;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    margin-bottom: 30px;
    margin-top: 0;
    overflow-x: auto;
    padding: 15px 15px 20px;
    ::-webkit-scrollbar {
      height: 5px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.primary.main};
    }
  }
`

export const GiftItem = styled.li`
  background-color: ${({ theme }) => theme.colors.white};
  list-style: none;
`

export const GiftItemImg = styled.img`
  text-align: center;
  width: 100%;
  @media (max-width: 767px) {
    width: 95%;
  }
`

export const GiftItemCaption = styled.p`
  color: ${({ theme }) => theme.colors.gray.main};
  font-size: ${({ theme }) => theme.sizeFont.sm};
  font-weight: bold;
  margin-bottom: 0;
  text-transform: uppercase;
`

export const GiftTitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  font-size: ${({ theme }) => theme.sizeFont.sm};
`
