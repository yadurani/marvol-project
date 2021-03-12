import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const TopNavigationLink = styled(Link)`
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-auto-flow: column;
  grid-gap: 15px;
  font-size: ${({ theme }) => theme.sizeFont.xs};
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
`
export const TopIconBack = styled.div`
  border-bottom: 3px solid;
  border-right: 3px solid;
  border-color: ${(props) =>
    props.white ? props.theme.colors.white : props.theme.colors.primary.main};
  content: '';
  height: 10px;
  margin-top: -1.5px;
  right: 5px;
  transform: rotate(140deg);
  width: 10px;
`

export const TopIconNext = styled(TopIconBack)`
  transform: rotate(-45deg);
`

export const TopNavigationWrapper = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
  display: grid;
  height: 39px;
`
export const TopNavigationContent = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 72px 1fr;
  justify-items: center;
`
export const TopNavPages = styled.div`
  display: grid;
  grid-gap: 0 40px;
  grid-template-columns: repeat(2, auto);
  justify-self: center;
  margin-left: -7%;
  @media (max-width: 767px) {
    display: none;
  }
`
export const BannerInfoWrapper = styled.div`
  margin-top: 92px;
  @media (max-width: 768px) {
    margin-top: 50px;
  }
`
export const BannerInfoContent = styled.div`
  display: grid;
  overflow: hidden;
  position: relative;
  z-index: -1;
  &:before {
    background-image: url(${(props) => props.src});
    background-position: center;
    background-size: cover;
    bottom: 0;
    content: '';
    filter: blur(4px);
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
  &:after {
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    @media (max-width: 767px) {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
`
export const BannerInfoContentText = styled.div`
  filter: blur(0);
  display: grid;
  grid-template-columns: 350px 1fr;
  position: relative;
  z-index: 1;
  grid-gap: 0 64px;
  padding: 70px 0;
  @media (max-width: 960px) {
    grid-template-columns: 200px 1fr;
    padding: 40px 0;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 40px 0;
    grid-gap: 30px 0;
  }
`
export const BannerInfoImg = styled.img`
  width: 100%;
`
export const BannerInfoText = styled.div`
  color: white;
`
export const BannerInfoTextRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 175px);
  grid-gap: 0 95px;
  p:first-child,
  p:nth-of-type(4),
  p:nth-of-type(5) {
    grid-column: 1 / -1;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`
export const BannerInfoParagraph = styled.p`
  font-size: ${({ theme }) => theme.sizeFont.md};
  margin: 0 0 1.5rem;
`
